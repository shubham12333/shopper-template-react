import { useCookies } from "react-cookie"


export function ShopperHome()
{
    const[cookies,SetCookies,RemoveCookies]=useCookies();
    return(
        <div className="container-fluid">
            <div className="text-center p-1 mb-4 mt-1 bg-dark text-white">
                    <h5>Hello - {cookies["userid"]} &nbsp;&nbsp;Happy to See You Here !</h5>
            </div>
            <div className="d-flex" >
                <div >
                    <img src="ele.jpg" style={{width:"310px",height:"250px",marginRight:"30px"}}></img>
                </div>
                <div>
                    <img src="mans.jpg" style={{width:"310px",height:"250px",marginRight:"30px"}}></img>
                </div>
                <div>
                    <img src="womens.jpg" style={{width:"310px",height:"250px",marginRight:"30px"}}></img>
                </div>
                <div>
                    <img src="jwelery.jpg" style={{width:"310px",height:"250px",marginRight:"30px"}}></img>
                </div>
                
            </div>

        </div>
    )
}