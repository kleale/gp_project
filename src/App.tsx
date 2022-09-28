import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
// import { Theme, presetGpnDefault, presetGpnDark } from "@consta/uikit/Theme";
import { useAppSelector } from "./hooks/redux";
import { Themes } from "./store/reducers/themeSlice";
import Header from "./components/Header/Header";
import Authentication from "./components/Authentication/Authentication";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Registration from "./components/Registration/Registration";
import AuthentificatedHeader from "./components/AuthentificatedHeader/AuthentificatedHeader";
import OrganizationInfo from "./components/OrganizationInfo/OrganizationInfo";
import { Calendar } from "./components/Calendar/Calendar";
import EmailAction from "./components/EmailAction/EmailAction";

function App() {
  const theme = useAppSelector((state) => state.themeReducer);

  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Header></Header> */}
      {/* <Authentication></Authentication> */}
      {/* <PasswordRecovery></PasswordRecovery> */}
      {/* <PasswordReset></PasswordReset> */}
      <Registration></Registration>
      {/* <OrganizationInfo></OrganizationInfo> */}
      {/* <Calendar></Calendar> */}
      {/* <EmailAction></EmailAction> */}
    </div>
  );
}

export default App;
