import { useReducer } from "react";
import { ChangeCase } from "../../hook/changecase.hk";



function reducer(state,action)
{
    switch(action.type)
    {
        case "join":
        return{count:state.count+1};
        case "exit":
        return{count:state.count-1};
    }
}

export function ReducerComponent()
{
    let intialState = {count:0};

    const[state,dispatch]=useReducer(reducer,intialState);

    const msg = ChangeCase('WelCOME to REACT'); 

    function JoinClick()
    {
        dispatch({type:'join'})
    }
    function ExitClick()
    {
        dispatch({type:'exit'})
    }
    return(
        <div className="container-fluid">
            <h3>{msg}</h3>
            <h2>Live <span className="bi bi-youtube me-3"></span>Streaming</h2>
            <h3 className="mt-4">{state.count}  Watching</h3>
            <button className="btn btn-primary me-3 mt-4" onClick={JoinClick}>Join</button>
            <button className="btn btn-danger mt-4" onClick={ExitClick}>Exit</button>
        </div>
    )
}