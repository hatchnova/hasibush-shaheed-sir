const JournalLinks = ({ journals }) => {
  return (
    <ul className="list-decimal pl-5 space-y-2">
      {journals.map((journal, i) => (
        <li key={i}>
          <a
            href={journal.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            {journal.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default JournalLinks;
