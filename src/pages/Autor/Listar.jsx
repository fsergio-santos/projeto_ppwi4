import React, { Fragment } from 'react';
import { GradeSistema } from '../../Components/Content/Style';
import PageHeaders from '../../Components/Header/PageHeaders';

const Listar = () => {
    return(
      <Fragment>  
        <div className="container">
           <div className="col-md-offset 4">   
            <PageHeaders 
                tituloaPagina="Lista de Autores"
                path="/dashbord"
                tituloPesquisa="Página Principal"
                icon="list"
                toReturn="tachometer"
            />
            
            
            <GradeSistema>
                <div>Tabela de autores</div>
                <label>Nome</label>
                <input/>
                <label>Endereco</label>
                <input/>
            </GradeSistema>
            </div> 
        </div>   
      </Fragment>
    )
} 

export default Listar;
