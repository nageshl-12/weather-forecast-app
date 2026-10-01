import { createContext, useContext } from "react";

const context = createContext();
export default context;

export function useValues() {
  return useContext(context);
}
