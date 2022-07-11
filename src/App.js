import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Global } from "./styles/GlobalStyle";
import './App.css'
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
    return (
        <CartProvider>
            <CatalogueProvider>
                <Global />
                <Routes>
                    <Route exact path="/" element={<Navigate to={"/home"} />} />
                    <Route exact path={"/home"} element={<Home />} />
                    <Route exact path={"/cart"} element={<Cart />} />
                </Routes>
            </CatalogueProvider>
        </CartProvider>
    );
}

export default App;
