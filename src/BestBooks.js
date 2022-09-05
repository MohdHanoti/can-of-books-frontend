import React from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import Form from "./Form";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/Books`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addNewBook = (event) => {
    event.preventDefault();
    const infoObj = {
      Title: event.target.formBasicTitle.value,
      Description: event.target.formBasicDescription.value,
      Status: event.target.disabledSelect.value,
    };
    axios
      .post(`http://localhost:3001/addBook`, infoObj)
      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3001/deleteBook/${id}`) // or pass it as query http://localhost:3010/deleteCat?id=${id}
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.Console.log(err);
      });
  };

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <Form addNewBook={this.addNewBook} />

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Row xs={1} md={3} className="g-4">
          {this.state.books.map((item) => {
            return (
              <div class="modal-body">
                <Col>
                  <Card style={{ width: "18rem" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        <p>{item.description}</p>
                        <h5>status: {item.status}</h5>
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => this.deleteBook(item._id)}
                      >
                        Delete this
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </>
    );
  }
}

export default BestBooks;
