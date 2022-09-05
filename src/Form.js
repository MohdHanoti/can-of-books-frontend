import React from "react";
import { Button, Form } from "react-bootstrap";

class form extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.addNewBook}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select the book status:</Form.Label>
            <Form.Select id="disabledSelect">
              <option>Unknown</option>
              <option>Finished</option>
              <option>Not Finished</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </>
    );
  }
}
export default form;
