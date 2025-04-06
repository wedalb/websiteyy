import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Ensure you have this dependency installed

// Define a constant for the fixed height for all logos
const LOGO_HEIGHT = 50; // Set a uniform height for all logos

// Define the type for the logo
interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// List of logos with the details
const logos: Logo[] = [
  { src: "/company-logos/halogenos.png", alt: "halogenOS", width: 200, height: 200 },
  { src: "/company-logos/jetbrains-internship.png", alt: "Jetbrains", width: 200, height: 100 },
  { src: "/company-logos/lmu.png", alt: "LMU", width: 200, height: 100 },
  { src: "/company-logos/manage&more.png", alt: "manage & more", width: 200, height: 100 },
  { src: "/company-logos/melessa.png", alt: "Melessa", width: 200, height: 100 },
  { src: "/company-logos/mri.png", alt: "MRI", width: 200, height: 100 },
  { src: "/company-logos/msg.png", alt: "MSG", width: 200, height: 100 },
  { src: "/company-logos/robotum.png", alt: "RoboTUM", width: 200, height: 100 },
  { src: "/company-logos/teg.png", alt: "The Entrepreneurial Group", width: 200, height: 100 },
  { src: "/company-logos/toowoxx.png", alt: "Toowoxx", width: 200, height: 100 },
  { src: "/company-logos/tum.png", alt: "TUM", width: 200, height: 100 },
  { src: "/company-logos/tum-ai.png", alt: "Tum-ai", width: 200, height: 100 },
  { src: "/company-logos/siemens.png", alt: "Siemens", width: 200, height: 100 },
  { src: "/company-logos/masterschool.png", alt: "Masterschool", width: 200, height: 100 },

];

const LogoCarousel: React.FC = () => {
  return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Marquee
            speed={100}
            gradient={true}
            gradientColor={"black"}
            gradientWidth={300}
            pauseOnHover={true}
            style={{ backgroundColor: "black" }}
        >
          {logos.map((logo, index) => (
              <div key={index} style={{ margin: "0 20px" }}>
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={(logo.width * LOGO_HEIGHT) / logo.height} // Calculate width dynamically to maintain aspect ratio
                    height={LOGO_HEIGHT} // Set a fixed height for all logos
                    layout="intrinsic" // Maintain aspect ratio and use intrinsic layout
                />
              </div>
          ))}
        </Marquee>
      </div>
  );
};

export default LogoCarousel;
