import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "../firebaseconfig";
//importo auth para el servicio de autenticacion y el metodo de crear usuarios y logeo de usuarios
import {useNavigate} from 'react-router-dom'
//importamos useNavigate para poder redireccionar

function Login() {
  //creo un estado para el email y la contraseña ingresada en los input
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [msgerror, setMsgerror] = useState(null);
  const navigate =useNavigate();
  //almacenamos el metodo useNavigate en una variable

  //registrar usuario
  const RegistrarUsuario = (e) => {
    //creo RegistrarUsuario que recibe el evento de clickear en el boton submit, ese evento le agrego un preventdefault para que no se actualice la pagina
    e.preventDefault();
    //utilizo el metodo de firebase para crear user con email y password indicando por parametro 'auth', la variable 'email, y 'pass'. DEVUELVE UNA PROMESA
    createUserWithEmailAndPassword(auth, email, pass)
      //then espera a que se ejecute createuser, si se ejecuta correctamente se muestra un alert y se ponen los valores de los input en blanco, si se detecta un error pasa directamente al catch
      .then((r) => {
        alert("Usuario creado correctamente")
        navigate('/')
      })
      .then(setEmail(""))
      .then(setPass(""))
      .then(setMsgerror(null))
      .catch((e) => {
        //auth/invalid-email
        //auth/weak-password
        console.log(e.code);
        if (e.code === "auth/invalid-email") {
          setMsgerror("Formato de email incorrecto");
        }
        if (e.code === "auth/weak-password") {
          setMsgerror("La contraseña debe tener 6 carácteres como mínimo");
          setEmail("");
          setPass("");
        }
      });
  };

  //comprobar el logeo de un usuario
  const LoginUsuario = () => {
    //uso la funcion de signin que importamos anteriormente y le indico por parametros auth, email y pass. DEVUELVE UNA PROMESA
    signInWithEmailAndPassword(auth,email, pass)
      //dentro del then recibimos la respuesta
      .then((r) => {
        alert("Usuario logeado correctamente")
        navigate('/')
      })
      //en caso de que la respuesta de negativo usamos el catch
      .catch((r) => {
        //auth/wrong-password
        if(r.code ==='auth/wrong-password'){
          setMsgerror('Contraseña o mail incorrectos')
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <input
            //la propiedad onchange ejecuta una arrow function que recibe el evento y a partir de ese evento setea el email con su value
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            placeholder="Introduce tu email"
            className="form-control"
          />

          <input
            onChange={(ev) => setPass(ev.target.value)}
            type="password"
            placeholder="Introduce tu contraseña"
            className="form-control mt-2"
          />

          <input
            style={{ width: "100%" }}
            type="submit"
            value="Crear cuenta"
            className="btn btn-dark btn-block mt-2"
          />
        </form>
        <button
          onClick={LoginUsuario}
          style={{ width: "100%" }}
          className="btn btn-success btn-block mt-2"
        >
          Iniciar sesión
        </button>
        {
          //pregunta si msgerror devuelve true
          msgerror != null ? (
            //true
            <div style={{ color: "red" }}>{msgerror}</div>
          ) : (
            //false
            <span></span>
          )
        }
      </div>
      <div className="col"></div>
    </div>
  );
}

export default Login;
