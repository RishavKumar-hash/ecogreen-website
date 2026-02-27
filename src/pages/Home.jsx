import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Rajdhani Biofuels Corporation | Biofuel Company in Patna Bihar
        </title>
        <meta
          name="description"
          content="Rajdhani Biofuels Corporation is a leading biofuel and biodiesel supplier in Patna, Bihar providing sustainable and eco-friendly fuel solutions for industries."
        />
        <meta
          name="keywords"
          content="Biofuel company in Patna, Biodiesel supplier Bihar, Green energy company Patna, Renewable fuel Bihar"
        />
      </Helmet>

      <div className="container py-5">
        <h1 className="text-center section-title">
          Leading Biofuel Company in Patna, Bihar
        </h1>

        <p className="text-center mt-3">
          Rajdhani Biofuels Corporation provides sustainable biodiesel and green
          energy solutions across Bihar. We are committed to clean energy,
          industrial fuel supply, and eco-friendly alternatives.
        </p>

        <div className="row mt-5">
          <div className="col-md-6">
            <h2 className="section-title">Our Biofuel Services</h2>
            <ul>
              <li>Biodiesel Supply for Industries</li>
              <li>Bulk Biofuel Distribution</li>
              <li>Green Energy Consulting</li>
              <li>Renewable Fuel Logistics</li>
            </ul>
          </div>

          <div className="col-md-6">
            <img
              src="/images/biofuel-plant.jpg"
              alt="Biofuel Production Plant in India"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
