import axios from "axios";
import { Form, Formik,Field } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function ShopperLogin()
{
    const navigate = useNavigate();
    const[cookies,SetCookies,RemoveCookies]=useCookies();

    return(
        <div>
            <h2>Login Component</h2>
            <Formik
            initialValues={{
                "UserId":"",
                "Password":""
            }}

            onSubmit={
                (values)=>{
                    axios({
                        method:"get",
                        url:"http://127.0.0.1:6060/users"
                    })
                    .then(response=>{
                         for(var user of response.data)
                         {
                            if(user.UserID==values.UserId && user.Password==values.Password)
                            {
                                SetCookies("userid",user.UserID);
                                navigate("/home");
                                break;
                            }
                            else
                            {
                                navigate("/invalid")
                            }
                         }
                    })
                }
            }
            >
                {
                    <Form>
                        <dl>
                            <dt>UserId</dt>
                            <dd><Field type="text" name="UserId"></Field></dd>
                            <dt>Password</dt>
                            <dd><Field type="password" name="Password"></Field></dd>
                        </dl>
                        <button className="btn btn-primary">Login</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}