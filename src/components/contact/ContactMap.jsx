import {
  ExternalLink,
 
} from "lucide-react";

function ContactMap() {
  return (
    <section
      id="contact-office"
      className="contact-map-section contact-section"
    >
      <div className="container">
        <div className="contact-map-layout">
          <div className="contact-map">
            <iframe
              title="EREXPO Office Location"
              src="https://www.google.com/maps?q=Istanbul,Turkey&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="contact-office-card">
            <p className="contact-section-label">
              Our Office
            </p>

            <h2>
              Visit EREXPO
            </h2>

            <p>
              We welcome manufacturers, exporters and international partners
              who would like to discuss exhibition opportunities and future
              cooperation.
            </p>

            <div className="contact-office-details">
              <div className="contact-office-detail">
                <span>Address</span>

                <p>
                  Istanbul
                  <br />
                  Türkiye
                </p>
              </div>

              <div className="contact-office-detail">
                <span>Phone</span>

                <a href="tel:+905551234567">
                  +90 555 123 45 67
                </a>
              </div>

              <div className="contact-office-detail">
                <span>Email</span>

                <a href="mailto:info@erexpo.com">
                  info@erexpo.com
                </a>
              </div>

              <div className="contact-office-detail">
                <span>Working Hours</span>

                <p>
                  Monday – Friday
                  <br />
                  09:00 – 18:00
                </p>
              </div>
            </div>

            <a
              className="contact-directions-link"
              href="https://maps.google.com/?q=Istanbul"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions

              <ExternalLink size={15} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;