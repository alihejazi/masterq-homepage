import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import HomePage from "./pages/HomePage/HomePage";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LcYZVKnX4kIIuqmPoilSwJTpuxPtO7Q0QjDGCVESgvGACXADXorZjIrXzS9FyXsrIcY8OAV2NJJI5pNcTthiWky00YbK8InCL",
);

function App() {
  return (
      <Elements stripe={stripePromise}>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Elements>
  );
}

export default App;
