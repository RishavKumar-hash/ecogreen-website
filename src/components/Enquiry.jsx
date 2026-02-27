import "./Enquiry.css";

export default function Enquiry() {
  return (
    <div className="enquiry">
      {/* LEFT IMAGE */}
      <div className="enquiry-left">
        <img src="/gallery/enquiry.jpg" alt="Green Energy" />
      </div>

      {/* RIGHT FORM */}
      <div className="enquiry-right">
        <p className="tag">ENQUIRY NOW</p>
        <h2>Get A Free Enquiry</h2>

        <form className="form">
          <div className="row">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
          </div>

          <div className="row">
            <input placeholder="Your Email" />
            <input placeholder="Your Mobile" />
          </div>

          <select>
            <option>ECP - ELECTRIC CHARGING POINT</option>
            <option>Biofuel Plant Setup</option>
            <option>Fuel Pump Franchise</option>
          </select>

          <textarea placeholder="Explain Enquiry"></textarea>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
