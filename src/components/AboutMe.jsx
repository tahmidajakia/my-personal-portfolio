import about from "../assets/images/aboutme.jpg";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import resume from '../assets/images/B9 A10 Type-01 Requirements.pdf'

const AboutMe = () => {
  return (
    <div id="about" className="p-4 md:pl-28 md:pr-28">
      <h1 className="text-4xl text-center font-bold">Get to know me!</h1>
      <h2 className="border flex text-center items-center justify-center mx-auto mt-5 mb-14 border-cyan-400 w-28"></h2>
      <div className="md:flex justify-center md:gap-10">
        <div>
          <img className="w-[500px]" src={about} alt="" />
        </div>
        <div>
          <p className="md:w-[600px]">
            I am a{" "}
            <span className="text-black font-bold">Junior Web Developer</span>{" "}
            building the Front-end of websites and Web Applications that leads
            to the success of the overall product.Check out some of my work in
            the <span className="text-black font-bold">Projects</span> section.I
            also like sharing content related to the stuff that i have learned
            over the years in{" "}
            <span className="text-black font-bold">Web Development</span> so it
            can help other people of the Dev Community .Feel free to Connect or
            Follow on my Linkedin where i post useful content related to Web
            Development and Programming. I am open to{" "}
            <span className="text-black font-bold">Job</span> opportunities
            where i can contributes, learn and grow,If you have a good
            opportunity that matches my skills and then do not hesitate to{" "}
            <span className="text-black font-bold">Contact</span> me.
          </p>
          <div className="mt-5 ">
            <div className="flex gap-12">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="mt-1">
                    <FaUser />
                  </span>
                  <h3>Name :</h3>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1">
                    <MdEmail />
                  </span>
                  <h3>Email :</h3>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1">
                    <FaPhoneAlt />
                  </span>
                  <h3>Phone :</h3>
                </div>
                {/* <h3>Date Of Birth :</h3>
                <h3>Nationality :</h3>
                <h3>Address :</h3> */}
              </div>
              <div className="space-y-3">
                <h3>Tahmida Jakia</h3>
                <h3>devtahmidajakia@gmail.com</h3>
                <h3>01724519356</h3>
                {/* <h3>05-09-2002</h3>
                <h3>Bangladesh</h3>
                <h3>Sylhet,Bangladesh</h3> */}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-5 font-bold">Education</h3>
          </div>
          <div className="flex gap-7">
            <button className="btn bg-cyan-400 mt-6">
              <a href={resume} download='Resume'>DOWNLOAD CV</a>
            </button>
            <button className="btn text-cyan-400 border border-cyan-400 px-9 mt-6">
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
