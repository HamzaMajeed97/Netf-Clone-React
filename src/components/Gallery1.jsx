import { Component } from "react";
import { Card, Row, Col, Container, } from "react-bootstrap";
import Movie from "./Movie";
import { Carousel } from "react-bootstrap";

class Gallery1 extends Component {
  state = {
    movieslist: [],
  };

  componentDidMount() {
    this.fetchfilm();
  }

  fetchfilm = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9a069d0a&s=harry%20potter"
      );

      if (response.ok) {
        let film = await response.json();
        this.setState({ movieslist: film.Search });
        console.log(this.state.movieslist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2 className="title ml-4">{this.props.title}</h2>
                <Container fluid className='movieslist'>
                    {this.state.movieslist.map((f) => (
                        <Col key={f.imdbID}>
                            <Movie movie={f} />
                        </Col>
                    ))}
                </Container>
      </div>
    );
  }
}

export default Gallery1;
