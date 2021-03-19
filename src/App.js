import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Dashboard from "./components/Dashboard/dashboard";
import Enquiry from "./components/Enquiry/enquiry";
import Subject from "./components/Subject/subject";
import AboutUs from "./components/AboutUs/aboutus";
import Service from "./components/Service/service";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Enquiry />
      <Subject />
      <Service />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
