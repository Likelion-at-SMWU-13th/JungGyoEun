import { createContext, useContext, useState, useMemo } from "react";

const MemberContext = createContext({
  part: "",
  setPart: () => {},
});

export const MemberProvider = ({ children }) => {
  const [part, setPart] = useState("");
  const value = useMemo(() => ({ part, setPart }), [part]);

  return (
    <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
  );
};

export const useMember = () => useContext(MemberContext);

export default MemberProvider;
