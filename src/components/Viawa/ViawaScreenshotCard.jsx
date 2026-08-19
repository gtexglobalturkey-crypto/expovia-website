function ViawaScreenshotCard({ title, description, image, imageAlt }) {
  return (
    <figure className="viawa-screenshot-card">
      <div className="viawa-screenshot-frame">
        <div className="viawa-screenshot-frame-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="viawa-screenshot-frame-image">
          <img
            src={image}
            alt={imageAlt}
          />
        </div>
      </div>

      <figcaption>
        <h3>{title}</h3>

        {description && <p>{description}</p>}
      </figcaption>
    </figure>
  );
}

export default ViawaScreenshotCard;
