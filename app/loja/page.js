"use client"

import { useState } from "react";

export default function loja(){
    const[ inputusuario, alteraInputusuario] = useState("");
    const[ inputsenha, alteraInputsenha] = useState("");

    const [autenticado, alteraAutenticado] = useState(false);

    const [listaAtiva, alteralistaAtiva] = useState("Camisetas");

    function enviarFormulario(event){
        event.preventDefault();
        if ( inputusuario== "danilo" && inputsenha== "1234"){
            alteraAutenticado(true)
        }
        else{
            alert("Incorreto")
        }
    }
    
    return(
        <div>
            <h1>Bem vindo a LAJA</h1>
            {
                autenticado == false ?
            <div>
                <p>Concect-se para tralalala</p>
                <p>Conectsi para kontenuar</p>

                <form onSubmit={ (event)=> enviarFormulario(event)} >
                    <label>
                        Digite seu Usuario
                        <input onChange={(event)=> alteraInputusuario(event.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Digite sua Senha
                        <input  onChange={(event)=> alteraInputsenha(event.target.value) } type={"Password"}/>
                    </label>
                    <br/>
                    <br/>                
                    <button  >Entrar</button>
                </form>
            </div>
                :
            <div>
                <button onClick={()=> alteraAutenticado(false)} >Dezconektar</button>
                <p>Confira os produtos da louja</p>
                <h2>Menu</h2>
                <ul>
                    <li  onClick={()=> alteralistaAtiva("Camisetas")} >Camisetas</li>
                    <li  onClick={()=> alteralistaAtiva("calças")} >Calças</li>
                </ul>

                {
                listaAtiva == "Camisetas" ?
                <div> 
                    <h2>Camisetas</h2>
                    <ul>
                        <li>Camiseta 1</li>
                        <li>Camiseta 2</li>
                        <li>Camiseta 3</li>
                    </ul>
                </div>
                :
                <div>
                    <h2>Calças</h2>
                    <ul>
                        <li>Calça 1</li>
                        <li>Calça 2</li>
                        <li>Calça 3</li>
                    </ul>
                </div>
                }
            </div>
            }
        </div>
    )
}