import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const history = useHistory();

  const [userProgress, setUserProgress] = useState(0);
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [userStoreName, setUserStoreName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [orders, setOrders] = useState("");

  const values = {
    userProgress,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    stepThree,
    setStepThree,
    setUserProgress,
    userStoreName,
    setUserStoreName,
    fullName,
    setFullName,
    email,
    setEmail,
    storeUrl,
    setStoreUrl,
    orders,
    setOrders,
    history,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
