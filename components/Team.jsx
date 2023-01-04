import Image from "next/image";
import React from "react";

const TeamCard = ({ name, image, post }) => {
  return (
    <div className="p-4 m-4 flex flex-col justify-center items-center">
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

const Team = () => {
  const getTeamSection = ({ sectionName, teamMembers }) => {
    return (
      <div className="container mx-4 md:mx-auto py-8">
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-bold uppercase">
            {sectionName}
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {teamMembers?.map((member) => (
            <TeamCard
              name={member.name}
              image={member.image}
              post={member.post}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="w-full md:mx-auto bg-gradient-2 min-h-screen p-4">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-3xl md:text-6xl py-4 text-gradient uppercase font-bold">
          Our Team
        </h1>
      </div>
      {getTeamSection({
        sectionName: "Faculty Members",
        teamMembers: [
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
        ],
      })}
      {getTeamSection({
        sectionName: "General Secretaries",
        teamMembers: [
          {
            name: "Abhra Bhattacharyya",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Cultural General Secretary",
          },
          {
            name: "Akash Roy",
            image:
              "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Technical General Secretary",
          },
          {
            name: "Surojit Basak",
            image:
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Sports General Secretary",
          },
          {
            name: "Aniket Mandal",
            image:
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Publication General Secretary",
          },
        ],
      })}
      {getTeamSection({
        sectionName: "Assistant General Secretaries",
        teamMembers: [
          {
            name: "Biswajit Hazra",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Cultural Assistant General Secretary",
          },
          {
            name: "Pradipta Ghoshal",
            image:
              "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Technical Assistant General Secretary",
          },
          {
            name: "Arijit Sasmal",
            image:
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Sports Assistant General Secretary",
          },
          {
            name: "G.Y. Manisha",
            image:
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Sports Assistant General Secretary",
          },
          {
            name: "Satyik Das",
            image:
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            post: "Publication Assistant General Secretary",
          },
        ],
      })}
      <div className="container mx-4 md:mx-auto py-8">
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-bold uppercase">
            General Secretaries
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <TeamCard
            name={"Abhra Bhattacharyya"}
            image={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            post={"Cultural General Secretary"}
          />
          <TeamCard
            name={"Akash Roy"}
            image={
              "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            post={"Technical General Secretary"}
          />
          <TeamCard
            name={"Aniket Mandal"}
            image={
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            post={"Publication General Secretary"}
          />
          <TeamCard
            name={"Surojit Basak"}
            image={
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            post={"Sports General Secretary"}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
