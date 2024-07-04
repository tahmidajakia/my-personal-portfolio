import img from "../assets/images/img.png";

const Hero = () => {
  return (
    <div id='home' className="mt-10 md:flex gap-20 p-4 md:p-28">
      <div>
        <div>
          <h1 className="text-5xl font-extrabold mb-8">
            Hi There,
          </h1>
          <h1 className="text-5xl font-extrabold mb-8">I AM TAHMIDA <span className="text-cyan-400">JAKIA</span>
          </h1>
          <h1 className=" text-3xl font-extrabold mb-8">Junior Web Developer
          </h1>
          <p className="text-lg font-normal">
            Based on Sylhet,Bangladesh.Having an high level experience in web developing knowledge and building of Web and Mobile application with JavaScript / reacts / Nodejs / and some other cool libraries and frameworks.
          </p>
          <button className="btn bg-cyan-400 mt-5 ">Contact Me</button>
        </div>
      </div>
      <div>
        <img className="w-[1200px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
