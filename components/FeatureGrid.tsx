type Feature = {
  title: string;
  description: string;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="features-grid">
      {features.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
