import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
    
    

const EditUserForm = (props) => {
    const { register, handleSubmit, formState: { errors } ,setValue} = useForm({
        defaultValues:props.currentUser
    });
    setValue('name',props.currentUser.name);
    setValue('username',props.currentUser.username);
    const onSubmit = (data,e) =>{ 
        //console.log(data)
        data.id=props.currentUser.id
        props.updateUser(props.currentUser.id,data)
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
      <button>Edit user</button>
    </form>
  )
}
export default EditUserForm;