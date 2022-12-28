import { Redirect, Route, Switch } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import Quote from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Switch>
      <Route path={"/"} exact>
        <Redirect to="/quotes" />
      </Route>

      <Route path={"/quotes"} exact>
        <Quotes></Quotes>
      </Route>
      <Route path={"/quotes/:quoteId"}>
        <Quote></Quote>
      </Route>
      <Route path={"/new-quote"}>
        <QuoteDetail></QuoteDetail>
      </Route>
    </Switch>
  );
}

export default App;
