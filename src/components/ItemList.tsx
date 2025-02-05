import { FaBuildingColumns, FaMoneyBill } from "react-icons/fa6";
import CountryInfoItem from "./CountryInfoItem";

type TCountry = {
  name: string;
  emoji: string;
  currency: string;
  capital: string;
};

const ItemList = (country: TCountry) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl md:text-2xl">{country.emoji}</h2>
        <h4 className="text-base md:text-lg font-semibold">
          {country.name ?? "N/A"}
        </h4>
        <div>
          <CountryInfoItem
            icon={<FaBuildingColumns />}
            label={country.capital}
          />
          <CountryInfoItem icon={<FaMoneyBill />} label={country.currency} />
        </div>
      </div>
    </>
  );
};

export default ItemList;
