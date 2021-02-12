import {lazy,Suspense} from "react"
//import Lojas from "../componentes/Lojas"
const Lojas =lazy (()=>import("../componentes/Lojas"))

function Contato() {
    return (
       <Suspense fallback={<p>Carregando...</p>}>
            <Lojas />
       </Suspense>
    )
}
export default Contato;