import "./WhyChooseSection.css";

export default function WhyChooseSection() {
  return (
    <section className="why">
      <div className="why-left">
        <p className="tag">Why Choose Us!</p>

        <h2>
          Complete Commercial Biofuels <br /> Systems
        </h2>

        <p className="desc">
          We have more than 10+ years of experience in this industry. Simple way
          to join us.
        </p>

        <div className="features">
          <div>✔ Quality Services</div>
          <div>👨‍🔧 Expert Workers</div>
          <div>📞 Free Consultation</div>
          <div>🎧 Customer Support</div>
        </div>
      </div>

      <div className="why-right">
        <img src="/gallery/bio-fuel.webp" alt="Biofuel" />
      </div>
    </section>
  );
}
