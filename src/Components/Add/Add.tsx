import "./Add.css";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Add() {
    
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () => {
        setShow(true);
    }
    
    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="aaa" >
            <div className="tile-icon">
                <div id="element1"><button onClick={handleShow}><img draggable="false" alt="+" src="/plus.png" /></button></div>
                {/* <div className="query-tile-icon" draggable="false" hidden></div> */}
                {/* <div id="element2">Add</div> */}
                
                
            </div>
            {/* <div className="tile-title title-ltr">
                <span>Add shortcut</span>
            </div> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit shortcut</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                //placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="email" as="textarea" rows={1} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>  
        </div>
        
    );
}
  
 


export default Add;