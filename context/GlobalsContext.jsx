import { createContext, useContext } from "react";
const GlobalsContext = createContext(null);
export const GlobalsProvider = ({ value, children }) => (
    <GlobalsContext.Provider value={value}>{children}</GlobalsContext.Provider>
);
export const useGlobals = () => useContext(GlobalsContext);
