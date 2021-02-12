import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import imgfinal from "../componentes/images/Blu1.png"
import '../componentes/paginafinal/paginafinal.css'
function Contato(){
   /*
    async function registerComentario(evento){
        evento.preventDefault();
        let formData = new FormData (evento.target);
        //const url = 'http://localhost/entrega_projetos/back/contato-guarda.php';
        const url = 'http://localhost:3210/contatos';
        fetch(url, {
            method: "POST", 
            body: formData 
        }).then((response) => console.log(response.json())).then((dados) => { 
            console.log("euu", "dados");
        });

        window.location.reload()
    }
   */

  const { register, handleSubmit } = useForm();
  
  const handleOnSubmit = (data) => {
    axios.post("http://localhost:3210/contatos", data).then((response) => {
      alert("Cadastrado com Sucesso");  
      window.location.reload()
    });
  };

  const [contatos, setContatos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3210/contatos").then(function(response){
            //console.log(response.data)
            setContatos(response.data);
            //console.log(setContatos)
        })
    }, []);


    return(
        <div Class="container formMensagem">
        <div class="row justify-content-around">
            <div class="col-12" >
                 <h1> Quer ganhar um Blusão Tech-Shop?</h1>
                 <h1> Preencha e concorra!</h1>
            </div>
            <div class="col ">
                <img src={imgfinal} width="300px" />
            </div>
            <div class="col-12">
                    <h1><b Formulario de inscrição></b></h1>
                        <form onSubmit={handleSubmit(handleOnSubmit)} >
                            <div class="form-group col-md-6 offset-md-3 my-1">
                                <label for="exampleFormControlInput1">Nome</label>
                                <input type="text" class="form-control "id="nome" name="nome" placeholder="Digite seu nome aqui" ref={register}/><br/><br/>
                            </div>   
                            <div class="form-group col-md-6 offset-md-3">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" class="form-control " name="email" id="email" placeholder="nome@exemplo.com"  ref={register}/>
                            </div>
                            <div class="form-group col-md-6 offset-md-3">
                                <label for="exampleFormControlTextarea1">Comentario</label>
                                <textarea class="form-control " name="comentario" id="comentario"  ref={register}></textarea>
                            </div>
                                <button type="submit" class="btn btn-primary col-md-6 offset-md-3 my-3">Enviar</button>
                        </form>
            </div>
        </div>
        <div class="container-fluid">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Comentario</th>
                </tr>
                </thead>
                <tbody>
                {contatos && contatos.map((item) => (
                <tr key={item._id}>
                    <td>{item.nome}</td>
                    <td>{item.comentario}</td>
                </tr>
                ))}
                </tbody>
            </Table>
        </div>

    </div>
    )
}

export default Contato;