import  React, {Component} from 'react'
import Menu from './Menu'

function Title(props)
{
  if (props.bigtitle=="false") {
    return   <h4>Mi aplicacion</h4>;
  }
  else{
    return   <h1>Mi aplicacion</h1>;
  }
}


class Header extends Component
{
  constructor(props)
  {
    super();
    this.state =
    {
      bigtitle : props.bigtitle
    };
  }

    render(){
      return (
      <div>
          <header>
            <Title bigtitle={this.state.bigtitle} font='Arial' />
            <Menu />
          </header>
        </div>
      );
    }
}

export default Header;