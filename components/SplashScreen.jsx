"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import logo from "@/public/assets/goolluck_investments_logo.png";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: "#logo",
      delay: 1500,
      // scale: 1,
      duration: 2000,
      easing: "easeInOutExpo",
      translateY: -200,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 5);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className="w-full h-screen bg-black p-3 lg:p-0">
        <div className="flex items-center justify-center h-full w-full">
          <Image src={logo} alt="logo" id="logo" />
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
