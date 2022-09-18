import Navbar from "../components/Navbar";
import About from "../components/About"
import Portfolio from "../components/Portfolio";
import PersonalProfile from "../components/PersonalProfile";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <PersonalProfile/>
      <Portfolio/>
    </div>
  );
}
