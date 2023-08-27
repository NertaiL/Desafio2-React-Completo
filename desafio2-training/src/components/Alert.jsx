import Badge from 'react-bootstrap/Badge';
const Alert = ({color,children}) => {
  console.log("color",color)
  return (
    <>
    

    <Badge bg={color}><h6>{children}</h6></Badge>
    </>
  )
}

export default Alert






// const Alert = ({color,mensaje}) =>{
  //return(
    //<>
    //<Badge bg={color}>{mensaje}</Badge>
    //<Badge bg={color} text={mensaje}></Badge>
  //)
//}