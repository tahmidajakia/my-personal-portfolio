import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import MySkills from "../../components/MySkills";
import Projects from "../../components/Projects";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <MySkills></MySkills>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;