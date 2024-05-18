import React, { useContext } from "react"



let userDetailsContext = React.createContext(null);

export function HomeComponent()
{
    const context = useContext(userDetailsContext);
    return(
    <div className="container-fluid bg-danger p-4 text-white">
        <h3>Home Demo -{context.username}</h3>
        <DemoComponent/>
    </div>
    )
}

export function DemoComponent()
{
    const context = useContext(userDetailsContext);
    return(
        <div>
            <div className="container-fluid bg-warning p-4 text-white">
                 <h3>Home Demo -{context.username}</h3>
             </div>
        </div>
    )
}

export  function  ContextComponent()
{
    return (
        <div className="container-fluid bg-dark p-4 text-white">
            <h2>Context Demo</h2>
            <userDetailsContext.Provider value={{username:'shubham.0323'}}>
                <HomeComponent/>
            </userDetailsContext.Provider>
        </div>
    )
}