import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Rajdhani Biofuels | Biofuel Supplier in Bihar</title>
        <meta
          name="description"
          content="Learn about Rajdhani Biofuels Corporation, a trusted biodiesel and renewable energy company in Patna, Bihar."
        />
      </Helmet>

      <div className="container py-5">
        <h1 className="section-title">About Rajdhani Biofuels Corporation</h1>

        <p>
          Rajdhani Biofuels Corporation is a Patna-based renewable energy
          company providing sustainable biodiesel and green fuel solutions.
        </p>
      </div>
    </>
  );
}

export default About;
