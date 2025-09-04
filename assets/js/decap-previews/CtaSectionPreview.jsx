const CtaSectionPreview = (props) => {
    const { title, subtitle, actions, has_background, background_color } = props;
    return (
        <div
            className="cta-section"
            style={{
                backgroundColor: has_background ? background_color : 'transparent',
            }}
        >
            <div className="container">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <div className="actions">
                    {actions?.map(action => (
                        <a href={action.url} className={`button ${action.style}`}>
                            {action.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CtaSectionPreview;