import React, { useState } from 'react'
import './Navbar.css'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import logo from '../Assets/tologo.png'

import cart_icon from '../Assets/cart_icon.png'


export const Navbar = () => {

  const [menu, setMenu] = useState("comprar")
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
        <p>Golt Store Imports</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("comprar") }}><Link to='/'>Inicial</Link>{menu === "comprar" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("homen") }}><Link to='/homen'>Homen</Link>{menu === "homen" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mulher") }}><Link to='/mulher'>Mulher</Link>{menu === "mulher" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("crianças") }}><Link to='/criança'>Crianças</Link>{menu === "crianças" ? <hr /> : <></>}</li>
      </ul>

      <div className="nav-login-cart">
        <button onClick={() => setModalIsOpen(true)}>Login</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          }}
        >
          <h2 style={{ marginLeft: '60px' }}>Login</h2>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginLeft: '5px',
            marginTop: '5px'
          }} >

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Logar</button>
            <button>Cadastrar</button>
          </form>
          <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '20px', marginLeft: '60px' }}>Fechar</button>
        </Modal>

        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-card-count">0</div>
      </div>
    </div>
  )
}
