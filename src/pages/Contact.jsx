import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Rajdhani Biofuels | Patna Bihar</title>
      </Helmet>

      <div className="container py-5">
        <h1 className="section-title">Contact Us</h1>

        <p>
          1st Floor, 101, Sneh Highway, Jaganpura Mor, Kankarbagh, Patna, Bihar
          - 800020
        </p>

        <p>Phone: +91-9153983642</p>
        <p>Email: info@rbfcindia.com</p>
      </div>
    </>
  );
}

export default Contact;
