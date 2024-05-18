import { Button } from "@mui/material";


export function MUIComponents()
{
    return (
        <div className="container-fluid">
            <Button variant="contained" color="success">Success</Button><br></br><br></br>
            <Button variant="outlined"  color="error"> Error</Button>
            <Button variant="secondary" className="btn btn-primary">Secondary</Button>
            <Button color="secondary" >Secondary</Button>
        </div>
    )
}