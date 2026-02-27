import { Helmet } from "react-helmet-async";

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Rajdhani Biofuels Corporation</title>
      </Helmet>

      <div className="container py-5">
        <h1>Terms & Conditions</h1>
        <p>
          By accessing this website, you agree to comply with the terms and
          conditions set by Rajdhani Biofuels Corporation.
        </p>
      </div>
    </>
  );
}

export default Terms;
