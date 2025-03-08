"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Dr. Abhishek Singh",
    role: "University Professor",
    content:
      "Infyni Scheduler has transformed how I manage my office hours and student consultations. My students love how easy it is to book sessions!",
    image: "./default_image.svg",
  },
  {
    name: "Onkar Vatsa",
    role: "Math Tutor",
    content:
      "As a private tutor, Infyni Scheduler helps me stay organized with multiple students. The automatic reminders ensure everyone shows up prepared.",
    image: "./default_image.svg",
  },
  {
    name: "Shantanu Sutar",
    role: "Online Course Creator",
    content:
      "Infyni Scheduler streamlined my 1-on-1 coaching sessions with students from different time zones. It's been essential to scaling my course business.",
    image: "./default_image.svg",
  },
  {
    name: "Rohit Kumar",
    role: "High School Student",
    content:
      "Booking study sessions with my teachers has never been easier. I can see their availability instantly and schedule help when I need it most.",
    image: "./default_image.svg",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialsCarousel;