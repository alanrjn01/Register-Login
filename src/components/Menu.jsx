import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth,onAuthStateChanged, signOut} from '../firebaseconfig'

function Menu() {
  const [usuario, setUsuario] = useState(null);
  const navigate =useNavigate();
  const [admin,setAdmin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      
      //onAuthStateChanged devuelve un usuario que devuelve una variable user
      if (user) {
        //si comprueba el onAuthStateChanged que existe un usuario va a setear el email del usuario en el estado "usuario"
        setUsuario(user.email);
        console.log(user.email);
      }
      if(user.email ==='cat123@gmail.com'){
          setAdmin(true);
          console.log(admin)
        }else{
          (<span></span>)
        }
        
    });
  }, []);

  //CerrarSesion usa el metodo signouth y se le pasa por parametro "auth"
  const CerrarSesion = () => {
    //signOut DEVUELVE UNA CALLBACK despues de cerrar la sesión y posteriormente con un then seteamos el usuario en nulo
    signOut(auth)
      .then(() => {
        setUsuario(null);
        setAdmin(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul>
          <li className="nav-item" style={{ display: "inline-block" }}>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item" style={{ display: "inline-block" }}>
            {usuario ? 
          (
          //si el usuario existe y esta logeado se oculta el boton de LOGIN con un span
          <span></span>
          ) 
          : 
          (
          //si el usuario no esta logeado se muestra el boton LOGIN
          <Link className="nav-link" to="/login">
              Login
          </Link>
          )}
          </li>
          <li className="nav-item" style={{ display: "inline-block" }}>
          {admin ?
          (
          <Link className="nav-link" to="/admin">
          Admin
          </Link>
          )
          :
          (
          <span></span>
          )}
          </li>
        </ul>
        {usuario ? 
        (//si el usuario existe se muestra el boton cerrar sesion
          //boton onclick cierra la sesion
          <button onClick={CerrarSesion} className="btn btn-danger m-3">Cerrar sesión</button>
        ) 
        : 
        (//si el usuario no existe se muestra un span vacío
          <span></span>
        )}
      </nav>
    </div>
  );
}

export default Menu;
