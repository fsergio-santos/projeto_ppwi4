import React,  { Fragment, useState, useEffect } from "react";
import { GradeSistema } from "../../Components/Content/Style";
import { Button, Modal } from "react-bootstrap";
import SelectNumberPage from "../../Components/Table/SelectNumberPages";
import SearchDataByName from '../../Components/Table/SearchDataByName';
import { findAllLivros } from "../../Service/LivroService";

const ShowLivros = ({showModal, dadosLivroCadastrados, onShowModal, onChangeChecked, operacao }) => {
    const [tamanhoPagina, setTamanhoPagina] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [totalPagina, setTotalPagina] = useState(0)
    const [nome, setNome] = useState("");
    const [dadosLivros, setDadosLivros ] = useState([{}]);
    const [atributo, setAtributo] = useState("id");
    const [dir, setDir] = useState("asc");

    useEffect(() => {
        async function loadLivros() {
            const livros=[];
            const dados = await findAllLivros(paginaAtual, tamanhoPagina, atributo, dir );
            setPaginaAtual(dados.pageable.pageNumber);
            setTotalPagina(dados.totalPages);
            
            for (let i = 0; i < dados.content.length; i++ ){
                livros.push({
                    id:dados.content[i].id,
                    tituloLivro: dados.content[i].tituloLivro,
                    check:false,
                })
            } 
            if (dadosLivroCadastrados){ 
                for (let i = 0; livros.length; i++ ){
                    for ( let j = 0; j < dadosLivroCadastrados.length; j++ ){
                        if (livros[i].id === dadosLivroCadastrados[j].id){
                            livros[i].check = true;
                        }
                    }   
                }
            }
            setDadosLivros(livros); 
        }
        loadLivros();
    }, [ paginaAtual, tamanhoPagina, atributo, dir  ]);


    //const changePage = (pagina) => {
    //    setPaginaAtual(pagina - 1);
    //} 
      
    const changePageSize = ( tamanho ) =>{
        setTamanhoPagina(tamanho);
    }
    
    const onCloseModal = (e) => {
        onShowModal();
    }

    const onChangeNome=(e)=>{
      setNome(e.target.value)
    }

    const onChangeCheckedLivro = (e) => {
        onChangeChecked(e);
        const listaLivros = [...dadosLivros];
        let index = listaLivros.findIndex((l)=>l.id == e.target.value);
        listaLivros[index].check = !listaLivros[index].check;
        setDadosLivros(listaLivros);
    }

    return(
        <Fragment>
            <div className="container pt-5">
                <GradeSistema>
                    <div className="row col-8 mx-auto">
                        <Modal show={showModal}
                               size="lg"
                               aria-labelledby="contained-modal-title-vcenter"
                               centered>
                            <Modal.Header>
                                <Modal.Title>Listagem de Livros</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                               <div className="row"> 
                                    <div className="row">
                                            <div className="col-md-6">
                                                <SelectNumberPage 
                                                    tamanhoPagina={tamanhoPagina}
                                                    changePageSize={(tamanho)=> changePageSize(tamanho)} />
                                            </div>       
                                            <div className="col-md-6">
                                                <SearchDataByName
                                                    onChangeNome={(e)=>onChangeNome(e)}
                                                    />
                                            </div> 
                                    </div> 
                                    <table id="tabela" className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr className="p-3 bg-success text-white">
                                                <th className="text-center">
                                                    Id                                  
                                                </th>
                                                <th className="text-center">
                                                    Titulo
                                                </th>
                                                <td className="text-center">Ações</td>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            { dadosLivros && dadosLivros.map(( livro ) => (
                                                <tr key={livro.id}>
                                                    <td className="text-center">{livro.id}</td>
                                                    <td>{livro.tituloLivro}</td>
                                                    <td className="text-center">
                                                       <input type="checkBox"
                                                              checked={livro.check}
                                                              value={livro.id}
                                                              onChange={
                                                                  operacao === false ? (e) => onChangeCheckedLivro(e) : null
                                                              }  />

                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table> 
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={(e) => onCloseModal(e)}>Fechar</Button>
                                <Button variant="primary">Salvar</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </GradeSistema> 
            </div>
        </Fragment>
    ) 

}

export default ShowLivros;