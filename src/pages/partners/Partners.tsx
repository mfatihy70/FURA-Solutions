import Footer from "../../components/Footer";
import PartnersChild from "./PartnersChild";
import "/src/styles/Partners.css";

const Partners = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        <PartnersChild />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
