
import { Navbar, HeroSection ,FieldsSection } from "./components";

import "./App.css";

function App() {
  return (
    <div className="bg-[#0D0D12] min-h-screen pt-4 sm:pt-8 w-full overflow-x-hidden">
      {/* Navbar at the top */}
      <Navbar activeIndex={0} />
      <HeroSection />
      <FieldsSection />
    </div>
  );
}

export default App;
