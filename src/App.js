import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
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
          <QuoteDetail></QuoteDetail>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
