import { Link } from "react-router-dom";


export function ShopperInvalid()
{
    return(
        <div className="container-fluid">
            <h3 className="text-danger">Invalid ID/Password</h3>
            <Link to="/login">Try Again</Link>
        </div>
    )
}