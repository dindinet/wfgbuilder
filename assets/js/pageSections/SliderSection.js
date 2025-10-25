class HoriZontaDelic {
    constructor(t) {
        this.slider = t,
        this.config = {
            scrollBy: this.slider.dataset.scrollBy,
            prevArrow: this.slider.dataset.prevArrow,
            nextArrow: this.slider.dataset.nextArrow,
            arrowKeys: "true" === this.slider.dataset.arrowKeys,
            arrowsPosition: this.slider.dataset.arrowsPosition || "below",
            arrowsInOut: this.slider.dataset.arrowsInOut,
            gap: parseInt(this.slider.dataset.gap, 10) || 0,
            visibleSlides: this.slider.dataset.visibleSlides,
            slideWidth: this.slider.dataset.slideWidth,
            pagerContainer: this.slider.dataset.pagerContainer
        },
        this.slider && 0 !== this.slider.children.length && (this.currentPage = 0,
        this.isDragging = !1,
        this.startX = 0,
        this.scrollLeft = 0,
        this.velocityX = 0,
        this.animationFrame = null,
        this.pagerButtons = [],
        this._setupArrowsPosition(),
        this.bindEvents(),
        this.update())
    }
    _setupArrowsPosition() {
        if ("sides" !== this.config.arrowsPosition)
            return;
        const t = document.querySelector(this.config.prevArrow)
          , e = document.querySelector(this.config.nextArrow);
        if (!t || !e)
            return void console.error('hzd.js: Arrows for "sides" positioning not found.');
        const i = document.createElement("div");
        i.classList.add("hzd-wrapper"),
        this.slider.id && (i.id = `hzd-wrapper-${this.slider.id}`),
        this.slider.parentNode.insertBefore(i, this.slider),
        i.appendChild(this.slider),
        i.appendChild(t),
        i.appendChild(e),
        t.classList.add("hzd-arrow", "hzd-arrow-prev"),
        e.classList.add("hzd-arrow", "hzd-arrow-next"),
        this._updateArrowColors()
    }
    _updateArrowColors() {
        const t = this.slider.dataset.arrowColor
          , e = this.slider.dataset.arrowHoverColor;
        if ((t || e) && this.slider.id) {
            const i = `hzd-style-${this.slider.id}`;
            let s = document.getElementById(i);
            s || (s = document.createElement("style"),
            s.id = i,
            document.head.appendChild(s));
            const r = `#hzd-wrapper-${this.slider.id}`;
            let o = "";
            t && (o += `${r} .hzd-arrow { fill: ${t}; }\n`),
            e && (o += `${r} .hzd-arrow:hover { fill: ${e}; }\n`),
            s.innerHTML = o
        }
    }

 _positionSideArrows() {
        if (this.config.arrowsPosition !== 'sides') return;

        const prevArrowEl = document.querySelector(this.config.prevArrow);
        const nextArrowEl = document.querySelector(this.config.nextArrow);
        if (!prevArrowEl || !nextArrowEl) return;

        const wrapper = this.slider.parentNode;
        const wrapperWidth = wrapper.offsetWidth;
        const sliderWidth = this.slider.offsetWidth;
        const sliderOffsetLeft = this.slider.offsetLeft;

        if (sliderWidth >= wrapperWidth) {
            prevArrowEl.style.left = '1rem';
            prevArrowEl.style.right = 'auto';
            nextArrowEl.style.right = '1rem';
            nextArrowEl.style.left = 'auto';
            return;
        }

        let nextArrowLeft = sliderOffsetLeft + sliderWidth - 64;
        if(this.config.arrowsInOut === 'out'){
          nextArrowLeft = sliderOffsetLeft + sliderWidth + 16;
        }
        console.log('nextArrowLeft = '+nextArrowLeft)
        
        // Position next arrow (right-hand button)
        nextArrowEl.style.left = `${nextArrowLeft}px`;
        nextArrowEl.style.right = 'auto';

        // Position prev arrow (left-hand button)
        prevArrowEl.style.right = `${nextArrowLeft}px`;
        prevArrowEl.style.left = 'auto';
    }
    update() {
        if (0 === this.slider.children.length)
            return;
        if (this.config.visibleSlides) {
            let t = this.slider.clientWidth / parseInt(this.config.visibleSlides, 10) - this.config.gap;
            if (this.config.slideWidth) {
                const e = parseInt(this.config.slideWidth, 10);
                t = Math.min(t, e)
            }
            this.slider.style.gridAutoColumns = `${t}px`
        }
        const t = this.slider.children[0].clientWidth + this.config.gap
          , e = this.slider.clientWidth;
        this.itemsPerScreen = Math.max(1, Math.round(e / t)),
        this.scrollByAmount = parseInt(this.config.scrollBy, 10) || this.itemsPerScreen,
        this.totalPages = Math.ceil(this.slider.children.length / this.scrollByAmount),
        this.setupPager(),
        setTimeout(( () => this._positionSideArrows()), 0)
    }
    setupPager() {
        if (!this.config.pagerContainer)
            return;
        const t = document.querySelector(this.config.pagerContainer);
        if (t) {
            t.innerHTML = "",
            this.pagerButtons = [];
            for (let e = 0; e < this.totalPages; e++) {
                const i = document.createElement("button");
                i.addEventListener("click", ( () => this.goToPage(e))),
                t.appendChild(i),
                this.pagerButtons.push(i)
            }
            this.updatePager()
        } else
            console.error(`Pager container "${this.config.pagerContainer}" not found.`)
    }
    updatePager() {
        0 !== this.pagerButtons.length && this.pagerButtons.forEach(( (t, e) => {
            t.classList.toggle("active", e === this.currentPage)
        }
        ))
    }
    bindEvents() {
        let t, e;
        this.config.prevArrow && document.querySelector(this.config.prevArrow)?.addEventListener("click", ( () => this.prev())),
        this.config.nextArrow && document.querySelector(this.config.nextArrow)?.addEventListener("click", ( () => this.next())),
        this.config.arrowKeys && (this.slider.setAttribute("tabindex", "0"),
        this.slider.addEventListener("keydown", (t => {
            "ArrowLeft" === t.key && (t.preventDefault(),
            this.prev()),
            "ArrowRight" === t.key && (t.preventDefault(),
            this.next())
        }
        ))),
        this.slider.addEventListener("mousedown", (t => this.dragStart(t))),
        this.slider.addEventListener("mouseleave", ( () => this.dragEnd())),
        this.slider.addEventListener("mouseup", ( () => this.dragEnd())),
        this.slider.addEventListener("mousemove", (t => this.dragMove(t))),
        window.addEventListener("resize", ( () => {
            clearTimeout(t),
            t = setTimeout(( () => this.update()), 100)
        }
        )),
        this.slider.addEventListener("scroll", ( () => {
            cancelAnimationFrame(this.animationFrame),
            clearTimeout(e),
            e = setTimeout(( () => this.onScrollEnd()), 200)
        }
        ))
    }
    onScrollEnd() {
        this.isDragging || this.updateActivePage()
    }
    updateActivePage() {
        if (0 === this.slider.children.length)
            return;
        const t = this.slider.children[0].clientWidth + this.config.gap;
        if (t <= 0)
            return;
        const e = Math.round(this.slider.scrollLeft / t)
          , i = Math.floor(e / this.scrollByAmount);
        i !== this.currentPage && (this.currentPage = i,
        this.updatePager())
    }
    goToPage(t) {
        this.currentPage = Math.max(0, Math.min(t, this.totalPages - 1));
        let e = this.currentPage * this.scrollByAmount;
        if (e = Math.min(e, this.slider.children.length - 1),
        this.slider.children[e]) {
            this.slider.children[e].scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest"
            })
        }
        this.updatePager()
    }
    next() {
        const t = this.currentPage < this.totalPages - 1 ? this.currentPage + 1 : 0;
        this.goToPage(t)
    }
    prev() {
        const t = this.currentPage > 0 ? this.currentPage - 1 : this.totalPages - 1;
        this.goToPage(t)
    }
    dragStart(t) {
        "A" !== t.target.tagName && "IMG" !== t.target.tagName || t.preventDefault(),
        this.isDragging = !0,
        this.slider.style.scrollSnapType = "none",
        this.slider.classList.add("is-dragging"),
        this.startX = t.pageX - this.slider.offsetLeft,
        this.scrollLeft = this.slider.scrollLeft,
        this.velocityX = 0,
        cancelAnimationFrame(this.animationFrame)
    }
    dragEnd() {
        this.isDragging && (this.isDragging = !1,
        this.slider.style.scrollSnapType = "x mandatory",
        this.slider.classList.remove("is-dragging"),
        this.beginInertia())
    }
    dragMove(t) {
        if (!this.isDragging)
            return;
        t.preventDefault();
        const e = t.pageX - this.slider.offsetLeft - this.startX
          , i = this.scrollLeft - e;
        this.velocityX = i - this.slider.scrollLeft,
        this.slider.scrollLeft = i,
        this.updateActivePage()
    }
    beginInertia() {
        const t = () => {
            this.slider.scrollLeft += this.velocityX,
            this.velocityX *= .95,
            Math.abs(this.velocityX) > .5 && (this.animationFrame = requestAnimationFrame(t))
        }
        ;
        t()
    }
    static init() {
        document.querySelectorAll("[data-hzd-slider]").forEach((t => new HoriZontaDelic(t)))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    HoriZontaDelic.init();
});