import AboutImage from "../assets/About.jpg";

export const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
         <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="About us"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

         <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">About</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At WellnessVista, we are committed to providing exceptional medical care 
            with a focus on patient comfort, trust, and well-being. Our team of experts 
            offers personalized treatments and health plans tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

