import {Routes, Route} from "react-router";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/WishList/Wishlist";
import Auth from './pages/Auth/Auth'
import SellerD from './pages/SellerD/Seller'


export default function Pages(){

    return(
        <Routes>
            {/* this is where pages go */}
            <Route index element={<Home/>} />
            <Route path="wishlist" element={<Wishlist/>} />
            <Route path="auth" element={<Auth/>} />
            


        </Routes>
    )
}