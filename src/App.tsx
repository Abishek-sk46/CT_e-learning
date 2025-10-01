
import Navbar from "./components/Navbar"; // 👈 Import our Navbar
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <div className="bg-[#0D0D12] min-h-screen pt-8">
      {/* Navbar at the top */}
      <Navbar activeIndex={0} />
      <HeroSection />
    </div>
  );
}

export default App;
