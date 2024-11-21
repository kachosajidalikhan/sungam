import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We'd love to hear from you. Please fill out the form below or use our contact information.
          </p>
        </div>



        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-blue-500" />
                  <p className="text-gray-600">123 Example Street, City, State 12345</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-blue-500" />
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-blue-500" />
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
          </div>

          
        </div>
        <br />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:col-span-2 lg:col-span-1">
            <div className="h-full">
              <iframe
                title="Map"
                className="w-full h-full min-h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634725546!2d-73.98731668459395!3d40.74844097932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635786889184!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            We aim to respond to all inquiries within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}
