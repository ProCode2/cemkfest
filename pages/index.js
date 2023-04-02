import Events from "../components/Events";
import TimeLine from "../components/TimeLine";
import HeroInfo from "../components/HeroInfo";
import Image from "next/image";

import ResonanceLong from "../public/images/long_logo.webp";
import ResonanceLongSlim from "../public/images/long_logo_slim.webp";
import ResoLogo from "../public/images/reso.webp";
import Tilt from "react-parallax-tilt";

import Sbi from "../public/images/gallery/sbi.webp";
import Ramco from "../public/images/gallery/ramco.webp";
import Momo from "../public/images/gallery/momo.webp";
import Sv from "../public/images/gallery/sv.webp";
import Friends from "../public/images/gallery/91.9.webp";
import Nabb from "../public/images/gallery/nabb.webp";
import Radio from "../public/images/gallery/radio.webp";

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
          className="absolute bottom-12 left-0 right-0 mx-auto drop-shadow-xl z-10 w-88 md:w-1/2"
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
          title={<Image src={ResonanceLongSlim} alt="Resonance" width={300} />}
          subTitle={
            "Explore a pool of technical events such as Robo Wars, Capture the flags, Hackathons, Brain games and win exciting prizes!"
          }
        />
        <TimeLine title="Events" />
        <Events />
        <TimeLine title="Sponsors" />
        <div className="pt-12 pb-56">
          <div className="flex flex-col justify-center items-center my-4 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              Title Sponsor
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={300}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6"
                src={Sbi}
                alt="SBI"
                width={300}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-center my-4 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              Co Sponsor
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={200}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6 rounded-full shadow-md"
                src={Ramco}
                alt="Ramco"
                width={150}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-center my-8 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              In Association With
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={200}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6 rounded-md shadow-md"
                src={Friends}
                alt="Friends FM"
                width={150}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-center my-4 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              Food Partner
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={200}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6 rounded-md shadow-md"
                src={Momo}
                alt="Wow Momo"
                width={150}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-center my-8 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              Production Partner
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={200}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6 rounded-md shadow-md"
                src={Sv}
                alt="SV Production"
                width={150}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-center my-8 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              Media Partner
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={200}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6 rounded-md shadow-md"
                src={Nabb}
                alt="NABB"
                width={80}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-center my-8 mx-2">
            <h3 className="text-gradient text-3xl font-bold uppercase">
              Radio Partner
            </h3>
            <Tilt
              gyroscope={true}
              tiltMaxAngleX={35}
              perspective={200}
              trackOnWindow={false}
            >
              <Image
                className="Tilt-inner mt-6 rounded-md shadow-md"
                src={Radio}
                alt="Radiovoice"
                width={80}
              />
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
}
