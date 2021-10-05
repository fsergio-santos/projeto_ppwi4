
import banco from "../Config/Banco";

export const findAllAutor = async ( tamanhoPagina, paginaAtual ) => {
    return (
        banco({
            method:'GET',
            url:'/autor/listar',
            params:{
              tamanhoPagina,
              paginaAtual,
            },
        }).then( (resposta) => {
            return resposta.data
        }).catch( ( errors ) => {
            return errors.response
        })
    )
}