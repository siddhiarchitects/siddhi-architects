import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-600">Siddhi Architects</div>
          <nav className="space-x-6 text-sm font-medium hidden md:flex">
            <div className="group relative">
              <span className="cursor-pointer">Interiors</span>
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Modular Kitchens</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Living Rooms</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bedrooms</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Wardrobes</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Study Rooms</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Kids Rooms</a>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer text-pink-500">Design Ideas</span>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg hidden group-hover:block z-50">
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Modular Kitchen Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Wardrobe Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Living Room Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bedroom Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Kids Room Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">TV Unit Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">False Ceiling Designs</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Pooja Room Designs</a>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">Magazine</span>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">SiddhiArchitects TV</span>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">Cities</span>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">Siddhi Portfolio</span>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">More</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">We Design Your Dream Space</h1>
        <p className="text-gray-600 mb-6">Personalized interiors, expert execution, and complete peace of mind</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 text-lg rounded-full">Get Free Consultation</Button>
      </section>

      {/* Service Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {["Modular Kitchens", "Wardrobes", "Living Rooms", "Bedrooms", "Full Home Interiors", "Commercial Projects"].map((title, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-xl font-semibold mb-2">{title}</div>
                <p className="text-gray-500">High-quality, personalized {title.toLowerCase()} designed just for you.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <p>&copy; 2025 Siddhi Architects. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
