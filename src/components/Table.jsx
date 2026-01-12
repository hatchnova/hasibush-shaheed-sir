const Table = ({ columns, data }) => (
  <table className="w-full border text-sm">
    <thead>
      <tr>
        {columns.map(col => (
          <th key={col} className="border p-1">{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          <td className="border p-1">{row.from}</td>
          <td className="border p-1">{row.to}</td>
          <td className="border p-1">{row.position}</td>
          <td className="border p-1">{row.institution}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
);

export default Table;
