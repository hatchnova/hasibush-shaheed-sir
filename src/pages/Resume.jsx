import data from "../data/resumeData.json";

import Section from "../components/Section";
import KeyValueList from "../components/KeyValueList";
import Table from "../components/Table";
import PrintButton from "../components/PrintButton";
import ProfileHeader from "../components/ProfileHeader";
import JournalLinks from "../components/JournalLinks";

const Resume = () => {
  return (
    <main className="max-w-4xl mx-auto bg-white p-8 print:p-6">
      <PrintButton />

      <h1 className="text-2xl font-bold text-center mb-6">
        {data.title}
      </h1>

      {/* 🔹 Profile + Personal Info */}
      <Section title="Personal Information">
        <ProfileHeader
          image={data.profileImage}
          info={data.personalInfo}
        />
      </Section>

      <Section title="Occupational Status">
        <p><strong>Nature of Job:</strong> {data.occupationalStatus.natureOfJob}</p>
        <p><strong>Present Status:</strong> {data.occupationalStatus.presentStatus}</p>
        <p><strong>First Joining:</strong> {data.occupationalStatus.firstJoining}</p>
        <p><strong>General Teaching Experience:</strong> {data.occupationalStatus.generalExperience}</p>
        <p><strong>Teaching Specialization in Honors and Masters Level:</strong> {data.occupationalStatus.specialization.join(", ")}</p> 
      </Section>

    
      {/* 🔹 Service Record Table */}
      <p><strong>Service ID:</strong> {data.occupationalStatus.serviceId}</p>


      <Section title="Service Record">
        <Table
          columns={["From", "To", "Position", "Institution"]}
          data={data.serviceRecord}
        />
      </Section>

    {/* 🔹 Administrative Experience Table */}
    <Section>
        <p><strong>Administrative Experience:</strong> {data.administrativeExperience.title}</p>
    <Table
        columns={data.administrativeExperience.columns}
        data={data.administrativeExperience.records}
    />
    </Section>




      {/* 🔹 Journals Section */}
      <Section title="Selected Journals (Click to View PDF)">
        <JournalLinks journals={data.journals} />
      </Section>

      <Section title="Identification">
        <KeyValueList items={data.identification} />
      </Section>

        {/* 🔹 Academic Qualifications Table */}
      <Section title={data.academicQualifications.title}>
  <table className="w-full border text-sm">
    <thead>
      <tr>
        {data.academicQualifications.columns.map(col => (
          <th key={col} className="border p-1">{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.academicQualifications.records.map((row, i) => (
        <tr key={i}>
          <td className="border p-1">{row.from}</td>
          <td className="border p-1">{row.position}</td>
          <td className="border p-1">{row.institution}</td>
          <td className="border p-1">{row.result}</td>
          <td className="border p-1">{row.group}</td>
          <td className="border p-1">{row.comment}</td>
        </tr>
      ))}
    </tbody>
  </table>
</Section>



        {/* 🔹 Academic Qualifications - Ph.D Dissertation */}
      <Section title="Ph.D Dissertation">
  <p className="font-semibold mb-2">
    {data.academicQualifications.phdDissertation.title}
  </p>

  {data.academicQualifications.phdDissertation.details.map((para, i) => (
    <p key={i} className="mb-2 text-justify">
      {para}
    </p>
  ))}

  <p className="font-semibold mt-3">The research finally includes following matters:</p>
  <ul className="list-decimal pl-6">
    {data.academicQualifications.phdDissertation.focusAreas.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <p className="font-semibold mt-3">Unique Characteristics:</p>
  <ul className="list-disc pl-6">
    {data.academicQualifications.phdDissertation.uniqueFindings.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</Section>

        {/* 🔹 Fellowship / Scholarship */}
<Section title="Fellowship / Scholarship">
  <p>{data.fellowshipAndTraining.fellowship}</p>
</Section>

        {/* 🔹 Training */}
<Section title="Training">
  <ul className="list-decimal pl-6">
    {data.fellowshipAndTraining.training.map((item, i) => (
      <li key={i} className="mb-1">
        <strong>{item.title}:</strong> {item.details}
      </li>
    ))}
  </ul>
</Section>

        {/* 🔹 Research and Interests */}
<Section title={data.researchAndInterests.title}>
  <p>{data.researchAndInterests.description}</p>
</Section>

        {/* 🔹 Computer Experience */}
<Section title={data.computerExperience.title}>
  <p>{data.computerExperience.description}</p>
</Section>

        {/* 🔹 Hobby */}
<Section title={data.hobbies.title}>
  <p>{data.hobbies.description}</p>
</Section>

        {/* 🔹 Research Work & Publications */}
<Section title={data.researchPublications.title}>

  <h3 className="font-semibold mt-2">Publication in the Conference Proceedings</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.conferencePublication.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <h3 className="font-semibold mt-3">Reviewed Journals</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.reviewedJournals.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <h3 className="font-semibold mt-3">Book Chapter (Reviewed)</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.bookChapter.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <h3 className="font-semibold mt-3">Conference Proceedings</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.conferenceProceedings.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <h3 className="font-semibold mt-3">Research Book</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.researchBook.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <h3 className="font-semibold mt-3">Text Book for Higher Secondary</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.textBookHigherSecondary.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <h3 className="font-semibold mt-3">Text Book for Honors and Masters</h3>
  <ul className="list-decimal pl-6">
    {data.researchPublications.textBookHonorsMasters.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

</Section>

        {/* 🔹 Additional Qualifications */}
<Section title={data.additionalQualifications.title}>
  <ul className="list-decimal pl-6">
    {data.additionalQualifications.items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</Section>
        {/* 🔹 Referees */}
<Section title={data.referees.title}>
  <div className="space-y-3">
    {data.referees.list.map((ref, i) => (
      <div key={i} className="border-b pb-2">
        <p className="font-semibold">{ref.name}</p>
        <p>{ref.designation}</p>
        <p>{ref.institution}</p>
        <p><strong>Cell:</strong> {ref.phone}</p>
      </div>
    ))}
  </div>
</Section>

        {/* 🔹 Signature Section */}
<Section className="mt-12">
  <p className="font-semibold mb-2">(Signature)</p>

  {/* Signature Image */}
  <img
    src={data.signature.image}
    alt="Signature"
    className="w-48 h-auto mb-3"
  />

  {/* Signature Details */}
  <p className="font-bold">
    {data.signature.name} – {data.signature.id}
  </p>
  <p>{data.signature.designation}</p>
  <p>{data.signature.institution}</p>
</Section>










    </main>
  );
};

export default Resume;
