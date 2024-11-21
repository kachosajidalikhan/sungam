import { Star } from 'lucide-react';

export default function Services() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat opacity-1"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#C5A572] mb-8">
          Our Services
        </h1>

        <p className="text-center max-w-4xl mx-auto mb-16 text-gray-700">
          Dawat is a full fledged Event Management company with a wide spectrum
          of services to provide you one window solution.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <ServiceItem text="Event Full Services" />
            <ServiceItem text="Decor Services" />
            <ServiceItem text="Event Management" />
            <ServiceItem text="Dance Floors" />
            <ServiceItem text="Food & Catering" />
            <ServiceItem text="Card Printing" />
          </div>

          <div className="space-y-4">
            <ServiceItem text="Photography" />
            <ServiceItem text="Make Up" />
            <ServiceItem text="Security" />
            <ServiceItem text="Lighting & Sound" />
            <ServiceItem text="P.R. Events" />
            <ServiceItem text="DJ – Disc Jockey" />
          </div>

          <div className="space-y-4">
            <ServiceItem text="Wedding Entrances" />
            <ServiceItem text="Floral & Stages" />
            <ServiceItem text="Destination Weddings" />
            <ServiceItem text="Bridal Shower" />
            <ServiceItem text="Birthdays" />
            <ServiceItem text="Corporate Events" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Event decoration with purple lighting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Elegant chandelier decoration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Event space with draping and lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ text }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <Star className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}
