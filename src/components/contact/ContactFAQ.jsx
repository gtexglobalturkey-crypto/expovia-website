import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I participate in an international exhibition?",
    answer:
      "Simply contact the VIAFA team. We evaluate your products, target markets and objectives, then recommend the most suitable exhibitions and guide you through the complete participation process.",
  },
  {
    question: "Does VIAFA organize exhibitions?",
    answer:
      "VIAFA acts as an official international exhibition representative. We work closely with exhibition organizers and provide professional participation services for Turkish companies.",
  },
  {
    question: "Can you help us choose the right exhibition?",
    answer:
      "Yes. We analyze your industry, export goals and target countries to recommend the exhibitions that provide the greatest business potential.",
  },
  {
    question: "What services does VIAFA provide?",
    answer:
      "Our services include exhibition selection, stand reservation, organizer coordination, participation management and pre-exhibition guidance to ensure a smooth participation experience.",
  },
];

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="contact-faq contact-section">
      <div className="container">
        <div className="contact-faq-layout">
          <div className="contact-faq-intro">
            <p className="contact-section-label">
              Frequently Asked Questions
            </p>

            <h2>
              Answers to Common Questions
            </h2>

            <p>
              Find quick answers about international exhibitions, participation
              procedures and how VIAFA supports your company throughout the
              process.
            </p>
          </div>

          <div className="contact-faq-list">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`contact-faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? -1 : index,
                      )
                    }
                  >
                    <span>{item.question}</span>

                    <span className="contact-faq-icon">
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  <div className="contact-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFAQ;