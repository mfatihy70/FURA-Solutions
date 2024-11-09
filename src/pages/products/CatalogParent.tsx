import Footer from "@/components/Footer";
import Catalog from "./Catalog";
import "@/styles/Catalog.css";

const CatalogParent = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
};

export default CatalogParent;
