import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      fruits: []
     
    };
    //this.onKeyUp=this.onKeyUp.bind(this);
  }
  onKeyUp(e) {
    if (e.key === 'Enter') {
      //this.setState({ message:event.target.message });
      var fruits = this.state.fruits;
      const[fruit,qty]=this.state.message.split('-');
      console.log(fruit);
      console.log(qty);
          fruits.push(fruit,qty);
    }
}
  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
  
    var fruits = this.state.fruits;

   
const[fruit,qty]=this.state.message.split('-');
console.log(fruit);
console.log(qty);

    fruits.push(fruit,qty);
    
  
    this.setState({
      fruits: fruits,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var fruits = this.state.fruits;
    
    fruits[i]  = event.target.value;

    this.setState({
      fruits: fruits
     
    });
  }

  handleItemDeleted(i) {
    var fruits = this.state.fruits;

    fruits.splice(i, 1);
    
    this.setState({
      fruits: fruits
    });
  }

  

  render() {
    return (
      <div>
        
        
        <input
          type="text" value={this.state.message}
          onChange={this.updateMessage.bind(this)}
          
        />
        <button
          onClick={this.handleClick.bind(this)}
        >
          Submit
        </button>
        <table>
        
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
  
  renderRows() {
    var context = this;
    return  this.state.fruits.map(function(fruit,i) {
              return (
                <tr key={i}>
                  <td>
                  {fruit}
                  
                    {context.handleItemChanged.bind(context, i)}
                  </td>
                  
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }
}
   export default App;


   







   
