import {useState} from "react" //Controla el estado
const Navbar = () =>{
    const [user, setUser] = useState(null)
    const login = () => {
      setUser({id : 1, nombre: " vgarcesp"})
    }
    const logout= () =>{
      setUser(null)
    }

    return(
      <nav className="navbar navbar-light bg-success bg-gradient">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 fs-4 text-white">User:{user ? user.nombre : " Usuario No Autentificado"}</span>
          {user 
          ? ( <button 
                type="button" 
                className="btn btn-outline-light"
                onClick={logout}  
                >Cerrar Sesión
              </button>)  
            : (<button 
                type="button" 
                className="btn btn-outline-light"
                onClick={login}  
                >Iniciar Sesión
              </button>)
          }
        </div>
      </nav>
    )
}
export default Navbar
