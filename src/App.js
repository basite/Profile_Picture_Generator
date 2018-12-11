import React from 'react';
import './App.css';

class App extends React.Component {
    state = { 
      input: '',
      user1 : ''
    }

    muncul = () => {
        this.setState({
            user1: this.state.input
        })
    }

    display() {
        return (
            <img className="rounded-circle bg-white my-3" alt="prop" src={`https://robohash.org/${this.state.user1}.png`} />
        )
    }
    render() {
        return (
            <React.Fragment>
              <center>
                <div className="container text-center p-5"><br/><br/>
                    <input type="text" className="form-control w-25 mx-auto my-3" placeholder="Ketik nama Anda..." 
                    onChange={(e) => {
                       this.setState({
                          input: e.target.value 
                       }) 
                    }}></input><br/>
                    <button type="button" className="btn btn-success" onClick={this.muncul}>Buat Profile Picture!</button>
                    <div className="row">
                    <div className="col-lg-12 text-center">
                    {this.state.user1 && this.display()}
                    </div>
                    </div>
                </div>
              </center>  
            </React.Fragment>
        )
    }
}

export default App;
