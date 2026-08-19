function ViamatePhoneScreenshot({
  image,
  alt,
  caption,
  eager = false,
  className = "",
}) {
  return (
    <figure className={`viamate-phone-screenshot ${className}`.trim()}>
      <div className="viamate-phone-screenshot-frame">
        <img
          src={image}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>

      {caption && (
        <figcaption className="viamate-phone-screenshot-caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default ViamatePhoneScreenshot;
