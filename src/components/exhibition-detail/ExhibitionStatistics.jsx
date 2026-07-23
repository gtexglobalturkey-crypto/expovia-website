const statistics = [
  {
    value: "35,000+",
    label: "Professional Visitors",
  },
  {
    value: "650+",
    label: "Exhibiting Companies",
  },
  {
    value: "42",
    label: "Participating Countries",
  },
  {
    value: "78,000 m²",
    label: "Exhibition Area",
  },
];

function ExhibitionStatistics() {
  return (
    <section className="exhibition-statistics">
      <div className="container">
        <div className="statistics-grid">
          {statistics.map((item) => (
            <article
              key={item.label}
              className="statistic-card"
            >
              <strong>{item.value}</strong>

              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionStatistics;