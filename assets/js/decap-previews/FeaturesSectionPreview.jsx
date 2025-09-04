const FeaturesSectionPreview = (props) => {
    const { title, features, getAsset } = props;
    return (
        <div className="features-section">
            <div className="container">
                <h2>{title}</h2>
                <div className="features">
                    {features?.map(feature => {
                        const imageUrl = getAsset(feature.image);
                        return (
                            <div className="feature">
                                {imageUrl && (
                                    <div className="feature-image">
                                        <img src={imageUrl.toString()} alt={feature.image_alt} />
                                    </div>
                                )}
                                <div className="feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.content}</p>
                                    <div className="actions">
                                        {feature.actions?.map(action => (
                                            <a href={action.url} className={`button ${action.style}`}>
                                                {action.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default FeaturesSectionPreview;