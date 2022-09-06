import React from "react";
import {Button,Modal,Form} from 'react-bootstrap';

class UpdateForm extends React.Component{
    render(){
        return(
            <>
            <Modal show={this.props.show} onHide={this.props.handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form onSubmit={this.props.updateHandler}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" defaultValue={this.props.currentBook.title} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" defaultValue={this.props.currentBook.description} />
      </Form.Group>
      <Form.Group className="mb-3">
            <Form.Label>Select the book status:</Form.Label>
            <Form.Select id="disabledSelect" defaultValue="selected">
              <option
              >Unknown</option>
              <option>Finished</option>
              <option>Not Finished</option>
            </Form.Select>
          </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Modal.Body>

      
    </Modal>     
            </>
        )
    }
}
export default UpdateForm;