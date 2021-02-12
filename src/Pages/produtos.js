import {lazy, Suspense} from "react";
import  {useState, useEffect} from 'react';
//import Produto from "../componentes/produtos/produto.js"
import { Container, Row } from 'react-bootstrap';
const Produto =lazy (()=>import ("../componentes/produtos/produto.js"))
function Produtos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost/entrega_projetos/back/pedidos-lista.php")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h3>Categorias</h3>
                    <div class="row">
                        <ol id="listaLinha">
                            <li class="lisP" onclick="exibirTodos()">Todos (16)</li>
                            <li class="lisP" onclick="exibirCategoria('consoles')">Relogio (4)</li>
                            <li class="lisP" onclick="exibirCategoria('jogos')">Fone (4)</li>
                            <li class="lisP" onclick="exibirCategoria('acessorios')">Camera (4)</li>
                            <li class="lisP" onclick="exibirCategoria('pc')">Celular (4)</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Container> 
                <Row>
                {produtos && produtos.map(item =>
                    <Suspense fallback={<p>"Carregando..."</p>} >
                         <Produto key={item.id} imagem={item.imagem} nome={item.produto} valor={item.valor} valor_final={item.valor_final} categoria={item.categoria} />
                    </Suspense>
                     )}
                </Row>
            </Container>
        </div>
    )
}

export default Produtos;