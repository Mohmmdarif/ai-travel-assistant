import React from "react";

interface CountryInfoItemProps {
  icon: React.ReactNode;
  label: string | null | undefined;
}

const CountryInfoItem: React.FC<CountryInfoItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      {icon}
      <span className="font-semibold truncate text-sm md:text-base">
        {label ?? "N/A"}
      </span>
    </div>
  );
};

export default CountryInfoItem;
