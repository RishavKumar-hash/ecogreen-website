import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-left">
        <p className="about-tag">About Us</p>

        <h2>
          10+ Years Experience Biofuels &
          <br /> Renewable Energy Industry
        </h2>

        <p className="about-desc">
          Biofuels are a class of renewable energy derived from living
          materials. Energy from renewable resources reduces fossil fuel
          dependence and promotes a cleaner environment.
        </p>

        <ul>
          <li>✔ Better Power</li>
          <li>✔ Increased Mileage</li>
          <li>✔ Eco-Friendly</li>
        </ul>

        <button className="about-btn">Explore More</button>
      </div>

      <div className="about-right">
        <img src="/gallery/about-biofuel.jpeg" alt="Biofuel Energy" />
      </div>
    </section>
  );
}
