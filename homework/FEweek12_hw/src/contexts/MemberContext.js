import { createContext, useContext, useState } from "react";

const MemberContext = createContext({
  part: "",
  setPart: () => {},
});

export const MemberProvider = ({ children }) => {
  const [part, setPart] = useState("");

  return (
    <MemberContext.Provider value={{ part, setPart }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => useContext(MemberContext);

export default MemberProvider;
