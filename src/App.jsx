import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import Exhibitions from "./pages/Exhibitions";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import TermsOfUse from "./pages/TermsOfUse";
import Viamate from "./pages/Viamate";
import Viawa from "./pages/Viawa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/exhibitions"
          element={<Exhibitions />}
        />

        {/* No confirmed exhibitions to detail yet — send visitors (and any
            old shared links) back to the portfolio status page instead of
            showing the previous hardcoded placeholder exhibition. */}
        <Route
          path="/exhibition-detail"
          element={
            <Navigate
              to="/exhibitions"
              replace
            />
          }
        />

        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/viamate"
          element={<Viamate />}
        />

        <Route
          path="/viawa"
          element={<Viawa />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/cookie-policy"
          element={<CookiePolicy />}
        />

        <Route
          path="/terms-of-use"
          element={<TermsOfUse />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;