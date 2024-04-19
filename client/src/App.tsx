import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
//using lazy to render only page that is currently being used for more effient usage
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  return (
    <BrowserRouter>
    {/* suspense for creating fallback that shows something before the page is fully loaded */}
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
