import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
const FormHook=()=>{
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) =>{ 
        console.log(data)
        e.target.reset()
    };
    console.log(watch("example"));
    return(
        <Fragment>
            <h1>Formulario</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input 
            className="form-control my-2"
            {...register("titulo", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.titulo && <span className="text-danger text-small d-block mb-2">titulo requerido</span>}
            
            <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>

        </Fragment>
    );
}
export default FormHook;