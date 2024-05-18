import axios from "axios";
import { useEffect, useState } from "react"


export function ShopperJwelery()
{
    const[products,SetProducts]=useState([]);

   

    useEffect(()=>{
        axios({
            method:'get',
            url:'https://fakestoreapi.com/products/category/jewelery'
        })
        .then(response=>
            SetProducts(response.data)
            
        )
    },[]);
  
    return(
        <div className="container-fluid">
            
            <div className="d-flex flex-wrap">
               
                {
                    products.map(product=>
                        <div className="card p-2 m-2" style={{width:"250px"}}>
                            <img src={product.image} className="card-img=top" height="220"></img>
                            <div className="card-header mt-2" style={{height:'120px'}}>
                                <p>{product.title}</p>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}