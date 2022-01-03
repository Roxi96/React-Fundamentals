import ReactDom from "react-dom"


// const name= 'Roxana Nazaret';
const user1={
  name: 'Mayra Burgos',
  age: 63,
  country: 'Honduras'
}
// const App= <h1>Hola mi nombre es {user1.name}, y mi edad x2 es {user1.age *2} y soy de {user1.country}.</h1>
function getInfo(user){
  return `Hola mi nombre es ${user.name} y soy de ${user.country}`
}

const App= <h1>{getInfo(user1)}</h1>




ReactDom.render(App, document.getElementById('root'))