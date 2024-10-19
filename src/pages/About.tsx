import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        <div className="container my-4">
          <h2 className="mb-4">Hakkımızda</h2>
          <div className="text-start">
            <p className="lead mb-4">
              FURA Makina Endüstriyel Çözümler Ltd. Şti, 15 yıllık sektör
              tecrübesinin birikimiyle, raylı sistemler teknolojisi alanında
              öncü bir firma olarak öne çıkmaktadır. Uluslararası ortaklarımızla
              birlikte, yüksek kaliteli ve güvenilir ürünler sunarak uzun vadeli
              müşteri memnuniyeti sağlamayı hedefliyoruz.
            </p>
            <p className="lead">
              Firmamız, raylı sistemler için geniş bir ürün yelpazesi ve sistem
              çözümleri sunmaktadır. Mühendislik titizliğiyle geliştirilen her
              ürünümüz, sektördeki en son teknolojik yeniliklerle donatılmıştır.
              Müşterilerimize özelleştirilmiş çözümler sunarak, onların
              ihtiyaçlarını karşılamak ve projelerini başarıyla tamamlamak için
              çalışıyoruz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
