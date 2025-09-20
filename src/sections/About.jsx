import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' yvesrutembeza@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            <img src="assets/YVESBOBO.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m YVESBOBO</p>
              <p className="grid-subtext">
               a computer & software engineer with 4 years of experience in software 
              and hardware testing and development, specializing in frameworks such as React, 
              TypeScript, Flutter, and Python. Passionate about learning technical tools, including system 
              control using Arduino IDE programming. I am highly skilled in software design, development, 
              and integration, committed to delivering quality work, and always seeking new challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          
  <img src="assets/image.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain " />
              

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I specialize in a variety of languages, frameworks, and technologies that allow me to build robust and scalable full-stack web applications.  
              My expertise extends to IoT development, where I leverage the Arduino IDE to design and implement innovative solutions for hardware and software integration.  
              This unique combination of skills enables me to create impactful and connected systems for diverse applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -1.963042, lng: 30.135014, text: 'Kigali, Rwanda', color: 'white', size: 15,  }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Kigali, Rwanda city and open to remote work worldwide.</p>
              <a href="https://wa.me/+250787461999?text=Hello%20YVESBOBO,%20I%20would%20like%20to%20contact%20you!" target="_blank">
               
              <Button name="Chat with  Me" isBeam containerClass="w-full mt-10"></Button> 
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext pt-16">My Passion for Coding</p>
              <p className="grid-subtext pt-6">
              My passion for coding lies in the joy of creating, problem-solving,
              and constantly learning. Writing code allows me to transform ideas into 
              functional solutions, whether it&apos;s building innovative applications or 
              optimizing systems. For me, coding isn&apos;t just a career path—it&apos;s a 
              way to channel creativity and make a meaningful impact through technology.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yvesrutembeza@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


// import React from 'react'

// const About = () => {
//   return (
//     <section className='c-dpace my-20'>
//     <div className=''></div>
//     </section>
//   )
// }

// export default About





