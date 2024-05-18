import {useFormik,Formik,Form,Field,ErrorMessage } from "formik";
import axio from "axios";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export function ShopperRegister()
{
    const navigate = useNavigate();
    return(
        <div className="container-fluid">
            
                <h3>Register User</h3>
                <Formik
                initialValues={{
                        UserId:"",
                        UserName:"",
                        Password:"",
                        Email:"",
                        Age:0,
                        Mobile:""
                    }}

                validationSchema={
                    yup.object({
                        UserId:yup.string().required("User ID Required"),
                        UserName:yup.string().required("USer Name Required"),
                        Password:yup.string().required("Password is required"),
                        Email:yup.string().required("Email Required").email("Invalid Email"),
                        Age : yup.number().required("Age is Required"),
                        Mobile : yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid Mobile Number")
                    })
                } 
                onSubmit={
                    async (values)=>{
                        console.log(values);
                      await axios
                      .post('http://127.0.0.1:6060/registeruser',
                        {
                            
                                UserID: values.UserId,
                                UserName: values.UserName,
                                Password: values.Password,
                                Email: values.Email,
                                Age: values.Age,
                                Mobile: values.Mobile
                            
                        },
                        {
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Access-Control-Allow-Origin': '*',
                          },
                        },
                      )
                      .then(function (response) {
                        console.log(response);
                        navigate("/login");
                      });
                    }
                }
                >

                {
                    <Form>
                        <dl>
                            <dt>UserID</dt>
                            <dd><Field  type="text" name="UserId"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name="UserId"/></dd>
                            <dt>User Name</dt>
                            <dd><Field  type="text" name="UserName"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                            <dt>Password</dt>
                            <dd><Field  type="password" name="Password"></Field></dd>
                            <dt>Email </dt>
                            <dd><Field  type="email" name="Email"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name="Email"/></dd>
                            <dt>Age</dt>
                            <dd><Field  type="number" name="Age"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name="Age"/></dd>
                            <dt>Mobile</dt>
                            <dd><Field  type="text" name="Mobile"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                        </dl>
                        <button className="btn btn-primary" type="submit">Register</button><br></br>
                        <Link to="/login">Existing User</Link>
                    </Form>
                    
                }
            </Formik>

        </div>
    )
}