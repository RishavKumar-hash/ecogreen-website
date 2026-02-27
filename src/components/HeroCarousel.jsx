function HeroCarousel() {
  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "90vh",
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold">
          Biofuel Distribution & License Consultancy
        </h1>

        <p className="lead mt-3">
          Complete Support for Biofuel Plant Setup, Registration & Government
          Approvals
        </p>

        <button className="btn btn-warning mt-4 px-4">
          Apply for Biofuel License
        </button>
      </div>
    </section>
  );
}

export default HeroCarousel;
