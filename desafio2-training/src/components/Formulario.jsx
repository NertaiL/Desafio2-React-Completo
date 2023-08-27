import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



const Formulario = ({setAlerta}) => {
    const [formu,setFormu] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
    })

    


const validacionesFormu = (e) =>{
    e.preventDefault();
    const {name,email,password,confirmpassword} = formu

    // expresion regular
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const esEmailValido = regexEmail.test(email);

    const validarInputs = !name || !email || !password || !confirmpassword
const validarPassword = password !== confirmpassword
    
    validarInputs ? setAlerta({
        error : true,
        mensaje : 'Completas los campos requeridos',
        color : 'danger',
    })
    : setAlerta({
        error : false,
        mensaje : 'Cuenta creada exitosamente',
        color : 'primary',
    })

    if (!esEmailValido) {
        setAlerta({
            error: true,
            mensaje: 'Formato de correo electrónico inválido',
            color: 'warning',
        });
        return;
    }


    if(validarPassword){
        setAlerta({
            error : true,
            mensaje : 'Las contraseña no coninciden',
            color : 'danger',
    })
    return
    }
    setFormu({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
    })
}

const cambioestado = (e) =>{
    
    setFormu({...formu , [e.target.name] : e.target.value})
}

  return (
    <>
    <form className='formu' onSubmit={validacionesFormu}>
        <div className="form-group mb-3">
        <Form.Control  type="text" placeholder="Nombre" name="name" onChange={cambioestado} value={formu.name} />
        </div>
        <div className="form-group mb-3">
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" name="email" onChange={cambioestado} value={formu.email} />
        </div>
        <div className="form-group mb-3">
        <Form.Control type="password" placeholder="Contraseña" name="password" onChange={cambioestado} value={formu.password} />
        </div>
        <div className="form-group mb-3">
        <Form.Control type="password" placeholder="Confirmatucontraseña" name="confirmpassword" onChange={cambioestado} value={formu.confirmpassword} />
        </div>
        <Button type='submit' variant="success" >Registrarse</Button>
    </form>
    </>
  )
}

export default Formulario