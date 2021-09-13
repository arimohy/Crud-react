import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
    
    

const AddUserForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) =>{ 
        //console.log(data)
        props.addUser(data)
        e.target.reset()
    };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name", { required: true })}/>
      {errors.name && <span className="text-danger text-small d-block mb-2">Nombre requerido</span>}
      <label>Username</label>
      <input type="text" {...register("username", { required: true })}/>
      {errors.username && <span className="text-danger text-small d-block mb-2">Username requerido</span>}
      <button>Add new user</button>
    </form>
  )
}
export default AddUserForm;