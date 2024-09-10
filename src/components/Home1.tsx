import React from "react";
import { FaHome, FaRegBuilding, FaTools, FaCouch } from "react-icons/fa";

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  description: string;
}

const StatItem = ({ icon: Icon, value, description }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h2 className="text-3xl font-bold mb-4">{value}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-36 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem icon={FaHome} value="560+" description="Total Area Sq" />
        <StatItem
          icon={FaRegBuilding}
          value="197K+"
          description="Apartments Sold"
        />
        <StatItem
          icon={FaTools}
          value="268+"
          description="Total Constructions"
        />
        <StatItem icon={FaCouch} value="340+" description="Apartio Rooms" />
      </div>
    </div>
  );
};

export default StatsSection;
