import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Footer } from "./Components/Footer";

const promise = loadStripe(
  "pk_test_51Hr3VSHHAqrIpxNQaNcafiE9uqFNfAvWeMuYlwhZwhS4Q2DHQg30U9I3Yx6kwo8Qr0ERqbl2H4Xp60FvEuI4nued00ZztWMBmC"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/login">
          <Login />
          <Footer />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer />
        </Route>

        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
