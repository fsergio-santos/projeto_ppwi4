import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import MensagemErro from '../../Components/Mensagem/MensagemErro';
import { createAutor } from '../../Service/AutorService';
import { INIT_AUTOR, validateAutor } from './Autor';
import { useFormAutor } from './useFormAutor';

const Inserir = () => {
    const { onChangeAutor, onAutorSubmit, submitting, autor, errors } = useFormAutor(validateAutor, INIT_AUTOR ); 
    const onAutorSubmitForm = (e) =>{
      onAutorSubmit(e);
      if ( submitting === true ){
           //createAutor(autor);
      }     
    }

    return (
      <Fragment>  
        <div className="container">
         <div className="col-md-offset 4">   
          <PageHeaders 
                tituloPagina="Cadastro de Autores"
                path="/autor/listar"
                tituloPesquisa="Listagem de Autores"
                icon="user-plus"
                toReturn="list"
          /> 
          <GradeSistema>
            <div className="row col-8 mx-auto">
               <form onSubmit={(e) => onAutorSubmitForm(e)}>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Nome:</label>
                         <input type="text"
                                name="nome"
                                id="nome"
                                value={autor.nome}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.nome_valid === true 
                                            ? "form-control is-invalid" 
                                            : "form-control" }/>
                         <MensagemErro 
                                error={errors.nome_valid} 
                                mensagem={errors.nome_mensagem} />                              
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Data Nascimento:</label>
                         <input type="date"
                                name="dataNascimento"
                                id="dataNascimento"
                                value={autor.dataNascimento}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.dataNascimento_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                          <MensagemErro 
                                error={errors.dataNascimento_valid} 
                                mensagem={errors.dataNascimento_mensagem} />                    
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">RG:</label>
                         <input type="text"
                                name="rg" 
                                id="rg"   
                                value={autor.rg}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.rg_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/> 
                           <MensagemErro 
                                error={errors.rg_valid} 
                                mensagem={errors.rg_mensagem} />                      
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">CPF:</label>
                         <input type="text"
                                name="cpf"
                                id="cpf"
                                value={autor.cpf}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.cpf_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/> 

                           <MensagemErro 
                                error={errors.cpf_valid} 
                                mensagem={errors.cpf_mensagem} />                                
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Sexo:</label>
                         <input type="text"
                                name="sexo"
                                id="sexo"
                                value={autor.sexo}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.sexo_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                           <MensagemErro 
                                error={errors.sexo_valid} 
                                mensagem={errors.sexo_mensagem} />                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Endereço:</label>
                         <input type="text"
                                name="endereco"
                                id="endereco"
                                value={autor.endereco}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.endereco_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                           <MensagemErro 
                                error={errors.endereco_valid} 
                                mensagem={errors.endereco_mensagem} />                                 
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                id="bairro" 
                                value={autor.bairro}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.bairro_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                           <MensagemErro 
                                error={errors.bairro_valid} 
                                mensagem={errors.bairro_mensagem} />                                 
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Cidade:</label>
                         <input type="text"
                                name="cidade"
                                id="cidade"
                                value={autor.cidade}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.cidade_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/> 
                          <MensagemErro 
                                error={errors.cidade_valid} 
                                mensagem={errors.cidade_mensagem} />                                 
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">CEP:</label>
                         <input type="text"
                                name="cep"
                                id="cep"
                                value={autor.cep}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.cep_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/> 
                           <MensagemErro 
                                error={errors.cep_valid} 
                                mensagem={errors.cep_mensagem} />                               
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">E-mail:</label>
                         <input type="text"
                                name="email"
                                id="email"
                                value={autor.email}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.email_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                           <MensagemErro 
                                error={errors.email_valid} 
                                mensagem={errors.email_mensagem} />                                  
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Telefone Fixo:</label>
                         <input type="text"
                                name="telefoneFixo"
                                id="telefoneFixo"
                                value={autor.telefoneFixo}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.telefoneFixo_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                           <MensagemErro 
                                error={errors.telefoneFixo_valid} 
                                mensagem={errors.telefoneFixo_mensagem} />                                
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Celular:</label>
                         <input type="text"
                                name="telefoneMovel"
                                id="telefoneMovel"
                                value={autor.telefoneMovel}
                                onChange={(e) => onChangeAutor(e)}
                                className={ errors.telefoneMovel_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                           <MensagemErro 
                                error={errors.telefoneMovel_valid} 
                                mensagem={errors.telefoneMovel_mensagem} />                                 
                       </div>  
                     </div>
                 </div>
                 <input type='hidden' id='id' name='id' value={autor.id}/>
                 <Rodape>
                   <button type="submit"
                           className="btn btn-success  btn-lg"
                           title="Salvar Registro!" >
                      Salvar
                   </button>
                   <Link to="/autor/listar"
                         className="btn btn-secondary btn-lg ml-4" 
                         title="Cancelar a inclusão do registro">
                      Cancelar     
                   </Link>   
                 </Rodape>
               </form>
            </div> 
          </GradeSistema>
        </div>
      </div>
    </Fragment>    
    )
}

export default Inserir
