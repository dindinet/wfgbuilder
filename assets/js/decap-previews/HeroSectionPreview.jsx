const HeroSectionPreview = (props) => {
    const { title, subtitle, image, image_alt, align, actions, background, getAsset } = props;
    const imageUrl = getAsset(image);
    const backgroundImageUrl = getAsset(background?.background_image);

    return (
        <div className="hero-section">
            <div
                className="background-container"
                style={{
                    backgroundColor: background?.background_color,
                    backgroundImage: `url(${backgroundImageUrl})`,
                    opacity: background?.background_image_opacity / 100,
                }}
            />
            <div className="container">
                <div className={`hero-section-content align-${align}`}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div className="actions">
                        {actions?.map(action => (
                            <a href={action.url} className={`button ${action.style}`}>
                                {action.label}
                            </a>
                        ))}
                    </div>
                </div>
                {imageUrl && (
                    <div className="hero-section-image">
                        <img src={imageUrl.toString()} alt={image_alt} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroSectionPreview;