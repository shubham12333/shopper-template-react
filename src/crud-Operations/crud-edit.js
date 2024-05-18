
import { Field, Formik ,Form} from "formik";
import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";



export function CrudEdit()
{
    const params =  useParams();
    const[product,SetProduct]=useState([{Name:'',Price:0,Stock:false}]);

    return(
    <div className="container-fluid">
        <h2>Edit Product</h2>
        <Formik
        initialValues={
            {
                ProductId:product[0].ProductId,
                Name:product[0].Name,
                Price:product[0].Price,
                Stock:product[0].Stock
            }
        }
        onSubmit={
            (values)=>{
                alert(JSON.stringify(values));
            }
        }
        >
            {
                <Form>
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <Field type='text' name="Name" ></Field>
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <Field type='text' name="Price" ></Field>
                        </dd>
                        <dt>Stock</dt>
                        <dd>
                            <Field type='checkbox' name="Stock"></Field>
                        </dd>
                    </dl>
                    <button className="btn btn-success">Save</button>
                    <div>
                        <Link to="/products">Back to Products</Link>
                    </div>
                </Form>
            }

            <Form>
                <Field type='text'>
                        
                </Field>
            </Form>
        </Formik>
    </div>
    )


}