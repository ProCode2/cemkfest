import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Innovation";
import { OrbitControls, Stage } from "@react-three/drei";
import Button from "./Button";
import Link from "next/link";

const Innovations = () => {
  return (
    <section className="w-full bg-transparent flex justify-center items-center py-22">
      <div className="flex-1">
        <Canvas
          camera={{ position: [100, 10, 50], fov: 70 }}
          style={{ width: "70vw", height: "70vh" }}
          flat
          linear
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <Stage preset="portrait" environment="sunset">
              <ambientLight intensity={1} position={[1, 5, 10]} />
              <Model rotation={[0, 9, 0]} scale={[1, 1, 1]} />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
      <div className="flex-1 relative">
        <div className="w-full h-full absolute top-0 bottom-0 flex flex-col justify-center items-start -left-44">
          <h1 className="text-gradient font-bold text-3xl md:text-6xl tracking-wide text-left">
            Innovations
          </h1>
          <p className="text-base md:text-lg mt-2 mb-3">
            Be the Innovations ninja, show your skills!
          </p>
          <Link href={{ pathname: '/events', query: { category: 'innovation' } }}>
            <Button text="See Events" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
