import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <div>
    <Layout>
      <Switch>
      <Route path="/" exact>
        <AllMeetups />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/new-meetups">
        <NewMeetup />
      </Route>
      </Switch>
      </Layout> 
    </div>
  );
}

export default App;
