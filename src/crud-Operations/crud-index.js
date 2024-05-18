import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";


export function CrudIndex()
{
    const[products,SetProducts]=useState([]);
    const navigate = useNavigate();

    function DeleteClick(e)
    {
       var flag = window.confirm("Are You Sure\nto Delete");

       if(flag==true)
       {
            axios({
                method :'delete',
                url : `http://127.0.0.1:1010/deleteproduct/${parseInt(e.currentTarget.value)}`
            })
            alert("Record Deleted");
            navigate("/home");
       }
    }


    useEffect(()=>{
        axios({ 
            method:'get',
            url:'http://127.0.0.1:1010/products'
         })
         .then(response=>{
            SetProducts(response.data);
         })
         .catch(error=>{
            console.log(error);
         })
    },[]);

    return(
    <div className="container-fluid">
        <h3>Products Grid</h3>
        <div className="mb-3">
            <div>
                <Link to="/NewProduct" className="btn btn-primary">Add New Product</Link>
            </div>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name </th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=>(
                        <tr key={product.ProductId}>
                            <td>{product.Name}</td>
                            <td>
                                <Link to={'cruddetails/'+product.ProductId} className="btn btn-info">
                                    <span className="bi bi-eye"></span>
                                </Link>
                            </td>
                            <td>
                                <Link to={"/crudedit/"+product.ProductId} className="btn btn-warning" >
                                    <span className="bi bi-pen"></span>
                                </Link>
                            </td>
                            <td>
                                <button to="/details" value={product.ProductId} className="btn btn-danger" onClick={DeleteClick}>
                                    <span className="bi bi-trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>)
}