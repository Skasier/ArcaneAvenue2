import { Route, Routes } from "react-router";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/WishList/Wishlist";

export default function Pages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
}
