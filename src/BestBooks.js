import React from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import Form from "./Form";
import UpdateForm from "./UpdateForm";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      updateFlag:false,
      currentBook:{},
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      //.get(`http://localhost:3001/Books`)
      .get(`https://can-of-books123.herokuapp.com/Books`)
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
        //.post(`http://localhost:3001/addBook`,infoObj)
      .post(`https://can-of-books123.herokuapp.com/addBook`, infoObj)
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
        //.delete(`http://localhost:3001/deleteBook/${id}`)
      .delete(`https://can-of-books123.herokuapp.com/deleteBook/${id}`) // or pass it as query http://localhost:3010/deleteCat?id=${id}
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.Console.log(err);
      });
  };
  updateFunction=(item)=>{
    this.setState({
      updateFlag:true,
      currentBook:item,

    })
  }
  handleClose=()=>{
    this.setState({
      updateFlag:false
    })
  }
  updateHandler=(event)=>{
    
    event.preventDefault();
    const infoObj = {
      Title: event.target.formBasicTitle.value,
      Description: event.target.formBasicDescription.value,
      Status: event.target.disabledSelect.value,
    };
    const id=this.state.currentBook._id;
    console.log(id)
    axios
    //.put(`http://localhost:3001/updateBook/${id}`,infoObj)
    .put(`https://can-of-books123.herokuapp.com/updateBook/${id}`,infoObj)
    .then(result=>{
      this.setState({
        books:result.data,
        updateFlag:false
      })
      console.log(result.data);

    })
    .catch(err=>{
      console.log(err);
    })
    
  }

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
      
        <Form addNewBook={this.addNewBook} />
        <UpdateForm show={this.state.updateFlag}
        handleClose={this.handleClose}
        updateHandler={this.updateHandler}
        currentBook={this.state.currentBook}
        />
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
                      <Button
                        variant="primary" onClick={()=> this.updateFunction(item)}>
                          update
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
