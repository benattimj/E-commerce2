import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'

import arrow_icon from '../Assets/arrow.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Novidades chegando!!</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Novidades</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Coleções</p>
                    <p>Para todos</p>

                </div>

                <div className="hero-latest-btn">
              <div> Novas Coleções</div>
                    <img src={arrow_icon} alt ="" />
                </div>
            </div>
            <div className="hero-right">
            </div>
        </div>
    )
}
