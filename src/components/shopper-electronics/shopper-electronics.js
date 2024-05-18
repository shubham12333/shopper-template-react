import axios from "axios";
import { useEffect, useState } from "react"


export function ShopperElectronics()
{
    const[products,SetProducts] = useState([]);

   

    useEffect(()=>{
        axios({
            method:'get',
            url:'https://fakestoreapi.com/products/category/electronics'
        })
        .then(res=>
            SetProducts(res.data)
            )
    },[]);

    

    return(
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>{
                        <div className="card m-2 p-2" style={{width:'250px'}}>
                            <img src={product.image} className="card-img-top" height='170'></img>
                            <div className="card-header">
                                <p>{product.title}</p>
                            </div>
                            <div className="card-footer">
                                <button className='w-100 btn btn-danger'>Add to Cart <span className="bi bi-cart4"></span></button>
                            </div>
                        </div>
                        
                    })
                }
            </div>
        </div>
    )
}