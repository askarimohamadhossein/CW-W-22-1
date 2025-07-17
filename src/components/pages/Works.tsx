"use client";

import {
  ChevronRight,
  Code,
  Database,
  Globe,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function FrontendSkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    {
      category: "Core Technologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "React", level: 92, color: "bg-cyan-500" },
        { name: "Next.js", level: 88, color: "bg-gray-800" },
        { name: "Vue.js", level: 75, color: "bg-green-500" },
        { name: "Angular", level: 70, color: "bg-red-500" },
      ],
    },
    {
      category: "Styling & Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      items: [
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
        { name: "Sass/SCSS", level: 85, color: "bg-pink-500" },
        { name: "Styled Components", level: 80, color: "bg-purple-500" },
        { name: "CSS Grid & Flexbox", level: 95, color: "bg-indigo-500" },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Git & GitHub", level: 90, color: "bg-gray-700" },
        { name: "Webpack", level: 75, color: "bg-blue-400" },
        { name: "Vite", level: 85, color: "bg-purple-400" },
        { name: "NPM/Yarn", level: 88, color: "bg-red-400" },
      ],
    },
    {
      category: "Mobile & Performance",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "Responsive Design", level: 95, color: "bg-green-600" },
        { name: "PWA Development", level: 80, color: "bg-blue-600" },
        { name: "Performance Optimization", level: 85, color: "bg-yellow-600" },
        {
          name: "Cross-browser Compatibility",
          level: 90,
          color: "bg-purple-600",
        },
      ],
    },
    {
      category: "Backend Integration",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      items: [
        { name: "REST APIs", level: 88, color: "bg-emerald-500" },
        { name: "GraphQL", level: 75, color: "bg-pink-600" },
        { name: "Firebase", level: 80, color: "bg-orange-600" },
        { name: "Supabase", level: 85, color: "bg-green-700" },
      ],
    },
  ];

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (mounted) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [mounted, skill.level, index]);

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {skill.name}
          </span>
          <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Frontend Skills
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Showcasing modern web development expertise with cutting-edge
              technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "JavaScript",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping" />
      </section>

      {/* Skills Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my frontend development skills and
            proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.category}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setActiveSkill(categoryIndex)}
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${skillCategory.color} p-6 text-white`}
              >
                <div className="flex items-center space-x-3">
                  {skillCategory.icon}
                  <h3 className="text-xl font-bold">
                    {skillCategory.category}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Interactive Demonstrations
            </h2>
            <p className="text-xl text-gray-300">
              Live examples of frontend capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CSS Animation Demo */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                CSS Animations
              </h3>
              <div className="space-y-4">
                <div className="w-full h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-pulse" />
                <div className="w-3/4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded animate-bounce" />
                <div className="w-1/2 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded animate-ping" />
              </div>
            </div>

            {/* Responsive Design Demo */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Responsive Design
              </h3>
              <div className="flex space-x-2">
                <div className="w-8 h-12 bg-blue-500 rounded-sm" />
                <div className="w-12 h-12 bg-green-500 rounded-sm" />
                <div className="w-16 h-12 bg-purple-500 rounded-sm" />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Mobile, Tablet, Desktop
              </p>
            </div>

            {/* JavaScript Interactivity */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                JavaScript Magic
              </h3>
              <button
                className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105"
                onClick={() => {
                  const button = document.activeElement as HTMLElement;
                  button.style.transform = "scale(0.95)";
                  setTimeout(() => {
                    button.style.transform = "scale(1.05)";
                  }, 100);
                }}
              >
                Click Me!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate and bring your ideas to life with modern frontend
            technologies
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center mx-auto">
            Get In Touch
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Compact Social Media Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="#"
                className="group relative p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group relative p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="group relative p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="group relative p-3 bg-gradient-to-br from-gray-800 to-black rounded-xl hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Telegram */}
              <a
                href="#"
                className="group relative p-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="group relative p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl hover:scale-110 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

            {/* Copyright */}
            <div className="text-center text-gray-400">
              <p className="text-sm">
                © 2024 Sourena. Made with Mohammad for amazing projects
              </p>
              <p className="text-xs mt-1 opacity-75">
                Connect with me on social media
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
