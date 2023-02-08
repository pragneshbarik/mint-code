import "./styles.css";
import HeroImage from "./assets/HeroImage.png";

const Hero = () => {
  return (
    <div className="container hero flex flex-row items-center">
      <div className="flex basis-7/12  flex-col">
      <div className="hero-text text-white ">
        Learn to code with your personal AI coach.
      </div>
      <button className="hero-button text-white">Get Started</button>
      </div>
      <img className="pt-5 pl-[70px] mr-[-70px] basis-5/12" src={HeroImage} alt="hero" />
    </div>
  );
};

export default Hero;
