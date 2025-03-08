import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Schedule Classes",
    description: "Easily create and customize your course schedule",
  },
  {
    icon: Clock,
    title: "Manage Teaching Hours",
    description: "Define your teaching availability for student bookings",
  },
  {
    icon: LinkIcon,
    title: "Class Registration Links",
    description: "Share custom links for students to enroll in your courses",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your Infyni Scheduler account" },
  {
    step: "Set Teaching Hours",
    description: "Define when you're available to conduct classes",
  },
  {
    step: "Share With Students",
    description: "Send registration links to your students",
  },
  {
    step: "Start Teaching",
    description: "Receive notifications when students book your classes",
  },
];

const Home = () => {
  return (
    <main className="container mx-auto px-8 py-4">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            Effortless Class Scheduling
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Infyni Scheduler connects teachers and students seamlessly. Create class schedules, 
            set your teaching hours, and let students book live sessions with you without the hassle.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg bg-[#FF6600] hover:bg-[#FF6600] text-white">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.jpg"
              alt="Educational scheduling illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FF6600]">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-[#FF6600] mb-4 mx-auto" />
                <CardTitle className="text-center text-[#FF6600]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FF6600]">
          What Educators & Students Say
        </h2>
        <TestimonialsCarousel />
      </div>

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FF6600]">
          How It Works
        </h2>
        <div className="w-full mx-auto px-4">
          <div className="bg-white opacity-100 rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 relative">
              {/* Horizontal connecting line between indicators */}
              <div className="hidden lg:block absolute left-[42px] right-[42px] top-[25px] h-[3px] bg-[#FF6600]" />
              
              {howItWorks.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-full flex items-center justify-center mb-4 relative z-10">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">{step.step}</h3>
                  <p className="text-gray-600 text-center max-w-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FF6600] text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Online Teaching?
        </h2>
        <p className="text-xl mb-6">
          Join educators across the globe who use Infyni Scheduler to connect with students 
          and deliver exceptional learning experiences.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-[#FF6600]">
            Start Teaching <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;