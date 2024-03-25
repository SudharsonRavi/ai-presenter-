

import "../styles/index.css";
import { landing,landing2 } from "../assets/icons";


export default function MainLanding() {
  return (
    <section className="text-black body-font lg:pt-10">
      
   
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4 ">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-4xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl ">
            <span>Elevate Your </span>
            <br className="hidden lg:block"></br>
            <span className=" text-pink-600  "> College </span>
            Presentations
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3 ">
          Welcome to AI Presenter – where innovation meets seamless presentation creation. {" "}
            <a href="https://nextjs.org/" >
            Are you a college student looking to transform your presentations into engaging masterpieces effortlessly?
            </a>{" "}
            Look no further!
          </p>
              <button className="justify-center items-stretch bg-pink-600 self-center flex gap-0.5 mt-12 pl-5 pr-3 py-2.5 rounded-3xl max-md:mt-10 focus:outline-none">
                <div className="text-white text-base font-medium leading-8 grow whitespace-nowrap">
                  Get started
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4b6ebd2492ccf447648fd994e00d5c552deb38e4b1d3359193e8de49adbe74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  alt="Arrow icon"
                />
                </button>
        </div>
        
      </div>
      
     <section className="pt-20">
     <div className="container flex flex-col md:flex-row items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
  

  <img
    className="object-cover object-center w-full md:w-1/2 mb-10 md:mb-0 border-gray-200 rounded-lg shadow-md"
    alt="hero"
    src={landing}
  />


  <div className="md:w-1/2 md:pl-4">
    <h2 className="text-5xl font-bold mb-4 text-center md:text-left text-white"> What is AI Presenter?</h2>
    <br></br>
    <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
    AI Presenter is your virtual presentation assistant powered by cutting-edge artificial intelligence. Say goodbye to the hassle of spending hours crafting slides and perfecting your content. Our AI-driven platform does the heavy lifting for you, allowing you to focus on what truly matters – delivering a compelling presentation.
    </p>
  </div>
</div>
     </section>
      <section className="text-gray-600 body-font">
       
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-fit object-center h-full w-full"
              src={landing2}
            ></img>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                 Smart Content Generation
                </h2>
                <p className="leading-relaxed text-lg">
                Our smart content generation ensures your presentation is not just informative but captivates your audience.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                Time Efficiency
                </h2>
                <p className="leading-relaxed text-lg">
                With AI Presenter, time is on your side. Spend more time practicing and refining your delivery, and less time on the tedious task of slide creation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                Access Anywhere, Anytime
                </h2>
                <p className="leading-relaxed text-lg">
                Cloud-based and accessible from any device, AI Presenter ensures you have the flexibility to work on your presentations wherever and whenever you want.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Google Analytics Supported
                </h2>
                <p className="leading-relaxed text-lg">
                  All our templates come with full support for Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </section>
  );
}
