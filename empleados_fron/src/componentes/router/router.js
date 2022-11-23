import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "../login/login";
import empleados from '../empleados/empleados.buscar';
import PrivateRoute from "../auth/privaterouter";

export default function AppRouter(){

    return(
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={login}/>
                <Route exact path={"/empleados"} component={empleados}/>
                <PrivateRoute exact path={["/home"]} component={Home}/>
                <Route
                    path={'*'}
                    component={() => (
                        <h1 style={{ marginTop: 300}}>
                            404
                            <br />
                            Pagina no encontrada
                        </h1>
                    )}
                />
           </Switch>
        </Router>
    );
}

function Home(){
    return <h2>Home</h2>;
}
/*
function Home(){
    return (
        <div>
            <h2 style={{ marginTop: 300 }}>Home</h2>
         </div>
    )
}*/
