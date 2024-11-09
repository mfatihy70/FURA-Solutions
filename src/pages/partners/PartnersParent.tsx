import Footer from "@/components/Footer";
import Partners from "./Partners";
import "@/styles/Partners.css";

const PartnersParent = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default PartnersParent;
