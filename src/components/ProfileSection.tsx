import profileImg from "../assets/profile.png";

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <img
        src={profileImg}
        alt="프로필 사진"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="text-center">
        <h1 className="text-xl font-bold">박세민</h1>
        <p className="text-sm text-gray-400 mt-1">Backend Developer</p>
      </div>
      <hr className="w-full border-gray-100" />
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        안녕하세요 신입 백엔드 개발자 박세민입니다.
      </p>
    </div>
  );
};

export default ProfileSection;
