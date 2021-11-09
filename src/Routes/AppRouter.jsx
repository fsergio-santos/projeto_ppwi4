import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import AlterarAutor from '../pages/Autor/Alterar';
import ConsultarAutor from '../pages/Autor/Consultar';
import ExcluirAutor from '../pages/Autor/Excluir';
import InserirAutor from '../pages/Autor/Inserir';
import ListarAutor from "../pages/Autor/Listar";
import Dashboard from '../pages/Dashboard/Dashboard';


const AppRouter = () => {
    return (
       <Layout>
           <Switch>
               <Route path="/dashboard" exact component={Dashboard}/>
               <Route path="/autor/listar" component={ListarAutor}/>
               <Route path="/autor/inserir" component={InserirAutor}/>
               <Route path="/autor/alterar/:id" component={AlterarAutor}/>
               <Route path="/autor/excluir/:id" component={ExcluirAutor}/>
               <Route path="/autor/consultar/:id" component={ConsultarAutor}/>
           </Switch>
       </Layout>
    )
}

export default AppRouter
