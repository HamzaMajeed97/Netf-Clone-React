import {Image} from "react-bootstrap"
import { Component } from "react";

class Movie extends Component {
 


    render() {
        return (
        
              <div className="movie">
                <Image src={this.props.movie.Poster}  />
            </div>
    
        )
    }
}

export default Movie