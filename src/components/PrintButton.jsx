const PrintButton = () => (
  <div className="print:hidden text-right mb-4">
    <button
      onClick={() => window.print()}
      className="px-4 py-2 bg-black text-white rounded"
    >
      Download PDF
    </button>
  </div>
);

export default PrintButton;
