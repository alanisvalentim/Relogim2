import React from "react";
import "./botao.css";


class Botao extends React.Component{
    render(){
        return <button className="botao">
            {this.props.conteudo}
        </button>;
    }
}

export default Botao;