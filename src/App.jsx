import React from "react";
import { useMediaQuery } from 'react-responsive'

import bg from "./assets/bg.png";

const Section = ({ id, children, bgImage }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const sectionStyle = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: isMobile && id === 'section1' ? '55em center' : 'center',
    backgroundColor : '#0b013c',
  } : {};

  return (
    <div id={id} style={sectionStyle} className="h-screen">
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Section id="section1" bgImage={bg}>
        <div className="h-screen text-white flex flex-col justify-center items-left p-10 space-y-3">
          <h1 className="text-8xl font-bold">SPACE</h1>
          <h2 className="text-2xl font-medium">Research Center</h2>
          <p className="italic">An international space research organisation that involve to discover the new space things</p>
          <input type="text" placeholder="Enter a valid email address" className="py-[10px] px-3" />
          <button className="bg-[#f8cb8a] py-[10px] px-[30px]">Submit</button>
        </div>
      </Section>
      
      <Section id="section2">
        <img
          className="w-full h-auto"
          src="https://via.placeholder.com/150"
          alt="Image 2"
        />
        <p>
          Voici du contenu pour la section 2. Vous pouvez mettre ce que vous
          voulez ici.
        </p>
      </Section>
    </div>
  );
}

export default App;
