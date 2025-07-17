"use client";
import ME from "../../assets/image/me.jpg";

import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [
    {
      name: "",
      position: "top-left",
      delay: "0s",
      icon: "🎬",
    },
    {
      name: "",
      position: "top-right",
      delay: "0.5s",
      icon: "💻",
    },
    {
      name: "",
      position: "bottom-left",
      delay: "1s",
      icon: "🧠",
    },
    {
      name: "",
      position: "bottom-right",
      delay: "1.5s",
      icon: "🌍",
    },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-8 left-8 md:top-16 md:left-16";
      case "top-right":
        return "top-8 right-8 md:top-16 md:right-16";
      case "bottom-left":
        return "bottom-8 left-8 md:bottom-16 md:left-16";
      case "bottom-right":
        return "bottom-8 right-8 md:bottom-16 md:right-16";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen  flex-col items-center justify-center p-4 mt-20">
      <div className="relative w-full max-w-4xl mx-auto">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className={`absolute ${getPositionClasses(icon.position)} ${
              mounted ? "animate-bounce" : ""
            }`}
            style={{
              animationDelay: icon.delay,
              animationDuration: "3s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 rounded-xl shadow-lg flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform duration-300">
              {icon.icon}
            </div>
          </div>
        ))}

        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white p-4 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={ME} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white">
              Hello, I'm <span className="text-purple-400">Mohammad</span>
            </h1>

            <div className="space-y-2 text-white">
              <p className="text-lg md:text-xl">
                Your all-in-one visual director and content creator
              </p>
              <p className="text-lg md:text-xl">
                Ready to exceed your expectations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20  text-center  mx-auto text-2xl font-bold">
        <p className="text-lg leading-relaxed text-white font-medium max-w-[1400px] mx-auto px-4 md:px-0">
          As a passionate Front-End Developer, I specialize in building
          responsive, accessible, and visually engaging web applications using
          modern technologies like React, TypeScript, and Tailwind CSS. I thrive
          on solving complex UI challenges, optimizing performance, and crafting
          seamless user experiences. With a strong foundation in component-based
          architecture and state management, I continuously explore new tools
          and design systems to elevate the quality and scalability of my work.
        </p>
      </div>
    </div>
  );
}
