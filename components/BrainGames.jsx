import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Brain";
import { OrbitControls, Stage } from "@react-three/drei";
import Button from "./Button";
import Link from "next/link";

const BrainGames = () => {
  return (
    <section className="w-full bg-transparent flex flex-col md:flex-row justify-center items-center pt-32">
      <div className="flex-1">
        <Canvas
          className="w-full h-full"
          camera={{ position: [100, 10, 50], fov: 70 }}
          flat
          linear
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <Stage preset="portrait" environment="sunset">
              <ambientLight intensity={1} position={[1, 5, 10]} />
              <Model rotation={[0, 1, 0]} scale={[0.5, 0.5, 0.5]} />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
      <div className="flex-1">
        <div className="w-full h-full flex flex-col justify-center items-start">
          <h1 className="text-gradient font-bold text-3xl md:text-6xl tracking-wide text-left">
            BrainGames
          </h1>
          <p className="text-base md:text-lg mt-2 mb-3">
            Be the BrainGames ninja, show your skills!
          </p>
          <Link
            href={{ pathname: "/events", query: { category: "braingames" } }}
          >
            <Button text="See Events" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrainGames;
