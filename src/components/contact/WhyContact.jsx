function WhyContact() {
  const benefits = [
    {
      number: "01",
      title: "Fast Response",
      description:
        "Our team reviews every enquiry promptly and provides clear guidance to help you move forward without unnecessary delays.",
    },
    {
      number: "02",
      title: "Professional Exhibition Guidance",
      description:
        "We help you identify the exhibitions that best match your products, target markets and international growth strategy.",
    },
    {
      number: "03",
      title: "Official Organizer Coordination",
      description:
        "From stand reservation to documentation, we coordinate directly with exhibition organizers throughout the participation process.",
    },
    {
      number: "04",
      title: "International Business Support",
      description:
        "Benefit from professional assistance before, during and after the exhibition to maximize your international business opportunities.",
    },
  ];

  return (
    <section className="contact-benefits contact-section">
      <div className="container">
        <div className="contact-section-header">
          <div className="contact-section-header-copy">
            <p className="contact-section-label">
              Why EREXPO
            </p>

            <h2 className="contact-section-heading">
              More Than a Contact Form
            </h2>

            <p className="contact-section-description">
              Every enquiry is handled by professionals with international
              exhibition experience. Our goal is not simply to answer your
              questions, but to help you participate in the right exhibition
              with confidence.
            </p>
          </div>
        </div>

        <div className="contact-benefits-grid">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="contact-benefit-card"
            >
              <span className="contact-benefit-number">
                {benefit.number}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyContact;