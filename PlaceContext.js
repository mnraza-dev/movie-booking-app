import { createContext, useState } from "react";

const Place = createContext();

const PlaceContext = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(["Delhi", "Mumbai"]);
  return (
    <Place.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </Place.Provider>
  );
};

export { Place, PlaceContext };
