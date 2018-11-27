import React from "react";
import "./caixa.css";
import Timer from "../timer/timer"
import Botao from "../botao/botao"

class Caixa extends React.Component{
    render(){
        return <section className="Caixa">
            <div class="main">
                <Timer minuto="03" segundo="50" />

                <div class="buttons">
                    <Botao conteudo="+"/>
                    <Botao conteudo="-"/>
                </div>
            </div>
    
            <div class="buttons">
                <Botao conteudo="Iniciar"/>
                <Botao conteudo="Parar"/>
            </div>
        </section>
      }
}

export default Caixa;