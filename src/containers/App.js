import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './app.css';
// import {robots} from '../components/robot';
// import searchbox from '../components/Searchbox';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchbox: ''
        }
    }

    onsearchchange=(event)=>{
        this.setState({searchbox: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{return Response.json();})
        .then(users => this.setState({robots: users}));
        
    }

    render(){
        const filterrobot = this.state.robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchbox.toLocaleLowerCase())
        })
        
        return( 
            <div className='tc'>
                <h1>ROBOTS PAGE</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Scroll>
                    <Cardlist robots={filterrobot} />
                </Scroll>
            </div>
        );
    }
};

export default App;