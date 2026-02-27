function Application() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-success text-center">
        Apply for Distribution
      </h2>

      <form className="mt-4">
        <input className="form-control mb-3" placeholder="Full Name" />
        <input className="form-control mb-3" placeholder="Phone Number" />
        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Land Location" />
        <input
          className="form-control mb-3"
          placeholder="Investment Capacity"
        />
        <textarea
          className="form-control mb-3"
          placeholder="Additional Details"
        ></textarea>

        <button className="btn btn-success w-100">Submit Application</button>
      </form>
    </div>
  );
}

export default Application;
