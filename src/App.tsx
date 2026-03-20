import ProfileSection from "./components/ProfileSection";
import CheerSection from "./components/CheerSection";
import LogSection from "./components/LogSection";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl h-[80vh] flex flex-col md:flex-row gap-4 md:gap-6">
        {/* 왼쪽 */}
        <div className="flex flex-col gap-4 w-full md:w-72 shrink-0 h-full bg-white rounded-2xl shadow-sm p-4">
          <div className="flex-1 overflow-y-auto">
            <ProfileSection />
          </div>
          <div className="shrink-0">
            <CheerSection />
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="flex-1 h-full">
          <LogSection />
        </div>
      </div>
    </div>
  );
};

export default App;
