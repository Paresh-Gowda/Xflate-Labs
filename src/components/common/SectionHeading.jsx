function SectionHeading({ title, description, action }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}

export default SectionHeading;