import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { UserContextProvider } from "./context/UserContext";
import PersonalInfo from "./pages/PersonalInfo";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import "../styles/App.scss";

library.add(fas);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Switch>
            <Route path="/onboarding" component={PersonalInfo} />
            <Route path="/orders" component={Orders} />
            <Route path="/payment" component={Payment} />
            <Redirect exact from="/" to="/onboarding" />
          </Switch>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
