import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Quote from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
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
          <NewQuote></NewQuote>
        </Route>
        <Route path={"*"} exact>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
