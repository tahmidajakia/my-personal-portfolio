const Contact = () => {
  return (
    <div id='contact' className="p-4 md:p-4 md:pl-28 md:pr-28">
      <div className="mb-5">
        <h3 className="text-center text-4xl font-bold">GET IN TOUCH</h3>
        <h2 className="border flex text-center items-center justify-center mx-auto mt-3 border-cyan-400 w-28"></h2>
        <h3 className="flex text-center mx-auto mt-3 w-2/4">
          Feel free Contact me by submitting the form below and I will get back
          to you as soon as possible
        </h3>
      </div>

      <div className="p-20">
        <div className="hero-content">
          <div className="w-[800px] shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input bg-gray-200 input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input bg-gray-200  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <textarea
                  name="massage"
                  cols="80"
                  rows="10"
                  placeholder="Enter your message"
                  className="p-5 mb-8 bg-gray-200"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
