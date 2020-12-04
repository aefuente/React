import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            color: false,
        };
    }

    render(){
        return (
            <button className="square"  onClick={() => this.setState({color: true})}>
                {this.props.value}
            </button>
        )
    }

}
class Start extends React.Component{
    render(){
        return(
            <button className="button-start" onClick={() => alert('click')}>
                {'Start'}
            </button>
        )
    }
}

class Board extends React.Component{

    renderSquare(i){
        return <Square value={i} />
    }

    render(){
        var rows = [[]];
        for (let i = 0; i < 50; i++){
            rows.push(<div className="row-div"></div>);
            for (let k = 0; k < 100; k++){
                rows.push(<Square></Square>)

            }
        }
        return(
            <div className="board">
                {rows}
            </div>
        );
    }
}


class App extends React.Component {
    render(){
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Start></Start>
                <Board> </Board>
            </div>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



