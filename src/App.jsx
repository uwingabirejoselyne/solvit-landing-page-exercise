import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { Offer } from "./components/Offer";
import { Event } from "./components/cards/Event";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";
import { Mission } from "./components/Mission";
import { Contact } from "./components/Contact";

function App() {


  return (
    <div className="min-h-screen ">
      <Header />
      <Welcome />
      <Offer />
      <About />
      <WhyChooseUs />
      <Mission/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
