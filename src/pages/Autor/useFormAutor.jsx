import { useState, useEffect} from "react";


export const useFormAutor = ( validateAutor, author) => {

    const [autor, setAutor] = useState(author);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    useEffect(()=>{
        setAutor(autor)
    },[autor])

    const onChangeAutor = ( e ) => {
        
        const { name, value } = e.target;
        console.log(" passando pela digitação "+value);
        setAutor({ ...autor, [name]:value})
    }

    const onAutorSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateAutor(autor))
    }


    useEffect(()=>{
        if (Object.keys(errors).length === 0){
            setSubmitting(true);
        }
    }, [errors])

    return {
        onChangeAutor,
        onAutorSubmit,
        submitting,
        autor,
        errors,
    };
}