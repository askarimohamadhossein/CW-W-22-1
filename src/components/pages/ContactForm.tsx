"use client";

import type React from "react";

import {
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      value: "askarimohamadhosseinpc@gmail.com",
      description: "Send me an email anytime",
      color: "from-blue-500 to-cyan-500",
      delay: "0s",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      value: "+98 913 923 9674",
      description: "Call me during business hours",
      color: "from-green-500 to-emerald-500",
      delay: "0.2s",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Esfahan, Iran",
      description: "Available for remote work",
      color: "from-purple-500 to-pink-500",
      delay: "0.4s",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Quick and professional response",
      color: "from-orange-500 to-red-500",
      delay: "0.6s",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      color: "from-purple-500 to-pink-500",
      href: "https://instagram.com/askarimohamadhossein",
    },
    {
      name: "LinkedIn",
      color: "from-blue-600 to-blue-700",
      href: "https://www.linkedin.com/in/askarimohamadhossein/",
    },
    {
      name: "GitHub",
      color: "from-gray-700 to-gray-800",
      href: "https://github.com/askarimohamadhossein",
    },
    {
      name: "Telegram",
      color: "from-blue-400 to-blue-500",
      href: "https://www.linkedin.com/in/askarimohamadhossein/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-ping" />

        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Let's Work Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to bring your ideas to life? Get in touch and let's create
              something amazing!
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Globe className="w-5 h-5" />
                <span>Available worldwide for remote projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-10">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className={`bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                mounted ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: info.delay }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 font-semibold mb-1">{info.value}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Send Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white  placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white  placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold"
                  placeholder="Subject"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none  placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-700">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let's Create Together
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm passionate about creating exceptional digital experiences.
                Whether you need a stunning website, a powerful web application,
                or want to discuss your next big idea, I'm here to help bring
                your vision to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Response within 24 hours
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Remote work worldwide</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 group`}
                  >
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Quick Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    What's your typical response time?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    I usually respond within 24 hours, often much sooner!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Do you work with international clients?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    I work with clients from all around the world.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    What's the best way to reach you?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Email is usually best, but feel free to use any method that
                    works for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't hesitate to reach out. I'm excited to hear about your ideas
            and help you bring them to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sourena@example.com"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <a
              href="tel:+989123456789"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
