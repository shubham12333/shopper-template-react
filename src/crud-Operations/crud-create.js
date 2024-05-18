import axios from "axios";

import { Formik,Form,Field,ErrorMessage } from "formik"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function CrudCreate()
{
    const navigate = useNavigate();
    const[products,SetProducts] =useState([]);
    const[idError,setIdError]=useState('');

    useEffect(()=>{
        axios({
            method : 'get',
            url : 'http://127.0.0.1:1010/products'
        })
        .then(response=>{
            SetProducts(response.data);
        })
    },[])
    function VerifyUserID(e)
    {
        var id = parseInt(e.target.value);
        for(var product of products)
        {
            if(product.ProductId==id)
            {
                setIdError('ID Already Taken - Please Try Another');
                break;
            }
            else
            {
                setIdError('User Name Available');
            }
        }
    }

    return(
    <div className="container-fluid">
        <h2>Add New Product</h2>
        <Formik
            initialValues={{
                ProductId:0,
                Name:'',
                Price:0,
                Stock:false
            }}

            onSubmit={
               (values)=>{
                axios({
                    method : 'post',
                    url : 'http://127.0.0.1:1010/addproducts',
                    data : values
                }).then(()=>{
                        alert("Product Register");
                        navigate("/products");
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
               }

            }
        >
            {
                <Form>
                    <dl>
                        <dt>Product Id</dt>
                        <dd><Field name="ProductId" type='number' onKeyUp={VerifyUserID} /></dd>
                        <dd>{idError}</dd>
                        <dt>Product Name</dt>
                        <dd><Field name="Name" type='text'/></dd>
                        <dt>Product Price</dt>
                        <dd><Field name="Price" type='number' /></dd>
                        <dt>Stock</dt>
                        <dd className="form-switch"><Field name="Stock" type="checkbox" className="form-check-input" />&nbsp;&nbsp;&nbsp;Available</dd>
                    </dl>
                    <button className="btn btn-primary">Add Product</button><br></br>
                    <Link className='me-3' to="/products">View Products</Link>
                </Form>
                
            }
        </Formik>
    </div>)
} 