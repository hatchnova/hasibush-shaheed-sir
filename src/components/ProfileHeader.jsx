const ProfileHeader = ({ image, info }) => {
  return (
    <div className="flex gap-6 items-start mb-6">
      
      {/* Personal Info (LEFT) */}
      <div className="flex-1">
        <ul className="space-y-1">
          {info.map((item, i) => (
            <li key={i}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Image (RIGHT) */}
      <img
        src={image}
        alt="Profile"
        className="w-32 h-36 object-cover border"
      />

    </div>
  );
};

export default ProfileHeader;
