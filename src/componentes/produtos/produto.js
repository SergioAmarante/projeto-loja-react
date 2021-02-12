import './produto.css'
export default function Produto(props) {


    return (
        <div class={props.categoria}>
            <div class="produto ">
                <div>
                    <img src={require(`../images/${props.imagem}`).default} ></img>
                </div>
                <div>
                    <h2>{props.nome}</h2>
                    <span class="valor" >{props.valor}</span>
                    <span class ="promo">{props.valor_final}</span>
                </div>
            </div>
        </div>
    )
}