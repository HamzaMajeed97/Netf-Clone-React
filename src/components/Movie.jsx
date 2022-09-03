import {Image} from "react-bootstrap"
import { Component } from "react";

class Movie extends Component {
 


    render() {
        return (
        
              <div >

                <Image src={this.props.movie.Poster}   />
      
              </div>
    
        )
    }
}

export default Movie