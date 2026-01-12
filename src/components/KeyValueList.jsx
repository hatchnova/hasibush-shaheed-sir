const KeyValueList = ({ items }) => (
  <ul className="space-y-1">
    {items.map((item, i) => (
      <li key={i}>
        <strong>{item.label}:</strong> {item.value}
      </li>
    ))}
  </ul>
);

export default KeyValueList;
