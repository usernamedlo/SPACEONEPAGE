import React from "react";
import { useMediaQuery } from "react-responsive";

import bg from "./assets/bg.png";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";
import star1 from "./assets/star1.png";
import logo from "./assets/logo.png";

const Section = ({ id, children, bgImage }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const sectionStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition:
          isMobile && id === "section1" ? "55em center" : "center",
        backgroundColor: "#0b013c",
      }
    : {};

  return (
    <div id={id} style={sectionStyle}>
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <Section id="section1" bgImage={bg}>
        <div className="h-screen text-white flex flex-col justify-center items-center lg:items-start lg:ml-64 space-y-4">
          <h1
            className="text-5xl sm:text-8xl font-bold"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            SPACE
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium">Research Center</h2>
          <p className="italic text-sm text-center">
            An international space research organisation that involves
            discovering new space things
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start">
            <input
              type="text"
              placeholder="Enter a valid email address"
              className="py-[0.625rem] px-3 rounded-none focus:border-black w-[292px] sm:w-[400px] text-black"
            />
            <button className="bg-[#f8cb8a] py-[10px] px-[10px] text-black w-[292px] sm:w-[100px] mt-2 sm:mt-0 sm:ml-4">
              Submit
            </button>
          </div>
        </div>
      </Section>

      {/* <Section id="section2">
        <div className="h-[46.875rem] text-black flex flex-col items-center space-y-5 mx-[50px] sm:h-[200px] sm:justify-center">
          <h2
            className="text-2xl text-center"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Fun and engaging education
          </h2>
          <h1
            className="text-5xl font-black text-[#0b013c] text-center"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            ABOUT THE EDUCATION FOUNDATION
          </h1>
          <div className="w-[50px] h-2.5 bg-[#f8cb8a]"></div>
          <p className="text-center italic text-gray-500 text-base font-medium">
            The Manned Space Flight Education Foundation inonprofit educational
            foundation offering extensive science education programs and a space
            museum. The cornerstone of its education mission is Space Center
            Houston, a leading science and space exploration learning center. It
            is one of Houston’s top attractions, the area’s No. 1 attraction for
            international visitors, the Official Visitor Center of NASA Johnson
            Space Center and a Smithsonian Affiliate.
          </p>
        </div>
      </Section> */}

      {/* <Section id="section3">
        <div className="h-[1000px] text-black flex flex-col items-center justify-center mx-[50px] space-y-4">
          <img
            src={image1}
            alt="image1"
            className="h-[527px] object-cover rounded-[5px]"
          />
          <h2
            className="text-2xl"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            To the Moon and Beyond
          </h2>
          <h1
            className="text-5xl font-semibold text-[#0b013c] text-center"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            WELCOME ABOARD
          </h1>
          <div className="w-16 h-3 bg-[#f8cb8a]"></div>
          <p className="text-center italic text-gray-500">
            Space Center Houston has welcomed nearly 20 million visitors and
            currently hosts more than 1 million visitors annually in its
            250,000-square-foot educational complex. Space Center Houston has a
            $73 million impact on the greater Houston economy, according to a
            2016 economic study by Jason Murasko and Stephen Cotten, associate
            professors of economics at the University of Houston – Clear Lake.
          </p>
        </div>
      </Section> */}

        {/* <Section id="section4">
          <div className="h-[700px] flex flex-col items-center justify-center mx-[50px] my-[50px] space-y-7 bg-white">
            <img
              src={image2}
              alt="image2"
              className="object-cover rounded-[5px]"
            />
            <p className="text-center italic text-black">
              There is always something new at Space Center Houston with an
              amazing array of traveling exhibits and astounding events.
            </p>
            <img
              src={image3}
              alt="image3"
              className="object-cover rounded-[5px]"
            />
            <p className="text-center italic text-black">
              Space Center Houston has the world’s largest collection of moon
              rocks and lunar samples for public view.
            </p>
          </div>
        </Section>

        <Section id="section5" bgImage={star1}>
          <div className="h-[860px] text-white flex flex-col items-center space-y-4">
            <h2
              className="text-2xl font-medium mt-[150px]"
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Certified Autism Center
            </h2>
            <h1
              className="text-5xl font-bold text-center"
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              EDUCATIONAL COMPLEX AND SPACE MUSEUM
            </h1>
            <div className="w-16 h-3 bg-[#f8cb8a]"></div>
            <p className="italic text-center p-5">
              The certification process involves rigorous training for staff,
              inspections and improvements that enable Space Center Houston to
              better welcome and accommodate guests with autism spectrum disorder
              and other sensory and cognitive challenges. Space Center Houston was
              always welcoming to guests with special needs,” McMahon said. “I was
              able to help support that commitment by leading informal training
              for my instructor colleagues on working with guests with
              disabilities, including autism.
            </p>
          </div>
        </Section>

        <Section id="section6" bgImage={image4}>
          <div className="h-[657px] text-white flex flex-col items-center space-y-10">
            <h1
              className="text-5xl font-bold text-center mt-20"
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              EMPIRE STATE BUILDING
            </h1>
            <h2 className="text-center font-medium">
              350 5th Ave, New York, NY 10118 1 212-736-3100 contacts@esbnyc.com
            </h2>
            <img src={logo} alt="logo" className="w-[250px]" />
          </div>
        </Section>

        <Section id="section7">
          <div className="h-[50px] bg-[#2F2B3A] text-white flex flex-col justify-center items-center space-y-10">
            <h1 className="font-bold text-center">
              Ghijselings Loïc - 2023 © All rights reserved
            </h1>
          </div>
        </Section> */}
    </>
  );
}

export default App;
