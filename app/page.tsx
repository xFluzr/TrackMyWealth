import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  let hello=true;
  const {dupa,dupaLepsza}={
    dupaLepsza:"1",
    dupa:143
  }
  console.log(dupa)

  return (
    <div>
     <Navbar/>
     <LandingPage/>
     <Footer/>
    </div>
    
  );
}
