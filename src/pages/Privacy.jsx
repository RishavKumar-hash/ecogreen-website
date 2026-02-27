import { Helmet } from "react-helmet-async";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Rajdhani Biofuels Corporation</title>
        <meta
          name="description"
          content="Privacy policy of Rajdhani Biofuels Corporation, Patna Bihar."
        />
      </Helmet>

      <div className="container py-5">
        <h1>Privacy Policy</h1>
        <p>
          Rajdhani Biofuels Corporation respects your privacy and ensures
          protection of all personal information collected through our website.
        </p>
        <p>
          We do not sell or share your personal data with third parties without
          consent.
        </p>
      </div>
    </>
  );
}

export default Privacy;
