import Cards from "./Cards"
import React, {children, useEffect, useState} from 'react'
//import celebridades from '../../helpers/usuarios'

const ListCards = () => {
    const [celebridades, setcelebridades] = useState([])
    const [error, seterror] = useState(false)
    useEffect(() => {
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/?results=50")
                const data = await res.json()
                setcelebridades(data.results)
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
        getUsuarios()
    }, [])
//console.log(celebridades[0].name.last)
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error a cargar el api Users! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return (
        <div>        
            <div className="container">
                <div className="row">
                {celebridades.map(user =>(    
                    <div className="col-sm-6 col-md-4 col-lg-3" key={user.login.uuid}>
                        <Cards user={user}/>
                    </div>
                ))}           
                </div>
            </div>
        </div>
    )
}

export default ListCards;