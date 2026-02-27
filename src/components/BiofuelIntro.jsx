import "./BiofuelIntro.css";
import bioImg from "../assets/biofuel-plant.jpg"; // put AI image here

export default function BiofuelIntro() {
  return (
    <section className="biofuel">
      <div className="biofuel-left">
        <h4>Leading Biofuel Company in Patna, Bihar</h4>

        <h1>Sustainable Biofuel & Green Energy Solutions</h1>

        <p>
          Rajdhani Biofuels Corporation delivers eco-friendly biodiesel,
          renewable energy consulting, and bulk industrial fuel supply across
          Bihar.
        </p>

        <ul>
          <li>✔ Biodiesel Supply for Industries</li>
          <li>✔ Bulk Biofuel Distribution</li>
          <li>✔ Green Energy Consulting</li>
          <li>✔ Renewable Fuel Logistics</li>
        </ul>

        <button>Explore Services</button>
      </div>

      <div className="biofuel-right">
        <img src={bioImg} alt="Biofuel Plant" />
      </div>
    </section>
  );
}
