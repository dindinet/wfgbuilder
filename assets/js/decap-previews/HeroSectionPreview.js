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