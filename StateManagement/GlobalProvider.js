import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [GlobalName, GlobalSetName] = useState("");
  const [GlobalStudentId, GlobalSetStudentID] = useState("");
  const [GlobalPhone, GlobalSetPhone] = useState("");
  const [GlobalEmail, GlobalSetEmail] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        GlobalName,
        GlobalSetName,
        GlobalStudentId,
        GlobalSetStudentID,
        GlobalPhone,
        GlobalSetPhone,
        GlobalEmail,
        GlobalSetEmail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
