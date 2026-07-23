function OfficeLocation() {
  return (
    <section className="office-location section-spacing">
      <div className="container">
        <div className="office-layout">
          <div className="office-content">
            <p className="section-label">
              Office Location
            </p>

            <h2>
              Visit Our Office
            </h2>

            <p>
              Our headquarters is located in Istanbul, connecting Turkish
              manufacturers with leading international exhibition organizers.
            </p>

            <div className="office-details">
              <div>
                <strong>Address</strong>
                <span>
                  Istanbul, Türkiye
                </span>
              </div>

              <div>
                <strong>Email</strong>
                <span>
                  info@erexpo.com
                </span>
              </div>

              <div>
                <strong>Phone</strong>
                <span>
                  +90 212 000 00 00
                </span>
              </div>
            </div>
          </div>

          <div className="office-map">
            <div className="map-placeholder">
              <span>Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeLocation;