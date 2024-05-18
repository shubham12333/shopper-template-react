import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function CrudDetails()
{
    const params =  useParams();
    const[product,SetProduct]=useState([{Name:'',Price:0,Stock:false}]);

    useEffect(()=>{
            axios({
                method : 'get',
                url : `http://127.0.0.1:1010/details/${params.id}`
            })
            .then(response=>{
                SetProduct(response.data);
                console.log(response.data);
            })
    },[]);

    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product[0].Name}</dd>
                <dt>Price</dt>
                <dd>{product[0].Price}</dd>
                <dt>Stock</dt>
                <dd>{(product[0].Stock==true)?`Available`:`Out Of Stock`}</dd>
            </dl>
            <Link to="/products">Back To Products</Link>
        </div>
    )
}