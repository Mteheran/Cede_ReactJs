import  React, {Component} from 'react'

class ListExample extends Component
{
    constructor()
    {
      super();
      this.state =
      {
        arrayStudents : [
          {name:"Raul", lastname:"Cruz"},
          {name:"Andres", lastname:"Mora"},
          {name:"Hernan", lastname:"Rojas"},
          {name:"Lorena", lastname:"Arias"},
        ],
        elements : [],
        name : 'Miguel',
        lastname: ''

      };
      this.setNameValue = this.setLastNameValue.bind(this)
      this.setLastNameValue = this.setLastNameValue.bind(this)
      this.AddItem = this.AddItem.bind(this)
    }

    AddItem(event)
    {
      //let newArray = this.state.arrayStudents
      let newArray = this.state.arrayStudents
      newArray.push({ name: this.state.name, lastname : this.state.lastname })
      console.log(newArray)
      this.setState({

        elements : newArray.map((item) =>
        {
          return <li>{item.name} {item.lastname}</li>
        }
        )
      }
      )
    }

    setNameValue(event)
    {

      this.setState(
      {
        name: event.target.value
      });


    }

    setLastNameValue(event)
    {
      this.setState(
      {
        lastname: event.target.value
      });
    }


    render(){
      return (
      <div>
        <label>Nombre</label>
        <input  onChange={this.setNameValue} type="text" ></input>
        <label>Apellido</label>
        <input onChange={this.setLastNameValue} type="text"></input>
        <button onClick={this.AddItem} >Agregar a la lista</button>
        <ol>{this.state.elements} </ol>
      </div>
      );
    }
}

export default ListExample;