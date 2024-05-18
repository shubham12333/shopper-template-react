import { param } from "jquery";

export function ShopperCategory()
{
    return(
        <div className="container-fluid">
            <h2>Shopper Category{param.name}</h2>

        </div>
    )
}