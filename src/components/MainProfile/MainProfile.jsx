import React from "react";
import style from './MainProfile.module.css'

function MainProfile() {
    return (
        <section className={style.cardColumn}>
        <div className={style.card1}>
            <p>Foto</p>
            <p>Email</p>
            <p>Localização??</p>
        </div>

        <div className={style.card2}>
            <h5>Quem sou eu na FC</h5>
            <p>Cargo</p>
            <p>Senioridade</p>
        </div>

    </section >
    )
   
  
}

export default MainProfile