//import CMS from 'decap-cms-app';
//const h = CMS.h;
const run = () => {
    const check = () => {
        if (window.CMS && window.h) {
            initPreviews();
        } else {
            setTimeout(check, 100);
        }
    };

    const initPreviews = () => {
        const CMS = window.CMS;
        const h = window.h;
        // --- Child Preview Components ---
          const BlogFeedSectionPreview = (props) => {
    const { title, show_recent, recent_count, width, collections, isLoading, h, getAsset } = props;
    const posts = collections.posts || [];
    const authors = collections.authors || [];
    const categories = collections.categories || [];
    const loadingPosts = isLoading;

    // Create maps for easy lookup by id
    const authorMap = authors.reduce((acc, member) => {
        acc[member.data.id] = member.data;
        return acc;
    }, {});

    const categoryMap = categories.reduce((acc, cat) => {
        acc[cat.data.id] = cat.data;
        return acc;
    }, {});

    let postsToDisplay = [];
    if (show_recent && posts) {
        const sortedPosts = [...posts]
            .filter(p => p.data && p.data.date)
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

        if (recent_count > 0) {
            postsToDisplay = sortedPosts.slice(0, recent_count);
        } else {
            postsToDisplay = sortedPosts;
        }
    }

    let content;
    if (loadingPosts) {
        content = h('p', { className: 'text-gray-500' }, "Loading posts...");
    } else if (postsToDisplay.length === 0 && show_recent) {
        content = h('p', { className: 'text-gray-500' }, "No posts found to display.");
    } else {
        content = h('div', { className: 'grid grid-cols-auto-fit-sm grid-gap-xl' },
            postsToDisplay.map((post) => {
                const postAuthor = post.data.author ? authorMap[post.data.author] : null;
                const postCategories = post.data.categories?.map(catId => categoryMap[catId]).filter(Boolean) || [];
                const imageUrl = post.data.image ? getAsset(post.data.image).toString() : null;

                const categoryElements = [];
                if (postCategories.length > 0) {
                    categoryElements.push(h('span', {}, 'In '));
                    postCategories.forEach((cat, index) => {
                        categoryElements.push(h('a', { href: '#', className: 'card-meta' }, cat.title));
                        if (index < postCategories.length - 1) {
                            categoryElements.push(', ');
                        }
                    });
                }

                let authorElement;
                if (postAuthor) {
                    const authorName = `${postAuthor.first_name} ${postAuthor.last_name}`;
                    if (postAuthor.link) {
                        authorElement = h('span', {}, [' by ', h('a', { href: '#', className: 'text-sm' }, authorName)]);
                    } else {
                        authorElement = h('span', {}, ` by ${authorName}`);
                    }
                }

                return h('article', { className: 'cell' },
                    h('div', { className: 'card-post' }, [
                        imageUrl && h('a', { className: 'card-image', href: '#' },
                            h('img', { src: imageUrl, alt: post.data.image_alt || '', className: 'responsive-img' })
                        ),
                        h('div', { className: 'card-body' }, [
                            h('header', { className: 'xcard-header' }, [
                                postCategories.length > 0 && h('div', {}, categoryElements),
                                h(title ? 'h3' : 'h2', { className: 'h4 card-title' },
                                    h('a', { className: 'menu-item', href: '#' }, post.data.title)
                                )
                            ]),
                            post.data.excerpt && h('div', { className: 'card-content' },
                                h('p', {}, post.data.excerpt)
                            ),
                            h('footer', { className: 'card-footer' }, [
                                h('span', {},
                                    h('time', { dateTime: post.data.date }, new Date(post.data.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }))
                                ),
                                authorElement
                            ])
                        ])
                    ])
                );
            })
        );
    }

    return h('div', { className: 'blog-feed-section p-6 bg-gray-50 rounded-lg' },
        h('div', { className: `container container--${width}` },
            h('h2', { className: 'text-2xl font-bold mb-4' }, title),
            h('p', { className: 'text-sm text-gray-500 mb-6' },
                show_recent ? `Previewing ${postsToDisplay.length} recent posts.` : "Not showing recent posts."
            ),
            show_recent && content
        )
    );
};

BlogFeedSectionPreview.needs = ['posts', 'authors', 'categories'];

          const ContentSectionPreview = createClass({
  render: function () {
    const { title, subtitle, content, width } = this.props;
    const MarkdownPreview = window.CMS.getWidget("markdown").preview;

    return h(
      "section",
      { className: "section" },
      h(
        "div",
        { className: `container container--${width}` },
        title && h("h2", { className: "" }, title),
        subtitle && h("p", { className: "" }, subtitle),
        content &&
          h(
            "div",
            { className: "" },
            h(MarkdownPreview, { value: content })
          )
      )
    );
  },
});

          const CtaSectionPreview = (props) => {
    const { title, subtitle, actions, has_background, background_color, width, h } = props;
    return h('div', {
        className: 'cta-section',
        style: {
            backgroundColor: has_background ? background_color : 'transparent',
        },
    },
        h('div', { className: `container container--${width}` },
            h('h2', null, title),
            h('p', null, subtitle),
            h('div', { className: 'actions' },
                actions?.map(action =>
                    h('a', { href: action.url, className: `button ${action.style}` }, action.label)
                )
            )
        )
    );
};

//export default CtaSectionPreview;
          const FeaturesSectionPreview = (props) => {
    const { title, features, getAsset, h } = props;

    return h('section', { className: 'section-container--xl', style: { backgroundColor: '#f9fafb' } },
        title && h('div', { className: 'container container--wide text-center' },
            h('h2', { className: 'section-title' }, title)
        ),
        h('div', { className: 'container container--wide' },
            features?.map(feature => {
                const gridClasses = ['grid', 'grid-cols-auto-fit-sm', 'grid-gap-xl'];
                if (feature.align === 'center') gridClasses.push('text-center');
                if (feature.align === 'right') gridClasses.push('text-right');

                const imageUrl = feature.image ? getAsset(feature.image) : null;

                const imageDivClasses = ['my-lg'];
                if (feature.image_position === 'right') imageDivClasses.push('media-right');

                return h('div', { className: gridClasses.join(' ') },
                    imageUrl && h('div', { className: imageDivClasses.join(' ') },
                        h('img', {
                            src: imageUrl.toString(),
                            alt: feature.image_alt,
                            className: 'responsive-img'
                        })
                    ),
                    h('div', { className: 'section__body cell' },
                        feature.title && (
                            title ?
                            h('h3', { className: 'section-title' }, feature.title) :
                            h('h2', { className: 'section-title' }, feature.title)
                        ),
                        feature.content && h('div', { className: 'section__copy' },
                            feature.content
                        ),
                        feature.actions && h('div', { className: 'section__actions btn-group' },
                            feature.actions.map(action =>
                                h('a', { href: action.url, className: 'button' }, action.label)
                            )
                        )
                    )
                );
            })
        )
    );
};
          const FullWidthCenteredColumnSectionPreview = createClass({
  render: function () {
    const { content, width } = this.props;
    const MarkdownPreview = window.CMS.getWidget('markdown').preview;

    return h(
      "section",
      {},
      h("div", { className: `content content--${width}` },
        h(MarkdownPreview, { value: content || "" })
      )
    );
  },
});


          const FullWidthHeadingSectionPreview = (props) => {
    const {
        title,
        titlecolour,
        subtitle,
        subtitleposition,
        subtitlecolour,
        h
    } = props;

    const subtitleElement = subtitle ? h('h2', {
        className: 'text-highlight',
        style: { color: subtitlecolour || '' }
    }, subtitle) : null;

    const titleElement = title ? h('h1', {
        style: { color: titlecolour || '' }
    }, title) : null;

    const elements = subtitleposition === 'above'
        ? [subtitleElement, titleElement]
        : [titleElement, subtitleElement];

    return h('section', { id: 'headings' },
        h('div', { className: 'full-width' },
            ...elements.filter(Boolean) // Filter out null elements
        )
    );
};

          const FullWidthImageSectionPreview = createClass({
  render: function () {
    const { getAsset, image, image_alt, caption } = this.props;

    const imagePath = getAsset(image);

    return h(
      "div",
      { className: "full-width" },
      h(
        "figure",
        {},
        h("img", {
          src: imagePath ? imagePath.toString() : "",
          alt: image_alt,
          className: "responsive-img",
        }),
        h("figcaption", {}, caption)
      )
    );
  },
});


          const FullWidthSplitScreenSectionPreview = (props) => {
  const { image, image_alt, imageposition, content, getAsset, h, width } = props;
  const MarkdownPreview = window.CMS.getWidget('markdown').preview;

  const imageUrl = image ? getAsset(image) : null;

  const imageEl = imageUrl ? h('img', { src: imageUrl.toString(), alt: image_alt }) : null;
  const contentEl = h('div', {}, h(MarkdownPreview, { value: content || "" }));

  return h('section', { className: `full-width-split-screen container container--${width}` },
    imageposition === 'left' && imageEl,
    contentEl,
    imageposition === 'right' && imageEl
  );
};

          const GridHeroSectionPreview = (props) => {
    const {
        bgimage,
        announcement,
        announcementbtntxt,
        title,
        subtitle,
        actions,
        getAsset,
        h
    } = props;

    const bgimageUrl = bgimage ? getAsset(bgimage).toString() : '';

    return h('div', { className: 'section--hero-centered' },
        bgimageUrl && h('img', { id: 'bgimage', src: bgimageUrl, alt: '', className: 'bgimage' }),
        h('div', { id: 'herotext' },
            announcement && h('div', { style: { marginBottom: '1rem' } },
                h('div', { className: 'funding-announcement' },
                    announcement,
                    h('a', { href: '#', style: { position: 'relative' } },
                        h('span', { 'aria-hidden': 'true', className: 'absolute-inset-0' }),
                        announcementbtntxt,
                        h('span', { 'aria-hidden': 'true' }, ' →')
                    )
                )
            ),
            title && h('h1', { className: 'section-title' }, title),
            subtitle && h('p', { className: 'section-subtitle' }, subtitle),
            actions && h('div', { className: 'banner-actions btn-group' },
                actions?.map(action =>
                    h('a', { href: action.url, className: `menu-link text-xs btn btn-outline ${action.style}` }, action.label)
                )
            )
        )
    );
};

//export default GridHeroSectionPreview;

          const HeroSectionPreview = (props) => {
    const {
        title,
        subtitle,
        image,
        image_alt,
        image_position,
        align,
        actions,
        background,
        has_background,
        titlecolor,   // Added
        subtitlecolor, // Added
        getAsset,
        h
    } = props;

    const imageUrl = image ? getAsset(image) : null;
    const backgroundImageUrl = background?.background_image ? getAsset(background.background_image) : null;

    // Section classes and styles
    const sectionClasses = ['section', 'hero', 'section--padding'];
    const sectionStyles = {};

    if (has_background) {
        if (background?.background_color) {
            sectionClasses.push(`bg-${background.background_color}`);
            if (['blue', 'dark', 'black', 'primary'].includes(background.background_color)) {
                sectionClasses.push('inverse');
            }
        }
        if (backgroundImageUrl) {
            // Apply background image as inline style to the section
            sectionStyles.backgroundImage = `url(${backgroundImageUrl.toString()})`;
            sectionStyles.opacity = (background.background_image_opacity || 100) / 100;
            sectionStyles.backgroundSize = background.background_image_size || 'cover';
            sectionStyles.backgroundRepeat = background.background_image_repeat || 'no-repeat';
        }
    }

    // Inline styles for title and subtitle colors
    let inlineStyles = '';
    if (titlecolor) {
        inlineStyles += `.hero-content .section-title{color: ${titlecolor};}`;
    } else {
        // If titlecolor is not provided, ensure the style is not applied or reset
        inlineStyles += `.hero-content .section-title{color: inherit;}`;
    }
    if (subtitlecolor) {
        inlineStyles += `.hero-content .section-subtitle{color: ${subtitlecolor};}`;
    } else {
        // If subtitlecolor is not provided, ensure the style is not applied or reset
        inlineStyles += `.hero-content .section-subtitle{color: inherit;}`;
    }
    const styleTag = inlineStyles ? h('style', {}, inlineStyles) : null;


    // Media (image) element
    let imageElement = null;
    if (imageUrl) {
        const mediaClasses = ['hero-media']; // Updated classes
        if (image_position === 'right') {
            mediaClasses.push('media-right');
        }
        if (image_position === 'left') {
            mediaClasses.push('media-left');
        }
        imageElement = h('div', { className: mediaClasses.join(' ') },
            h('img', { src: imageUrl.toString(), alt: image_alt })
        );
    }

    // Body (content) element
    const titleElement = title ? h('h1', { className: 'section-title h2-bold' }, title) : null; // Updated classes
    const subtitleElement = subtitle ? h('div', { className: 'section-subtitle' }, // Updated classes
        h('p', { className: 'text-base leading-relaxed' }, subtitle) // Added classes
    ) : null;
    const actionsElement = actions && actions.length > 0 ? h('div', { className: 'banner-actions btn-group' }, // Updated classes
        actions.map(action => {
            const btnClasses = ['menu-link', 'text-xs', 'btn', 'btn-outline']; // Updated base classes
            if (action.style === 'secondary') {
                btnClasses.push('btn-secondary'); // Updated class name
            }
            return h('a', { href: action.url, className: btnClasses.join(' ') }, action.label);
        })
    ) : null;

    const bodyElement = h('div', { className: 'hero-content' }, // Updated classes
        titleElement,
        subtitleElement,
        actionsElement
    );

    // Grid container for media and body
    const gridClasses = ['grid', 'grid-hero', 'grid-gap-4'];
    if (align === 'center') {
        gridClasses.push('align-items-center');
    } else if (align === 'right') {
        gridClasses.push('text-right');
    }
    
    const gridContainer = h('div', { className: gridClasses.join(' ') },
        imageElement,
        bodyElement
    );

    // Final Assembly
    return h('section', { className: sectionClasses.join(' '), style: sectionStyles },
        styleTag, // Inserted style tag here
        h('div', { className: 'container container--wide my-40' },
            gridContainer
        )
    );
};

//export default HeroSectionPreview;
          const SimpleCTAPreview = (props) => {
  const {
    width = 'flush',
    tagline,
    offertext,
    description,
    bgcolor,
    bgimage,
    actions = [],
    getAsset,
    h,
    // New props from config.yml
    offertextsize,
    offertextcolor,
    offertextoutlinecolor,
    taglinetextsize,
    taglinetextcolor
  } = props;

  const ctaStyle = {
    backgroundColor: bgcolor,
    paddingBlock: bgimage ? '' : '4cqw',
    container: 'cta / inline-size'
  };

  const bgImageUrl = bgimage ? getAsset(bgimage).toString() : null;

  // Styles for the offer text (h2)
  const offertextStyle = {
    fontSize: offertextsize ? `${offertextsize}cqw` : null,
    color: offertextcolor,
    WebkitTextStroke: offertextsize && offertextoutlinecolor ? `calc(${offertextsize}cqw / 48) ${offertextoutlinecolor}` : null
  };

  // Styles for the secondary texts (h3)
  const secondaryTextStyle = {
    fontSize: taglinetextsize ? `${taglinetextsize}cqw` : null,
    color: taglinetextcolor
  };

  return h('section', { class: 'section' },
    h('div', { class: `container container--${width}` },
      h('div', { class: 'wfg-bg-cta', style: ctaStyle },
        bgImageUrl && h('img', { src: bgImageUrl, class: 'bg-image' }),
        h('div', { class: 'content' },
          h('h3', { style: secondaryTextStyle }, tagline),
          h('h2', { style: offertextStyle }, offertext),
          h('h3', { style: secondaryTextStyle }, description),
          h('div', { class: 'actions' },
            actions.map(action =>
              h('a', { href: action.target },
                h('button', {
                  style: {
                    color: action.textcolor,
                    backgroundColor: action.bgcolor
                  }
                }, action.text)
              )
            )
          )
        )
      )
    )
  );
};

          
const SliderSectionPreview = (props) => {
  const {
    h,
    getAsset,
    title,
    subtitle,
    scrollername,
    scrollerwidth,
    visibleslides,
    scrollby,
    arrowcolor,
    arrowposition,
    arrowinout,
    displaypager,
    scrollerimages
  } = props;

  const imagesToDisplay = (scrollerimages || []).slice(0, visibleslides || 1);

  const sliderImages = imagesToDisplay.map(image =>
    h('img', {
      src: getAsset(image.scrollerimage).toString(),
      alt: image.scrollerimagealt,
      style: { width: '100%', display: 'block', objectFit: 'cover', height: '100%' }
    })
  );

  const slider = h('div', {
    className: 'scroller',
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${visibleslides || 1}, 1fr)`,
      gap: '1rem',
      overflow: 'hidden',
      flexGrow: 1,
      flexShrink: 1,
      minWidth: 0
    }
  }, sliderImages);

  const prevArrow = h('svg', { style: {width: '48px', height: '48px', flexShrink: 0}, fill: arrowcolor || '#000000', viewBox: '0 0 32 32' },
    h('path', { d: 'M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23.010 14.989h-11.264l3.617-3.617c0.39-0.39 0.39-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.39-0.39 0.39-1.023 0-1.414l-3.68-3.68h11.327c0.552 0 1-0.448 1-1s-0.448-1-1-1z' })
  );

  const nextArrow = h('svg', { style: {width: '48px', height: '48px', flexShrink: 0}, fill: arrowcolor || '#000000', viewBox: '0 0 32 32' },
    h('path', { d: 'M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM16.637 9.957c-0.39 0.39-0.39 1.024 0 1.414l3.617 3.617h-11.264c-0.553 0-1 0.448-1 1s0.447 1 1 1h11.327l-3.68 3.68c-0.39 0.39-0.39 1.023 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.391-0.39-1.023-0.39-1.415 0z' })
  );

  const pageCount = scrollerimages ? Math.ceil(scrollerimages.length / (scrollby || 1)) : 0;
  const pager = displaypager && pageCount > 0 ? h('div', { className: 'navbtns', style: { textAlign: 'center', marginTop: '1rem', color: '#ccc', fontSize: '2rem' } }, '●'.repeat(pageCount).split('').join(' ')) : null;

  const titleElement = title ? h('h2', {style: {textAlign: 'center'}}, title) : null;
  const subtitleElement = subtitle ? h('p', {style: {textAlign: 'center'}}, subtitle) : null;

  let content;
  if (arrowposition === 'sides') {
    if (arrowinout === 'out') {
      const containerClassName = `cq-slider-${Math.random().toString(36).substr(2, 9)}`;
      // Estimate a breakpoint: (slide width * visible slides) + arrows + gaps
      const breakpoint = (visibleslides || 1) * 250 + 132;

      const styleString = `
        .${containerClassName} {
          container-type: inline-size;
        }

        /* Default state: 'out' (flexbox) */
        .${containerClassName} .hzd-dynamic-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .${containerClassName} .hzd-dynamic-arrow {
          cursor: pointer;
        }

        /* Narrow state: 'in' (absolute) */
        @container (max-width: ${breakpoint}px) {
          .${containerClassName} .hzd-dynamic-wrapper {
            position: relative; /* Become the positioning context */
            display: block; /* Undo flex */
          }

          .${containerClassName} .hzd-dynamic-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            pointer-events: all;
          }

          .${containerClassName} .hzd-dynamic-arrow.prev {
              left: 1rem;
          }

          .${containerClassName} .hzd-dynamic-arrow.next {
              right: 1rem;
          }
        }
      `;

      content = h('div', { className: containerClassName },
        h('style', {}, styleString),
        h('div', { className: 'hzd-dynamic-wrapper' },
            h('div', { className: 'hzd-dynamic-arrow prev' }, prevArrow),
            slider,
            h('div', { className: 'hzd-dynamic-arrow next' }, nextArrow)
        )
      );
    } else {
      // 'in' or undefined: Use simple absolute positioning
      content = h('div', { className: 'hzd-wrapper', style: { position: 'relative' } },
        slider,
        h('div', { className: 'hzd-arrow-wrapper', style: { position: 'absolute', width: '100%', top: '50%', left: '0', transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', boxSizing: 'border-box', pointerEvents: 'none' } },
          h('div', { style: { pointerEvents: 'all', cursor: 'pointer' } }, prevArrow),
          h('div', { style: { pointerEvents: 'all', cursor: 'pointer' } }, nextArrow)
        )
      );
    }
  } else { // 'below' or undefined
    content = h('div', {},
      slider,
      h('div', { className: 'scrollerarrows', style: { display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' } }, prevArrow, nextArrow)
    );
  }

  return h('div', { className: `container container--${scrollerwidth || 'full'}`, style: {padding: '2rem 0'} },
    titleElement,
    subtitleElement,
    content,
    pager
  );
};

          const TeamRosterSectionPreview = (props) => {
  const { heading, intro_text, team_members, getAsset, h } = props;
  // Assuming this is used directly representing the section scope or block scope

  return h('section', { className: 'section-team-roster container-wide py-12' },
    h('div', { className: 'team-roster-header  items-center' },
      h('h2', { className: 'text-4xl font-bold' }, heading),
      h('div', { className: 'text-md color-neutral' }, intro_text) // markdown would need a markdown-to-jsx parser or similar in real CMS, simple render for now
    ),
    h('div', { className: 'team-roster-list' },
      team_members.map((member, index) => {
        const imageSrc = member.image ? getAsset(member.image).toString() : '';
        return h('div', { key: index, className: 'team-member-card py-6' },
          h('div', { className: 'team-member-image' },
            imageSrc ? h('img', { src: imageSrc, alt: member.name, className: 'rounded-lg', style: { width: '100%', height: 'auto', objectFit: 'cover' } }) : null
          ),
          h('div', { className: 'team-member-details' },
            h('h3', { className: 'text-xl font-semibold mb-2' }, 
              h('span', { className: 'bullet' }, '• '),
              `${member.name || ''}, ${member.title || ''}`
            ),
            h('div', { className: 'text-sm color-neutral' }, member.bio || '') // simple render for text
          )
        );
      })
    )
  );
};



          const TeamSectionPreview = (props) => {
  const { title, team, width, collections, isLoading, getAsset, h } = props;
  const MarkdownPreview = window.CMS.getWidget('markdown').preview;

  // Get all authors from the collections prop, which is passed down by the parent preview.
  const allAuthors = collections.authors || [];

  // Get the selected team member IDs from the 'team' field. This preserves the order from the editor.
  const teamIds = team ? (team.toJS ? team.toJS() : team) : [];

  // Create a map of authors for easy and fast lookup by ID.
  const authorMap = allAuthors.reduce((acc, author) => {
    acc[author.data.id] = author;
    return acc;
  }, {});

  // Map over the teamIds array (which has the correct order) and look up the full author object.
  // This ensures the preview order matches the editor order.
  const teamMembers = teamIds.map(id => authorMap[id]).filter(Boolean);

  if (isLoading) {
    return h('div', {}, 'Loading team members...');
  }

  return h('section', { className: 'section section--team' },
    title ? h('div', { className: `container container--${width} align-center` },
      h('h2', { className: 'section-title' }, title)
    ) : null,
    h('div', { className: `container container--${width}` },
      h('div', { className: 'grid grid-cols-auto-fit-sm grid-gap-xl' },
        teamMembers.map(person => {
          // The 'person' object is the full collection entry.
          // The fields are in the 'data' property.
          const personData = person.data;
          const photo = personData.photo ? getAsset(personData.photo) : null;

          return h('div', { className: 'cell', key: personData.id },
            h('div', { className: 'card team-member' },
              photo ? h('figure', { className: 'card-image' },
                h('img', { src: photo.toString(), alt: personData.photo_alt })
              ) : null,
              h('div', { className: 'card-body' },
                h('header', { className: 'card-header' },
                  h('h3', { className: 'h4 card-title' }, `${personData.first_name} ${personData.last_name}`)
                ),
                personData.bio ? h('div', { className: 'card-body' },
                  h(MarkdownPreview, { value: personData.bio })
                ) : null
              )
            )
          );
        })
      )
    )
  );
};

// By declaring this, the parent page preview will fetch the 'authors'
// collection and pass it in the 'collections' prop.
TeamSectionPreview.needs = ['authors'];


        const previewComponents = {
          "BlogFeedSection": BlogFeedSectionPreview,
          "ContentSection": ContentSectionPreview,
          "CtaSection": CtaSectionPreview,
          "FeaturesSection": FeaturesSectionPreview,
          "FullWidthCenteredColumnSection": FullWidthCenteredColumnSectionPreview,
          "FullWidthHeadingSection": FullWidthHeadingSectionPreview,
          "FullWidthImageSection": FullWidthImageSectionPreview,
          "FullWidthSplitScreenSection": FullWidthSplitScreenSectionPreview,
          "GridHeroSection": GridHeroSectionPreview,
          "HeroSection": HeroSectionPreview,
          "SimpleCTA": SimpleCTAPreview,
          "SliderSection": SliderSectionPreview,
          "TeamRosterSection": TeamRosterSectionPreview,
          "TeamSection": TeamSectionPreview,
        };

        // --- Main Page Preview Component ---
        const PagePreview = createClass({
            getInitialState: function() {
                return { collections: {}, isLoading: true };
            },

            componentDidMount: function() {
                this.fetchCollections();
            },

            componentDidUpdate: function(prevProps) {
                if (prevProps.entry !== this.props.entry) {
                    this.fetchCollections();
                }
            },

            fetchCollections: function() {
                const { entry } = this.props;
                const sections = entry.getIn(['data', 'sections']);
                if (!sections) {
                    this.setState({ isLoading: false });
                    return;
                }

                const sectionTypes = sections.map(s => s.get('type'));
                const collectionsToFetch = new Set();

                sectionTypes.forEach(type => {
                    const component = previewComponents[type];
                    if (component && component.needs) {
                        component.needs.forEach(coll => collectionsToFetch.add(coll));
                    }
                });

                if (collectionsToFetch.size === 0) {
                    this.setState({ isLoading: false });
                    return;
                }

                const fetchPromises = Array.from(collectionsToFetch).map(coll =>
                    this.props.getCollection(coll).then(data => ({ name: coll, data: data.map(d => d.toJS()) }))
                );

                Promise.all(fetchPromises).then(fetchedCollections => {
                    const collections = fetchedCollections.reduce((acc, curr) => {
                        acc[curr.name] = curr.data;
                        return acc;
                    }, {});
                    this.setState({ collections, isLoading: false });
                }).catch(error => {
                    console.error("Error fetching collections:", error);
                    this.setState({ isLoading: false });
                });
            },

            render: function() {
                const { entry, getAsset, widgetFor } = this.props;
                const { collections, isLoading } = this.state;

                const sections = entry.getIn(["data", "sections"]);
                if (!sections) {
                    return widgetFor("body");
                }

                return h("div", { class: "page-preview" },
                    sections.map((section) => {
                        const type = section.get("type");
                        const component = previewComponents[type];

                        if (!component) {
                            return h("div", null, `Unknown section type: ${type}`);
                        }
                        
                        const props = {
                            ...section.toJS(),
                            getAsset,
                            h,
                            key: type,
                            collections,
                            isLoading
                        };

                        return h(component, props);
                    })
                );
            }
        });
        CMS.registerPreviewTemplate("advanced", PagePreview);

        const PostPreview = createClass({
            getInitialState: function() {
                return { author: null, isLoading: true };
            },

            componentDidMount: function() {
                this.fetchAuthor();
            },

            componentDidUpdate: function(prevProps) {
                if (prevProps.entry !== this.props.entry) {
                    this.fetchAuthor();
                }
            },

            fetchAuthor: function() {
                const { entry, getCollection } = this.props;
                const authorSlug = entry.getIn(['data', 'author']);
                if (!authorSlug) {
                    this.setState({ isLoading: false, author: null });
                    return;
                }

                getCollection('authors').then(collection => {
                    if (!collection) {
                        console.warn('Authors collection not found or empty.');
                        this.setState({ isLoading: false, author: null });
                        return;
                    }
                    const authorEntry = collection.find(item => {
                        if (!item || typeof item.get !== 'function') {
                            console.warn('Invalid item in authors collection, skipping:', item);
                            return false;
                        }
                        return item.get('slug') === authorSlug;
                    });
                    const authorData = authorEntry ? authorEntry.get('data').toJS() : null;
                    this.setState({ author: authorData, isLoading: false });
                }).catch(error => {
                    console.error("Error fetching authors collection:", error);
                    this.setState({ isLoading: false });
                });
            },

            render: function() {
                const { entry, getAsset, widgetFor } = this.props;
                const { author, isLoading } = this.state;

                const title = entry.getIn(['data', 'title']);
                const subtitle = entry.getIn(['data', 'subtitle']);
                const image = getAsset(entry.getIn(['data', 'image']));
                const image_alt = entry.getIn(['data', 'image_alt']);
                const categories = entry.getIn(['data', 'categories']);
                const date = entry.getIn(['data', 'date']);
                const tags = entry.getIn(['data', 'tags']);
                const body = widgetFor('body');

                const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
                const dateTime = date ? new Date(date).toISOString().slice(0, 16).replace('T', ' ') : '';

                let authorDisplay = null;
                if (isLoading) {
                    authorDisplay = h('span', { className: 'post-author' }, ' by loading...');
                } else if (author) {
                    const authorName = `${author.first_name} ${author.last_name}`;
                    if (author.link) {
                        authorDisplay = h('span', { className: 'post-author' }, ' by ', h('a', { href: author.link }, authorName));
                    } else {
                        authorDisplay = h('span', { className: 'post-author' }, ' by ', authorName);
                    }
                } else if (entry.getIn(['data', 'author'])) {
                    // Fallback to slug if author not found
                    authorDisplay = h('span', { className: 'post-author' }, ' by ', entry.getIn(['data', 'author']));
                }

                return h('article', { className: 'post' },
                    h('div', { className: 'container container--wide' },
                        image && h('div', { className: 'post-featured-image' },
                            h('img', { src: image.toString(), alt: image_alt, className: 'responsive-img' })
                        )
                    ),
                    h('div', { className: 'container container--narrow' },
                        h('header', { className: 'post-header' },
                            categories && h('div', { className: 'post-meta' },
                                categories.toJS().join(', ')
                            ),
                            h('h1', { className: 'post-title mb-0' }, title),
                            h('h2', { className: 'post-subtitle mt-0' }, subtitle),
                            h('div', { className: 'post-meta' },
                                h('span', null, 'On ', h('time', { dateTime: dateTime }, formattedDate)),
                                authorDisplay
                            )
                        ),
                        h('div', { className: 'post-layout' }, body),
                        tags && h('footer', { className: 'post-tags' },
                            tags.toJS().join(', ')
                        )
                    )
                );
            }
        });
        CMS.registerPreviewTemplate("posts", PostPreview);
        CMS.registerPreviewStyle("//localhost:1313/css/wfg.min.css");
    };

    check();
};
window.addEventListener('DOMContentLoaded', run);
