import { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Movie from "./Movie";
import { Carousel } from "react-bootstrap";


class Gallery1 extends Component {

state = {

   movieslist: [],

}


componentDidMount(){
    this.fetchfilm()
}

fetchfilm = async () => {
    try {
        let response = await fetch('http://www.omdbapi.com/?apikey=2061f937&s=harry%20potter')
    

if(response.ok){
    let film = await response.json()
    this.setState({movieslist: film})
    console.log(this.state.movieslist)
}


    } catch (error) {
        console.log(error)
    }
}






    render() {
        return (
            <div >
          
            
        </div>
        )
    }





}




export default Gallery1