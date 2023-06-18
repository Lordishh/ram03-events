import React, { useState } from 'react'

export const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    username: 'Pepe',
    email: 'pepe@gmail.com',
    password: '123123'
  });

  const { username, email, password} = formValue;

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    console.log('Funciona!');
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormValue({
      ...formValue,
      [ name ] : value
    })
  };

  return (
    <div>
      <h1>Cree una cuenta de usuario</h1>
      <hr />
      <form onSubmit={ onFormSubmit }>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="username"
            value={ username }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            name="email"
            value={ email }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}
