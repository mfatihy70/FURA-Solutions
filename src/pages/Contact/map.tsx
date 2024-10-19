import { Col } from "react-bootstrap";

const Map = () => {
  return (
    <Col md={6}>
      <h2 className="mb-4">Ofis Konumumuz</h2>
      <div style={{ height: "300px", background: "#eee" }}>
        <iframe
          className="w-100 h-100"
          src="https://maps.google.com/maps?output=embed&amp;q=nef%2022%20atak%C3%B6y&amp;z=10&amp;t=m"
          data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIybmVmJTIwMjIlMjBhdGFrJUMzJUI2eSUyMiUyQyUyMnpvb20lMjIlM0ExMCUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTdE"
        ></iframe>
      </div>
    </Col>
  );
};

export default Map;
