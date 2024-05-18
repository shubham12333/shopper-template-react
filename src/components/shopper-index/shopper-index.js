
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import'./shopper-index.css';
import { ShopperHome } from "../shopper-home/shopperhome";
import { ShopperJwelery } from "../shopper-jwelery/Shopper-jwelery";
import { ShopperElectronics } from "../shopper-electronics/shopper-electronics";
import { ShopperCategory } from "../shopper-category/shopper-category";
import { ShopperRegister } from "../shopper-register/shopper-register";
import { ShopperLogin } from "../shopper-login/shopper-login";
import { ShopperInvalid } from "../shopper-invalid/shopper-invalid";
import { CrudIndex } from "../../crud-Operations/crud-index";
import { CrudCreate } from "../../crud-Operations/crud-create";
import { CrudDetails } from "../../crud-Operations/crud-details";
import { CrudEdit } from "../../crud-Operations/crud-edit";

export function ShopperIndex()
{
    return(
    <div >
        <BrowserRouter>
            <header className="d-flex justify-content-between   p-4">
                <div>
                    <h3>Shopper</h3>
                </div>
                <nav className="d-flex">
                    <div className="me-3 ms-2 s"><Link  to="home" className="btn">Home</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="products" className="btn">Product</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="register" className="btn">Register</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="login" className="btn">Login</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="category/jewelery" className="btn">Men's Clothing</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="category/jewelery" className="btn">Women's Clothing</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="category/jewelery" className="btn">Jwelery</Link></div>
                    <div className="me-3 ms-2 s"><Link  to="category/electronics" className="btn">Electronics</Link></div>
                </nav>
                <div>
                    <span className="bi bi-search me-3 ms-2 s"></span>
                    <span className="bi bi-person me-3 ms-2 s"></span>
                    <span className="bi bi-heart me-3  ms-2 s"></span>
                    <span className="bi bi-cart4 me-3 ms-2  s"></span>
                </div>  
            </header>
            <div className="mt-2  p-2 bg-dark text-white text-center">
                ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️
            </div>
            <div className="mt-4">
                <Routes>
                    <Route path="/" element={<ShopperHome/>}></Route>
                    <Route path="home" element={<ShopperHome/>}></Route>
                    <Route path="jwelery" element={<ShopperJwelery/>}></Route>
                    <Route path="electronics" element={<ShopperElectronics/>}></Route>
                    <Route path="category/:catname" element={<ShopperCategory/>}></Route>
                    <Route path="register" element={<ShopperRegister/>}></Route>
                    <Route path="login" element={<ShopperLogin/>}></Route>
                    <Route path="invalid" element={<ShopperInvalid/>}></Route>
                    <Route path="products" element={<CrudIndex/>}></Route>
                    <Route path="NewProduct" element={<CrudCreate/>}></Route>
                    <Route path="/products/cruddetails/:id" element={<CrudDetails/>}></Route>
                    <Route path="/crudedit/:id" element={<CrudEdit/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    </div>)
}