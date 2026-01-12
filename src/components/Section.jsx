const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="font-bold text-lg mb-2 border-b">{title}</h2>
    {children}
  </section>
);

export default Section;
