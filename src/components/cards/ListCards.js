
import Cards from "./Cards"
import React, {useEffect, useState} from "react"
import celebridades from '../../helpers/usuarios'
const ListCards = () => {

    //console.log(celebridades[0].picture.large)

    //console.log(celebridades[0].name.last)

    return (
        <div className="container">
            <div className="row">
            { celebridades.map(user => (
                 <div className="col-sm-6 col-md-4 col-lg-3" key={user.login.uuid}>
                    <Cards user={user}/>
                 </div>
            ))}
                
                   
            </div>
        </div>
   
    )
}
export default ListCards