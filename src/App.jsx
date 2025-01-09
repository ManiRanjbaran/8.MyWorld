import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricings from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./Components/City/CityList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="Product" element={<Product />} />
        <Route path="Pricings" element={<Pricings />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of cities</p>} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CityList />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        {/*a route made for checking differences made*/}
        <Route path="?" element={<PageNotFound />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}
