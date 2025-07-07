import Button from "../layouts/Button";
import { Link } from "react-scroll";
import HomeBackground from "../assets/Home.jpg"; // تأكد من المسار الصحيح

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${HomeBackground})`,
      }}
    >
       <div className="absolute inset-0 bg-blue-400/50 "></div>

       <div className="relative z-20 px-6 md:px-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to WellnessVista
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Discover professional healthcare services tailored to your needs. Your well-being is our top priority.
        </p>
        <Link to="services" smooth={true} duration={500}>
          <Button title="See Services" />
        </Link>
      </div>
    </section>
  );
};
