import './hero.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Hero = () => {
      useEffect(() => {
            AOS.init({
              duration: 1000, // animation duration (in ms)
              easing: "ease-in-out", // easing function
              once: true, // whether animation should happen only once
            });
          }, []);
      return (
            <div className=' h-[800px] bg-cover bg-top ' id='hero'>

                  <div className='flex justify-end items-center w-11/12 mx-auto h-full'>
                        <div className=' text-white w-1/2 space-y-4 ' data-aos="fade-up">
                              <h1 className=' text-4xl font-rancho-regular'>Would you like a Cup of Delicious Coffee?</h1>
                              <p>{`It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.`}</p>
                              <button className=' bg-[#926439] p-2 rounded'>Learn more</button>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;