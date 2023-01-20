import "./Linkedin.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

// function Linkedin() {
//     return (
       
//             <a className="tile" aria-label="Linkedin" title="Linkedin" >
//                 <button id="actionMenuButton" className="icon-more-vert" tabIndex={0} title="More actions" 
//                 aria-disabled="false" role="button">                    
//                     <div id="icon">
//                         <div id="maskedImage"></div>
//                     </div>
//                 </button>
//                 <div className="tile-icon">
//                     <img draggable="false" src="/linkedin.png" />
//                     <div className="query-tile-icon" draggable="false" hidden></div>
//                 </div>
//                 <div className="tile-title title-ltr">
//                     <span>Linkedin</span>
//                 </div>
//             </a>
        
//     );
// }

function Linkedin() {
    
    const [visible, setVisible] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(false);

    const handleClick = (e: any) => {
        //e.stopPropagation();
        console.log("TOM he");
    }
    
    const handleRemove = () => {
        setVisible(false);
    }

    const handleShow = () => {
        setShow(true);
        //console.log(show);
    }
    
    const handleClose = () => {
        setShow(false);
    }

    return (
        (visible === true) ? (
        <div className="aaa" >
        
            <div className="mb-2" >
                {['start'].map(
                (direction) => (
                    <DropdownButton
                    onClick={(e) => handleClick(e)}
                    // as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction as any}
                    variant="secondary"
                    title={""}
                    >
                        <Dropdown.Item eventKey="1" onClick={() => handleShow()}>Edit shortcut</Dropdown.Item>
                        
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
                        
                        <br />
                        <Dropdown.Item eventKey="2" onClick={() => handleRemove()}>Remove</Dropdown.Item>
                    </DropdownButton>
                ),
                )}
            </div>
            <a className="tile" aria-label="Linkedin" title="Linkedin" href="#">
                <div className="tile-icon">
                <img draggable="false" src="/linkedin.png" />
                <div className="query-tile-icon" draggable="false" hidden></div>
                </div>
                <div className="tile-title title-ltr">
                    <span>Linkedin</span>
                </div>
            </a>
            
        </div>
        ) : (
        <>
        </>
        )
    );
}
  
 


export default Linkedin;