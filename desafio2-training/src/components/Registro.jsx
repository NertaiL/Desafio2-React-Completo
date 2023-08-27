import React, { useState } from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'

const Registro = ({facebook,git,linkedin}) => {
    const [alerta,setAlerta] = useState({
        error : "",
        mensaje : "",
        color : "",
    })
  return (
    <main>
    <h1 className='tittle'>Crea una cuenta</h1>
    <SocialButton facebookicon={facebook} giticon={git} linkedinicon={linkedin} />
    <h6>O usa tu email para registrarte</h6>
    <Formulario setAlerta={setAlerta} />
    {alerta.mensaje && <Alert color={alerta.color}>{alerta.mensaje}</Alert>}
    {/* {alerta.mensaje && <Alert color={alerta.color} mensaje={alerta.mensaje}/>} */}

    </main>
  )
}

export default Registro