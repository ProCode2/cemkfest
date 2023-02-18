import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y, Scrollbar, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/thumbs";

const TeamCard = ({ name, image, post }) => {
  return (
    <div className="p-4 m-4 flex flex-col justify-center items-center w-48">
      <Image
        className="rounded-full w-36 h-36 object-cover"
        width={300}
        height={300}
        src={image}
        alt={name}
      />
      <h6 className="pt-4 uppercase text-2xl font-bold">{name}</h6>
      <p className="uppercase text-sm text-slate-300">{post}</p>
    </div>
  );
};

const Team = ({ teamRef }) => {
  const teamMembers = [
    {
      name: "Shibaji",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      post: "President",
    },
    {
      name: "ADS",
      image:
        "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      post: "Treasurer",
    },
    {
      name: "Abhisek",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      post: "Sports Convenor",
    },
    {
      name: "Abhisek",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      post: "Sports Convenor",
    },
    {
      name: "Abhisek",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      post: "Sports Convenor",
    },
  ];
  // const getTeamSection = ({ sectionName, teamMembers }) => {
  //   return (
  //     <div ref={teamRef} className="container mx-4 md:mx-auto py-8">
  //       <div className="text-left">
  //         <h3 className="text-xl md:text-2xl font-bold uppercase">
  //           {sectionName}
  //         </h3>
  //       </div>
  //       <div className="flex flex-wrap justify-center items-center">
  //         {teamMembers?.map((member, idx) => (
  //           <TeamCard
  //             key={member.name + idx}
  //             name={member.name}
  //             image={member.image}
  //             post={member.post}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div ref={teamRef} className="w-full md:mx-auto min-h-screen p-4">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-3xl md:text-6xl py-4 text-gradient uppercase font-bold">
          Our Team
        </h1>
      </div>
      <div className="container mx-4 md:mx-auto py-8">
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide className="m-6" key={member.name + idx}>
              <TeamCard
                name={member.name}
                image={member.image}
                post={member.post}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
