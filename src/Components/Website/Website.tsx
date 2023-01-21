import "./Website.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Website = ({websitename} : any) => {
    
    const [visible, setVisible] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(false);

    let firstval = websitename;
    const [firval, firSetVal] = useState<String>(firstval);

    let secondval: string = "https://www." + firstval + ".com";
    const [secval, setSecVal] = useState<String>(secondval);

    //console.log(websitename);

    // const handleClick = (e: any) => {
    //     //e.stopPropagation();
    // }
    
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
        
            <div className="mb" >
                {['start'].map(
                (direction) => (
                    <DropdownButton
                    //onClick={(e) => handleClick(e)}
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
                                        {/* <Form.Control
                                            //placeholder="name@example.com"
                                            autoFocus
                                            onChange={e => setValue(e.target.value)}
                                            value = {websitename}
                                        /> */}
                                        <br />
                                        <input value={firval as any}  name="Name" onChange={e => firSetVal(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>URL</Form.Label>
                                        {/* <Form.Control type="email" as="textarea" rows={1} value="https://www.linkedin.com" /> */}
                                        <br />
                                        <input value={secval as any} name="URL" onChange={e => setSecVal(e.target.value)} />
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
            <a className="tile" aria-label="Linkedin" title="Linkedin" href="https://www.linkedin.com/">
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
  
 


export default Website;