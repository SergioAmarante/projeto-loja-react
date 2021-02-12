import {Switch, Route} from 'react-router-dom';

import Produtos from "./Pages/produtos.js";
import Compras from "./Pages/compras.js";
import Paginafinal from "./Pages/paginafinal.js";
import Contato from "./Pages/contatos.js";

function Rotas(){
    return(
        <Switch>
           
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/compras" component={Compras} />
            <Route exact path="/paginafinal" component={Paginafinal} />
            <Route exact path="/contatos" component={Contato} />
        </Switch>
    )
}

export default Rotas