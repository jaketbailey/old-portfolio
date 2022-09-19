import Navbar from "../components/Navbar";
import About from "../components/About"
import Portfolio from "../components/Portfolio";
import PersonalProfile from "../components/PersonalProfile";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <div>
        <Head>
          <title>Jake Bailey</title>
          <link rel="icon" href="/images/favicon.ico"/>
        </Head>
      <Navbar/>
      <About/>
      <PersonalProfile/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}
