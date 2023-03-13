import Head from "next/head";
import Events from "../components/Events";
import TimeLine from "../components/TimeLine";
import HeroInfo from "../components/HeroInfo";
import Image from "next/image";

import ResonanceLong from "../public/images/long_logo.webp";
import ResonanceLongSlim from "../public/images/long_logo_slim.webp";
import ResoLogo from "../public/images/reso.webp";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex-col relative">
        <video
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
          src="/images/bg.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <div className="hero-section-overlay absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <HeroInfo />
        </div>
        <Image
          src={ResonanceLong}
          alt="Resonance XII"
          className="absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto drop-shadow-xl z-10 w-88 md:w-1/2"
        />
      </section>
      <section className="bg-gradient w-full flex flex-col justify-center items-center pb-8 overflow-hidden">
        <TimeLine
          logoLink={
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={300}
              trackOnWindow={false}
            >
              <Image className="Tilt-inner" src={ResoLogo} alt="Resonance" />
            </Tilt>
          }
          title={<Image src={ResonanceLongSlim} width={300} />}
          subTitle={
            "Explore a pool of technical events such as Robo Wars, Capture the flags, Hackathons, Brain games and win exciting prizes!"
          }
        />
        <TimeLine title="Events" />
        <Events />
        <TimeLine title="Sponsors" />
        <div className="pt-12 pb-56">
          <h2 className="text-gradient text-2xl font-bold">Coming Soon!</h2>
        </div>
      </section>
    </>
  );
}
