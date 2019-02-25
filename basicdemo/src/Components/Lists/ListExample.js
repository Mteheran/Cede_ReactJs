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
        name : '',
        lastname: ''

      };

      this.setLastNameValue = this.setLastNameValue.bind(this)
      this.AddItem = this.AddItem.bind(this)
    }

    componentDidMount()
    {
          this.setState({

            elements : this.state.arrayStudents.map((item) =>
            {
              return <li>{item.name} {item.lastname}</li>
            }
          )
        }, console.log(this.state.elements))
    }

    AddItem(event)
    {
      //let newArray = this.state.arrayStudents
      let newArray = this.state.arrayStudents
      newArray.push({ name: this.state.name, lastname : this.state.lastname })
      this.setState({
            elements : newArray.map((item) =>
            {
              return <li>{item.name} {item.lastname}</li>
            }
        )
        }, this.clearFields
      )
    }

    clearFields = () =>
    {
      document.getElementById('txtName').value = ''
      document.getElementById('txtlastName').value = ''
    }

    setNameValue = (event) =>
    {
      this.setState(
      {
        name: event.target.value,
        lastname : this.state.lastname
      });
    }

    setLastNameValue(event)
    {
      this.setState(
      {
        name: this.state.name,
        lastname: event.target.value
      });

    }


    render(){
      return (
      <div>
        <label>Nombre</label>
        <input id="txtName"  onChange={this.setNameValue} type="text" ></input>
        <label>Apellido</label>
        <input id="txtlastName" onChange={this.setLastNameValue} type="text"></input>
        <button onClick={this.AddItem} >Agregar a la lista</button>
        <ol>{this.state.elements} </ol>
      </div>
      );
    }
}

export default ListExample;