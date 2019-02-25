import  React, {Component} from 'react'

function AdditionalMenu()
{
  return <li>Ayuda</li>
}

class Menu extends Component
{
    render(){
      return (
      <div>
          <ul>
            <li>Archivo</li>
            <li>Herramientas</li>
            <li>Opciones</li>
            <AdditionalMenu />
          </ul>
        </div>
      );
    }
}

export default Menu;