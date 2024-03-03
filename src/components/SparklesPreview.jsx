import React from "react";
import { SparklesCore } from "./SparklesCore";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
