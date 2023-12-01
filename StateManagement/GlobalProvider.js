import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [GlobalName, GlobalSetName] = React.useState("");
  const [GlobalStudentId, GlobalSetStudentID] = React.useState("");
  const [GlobalPhone, GlobalSetPhone] = React.useState("");
  const [GlobalEmail, GlobalSetEmail] = React.useState("");

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
