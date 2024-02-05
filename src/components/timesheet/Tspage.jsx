import React, { useContext, useState } from 'react'
import Side from '../sidebar/Side'
import UserContext from '../../context/userContext'
import classNames from 'classnames';
import { Container } from 'reactstrap';
import Navib from '../content/Navib';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AsyncSelect from 'react-select/async';

function Tspage(props) {
  
    let user=useContext(UserContext)
    // let data=isopen;
   const[isopen,Setopen]=useState(true)
   const toggle=()=>{
     Setopen(!isopen)
   }
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
     return (
      
       <div className= 'App Wrapper' >
         <Side  toggle={toggle} isOpen={isopen} ></Side> 
         <Container fluid className={classNames("content", { "is-open": props.isOpen })}>
         <Navib toggle={toggle}  /> 
         <h1>Hello</h1>
         <button className="btn btn-light"  onClick={handleShow}>Add Timecards</button>
         <div>
<Modal show={show} onHide={handleClose} className="position-absolute bottom-0 end-0">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
</div>
         </Container>

    </div>
  )
}

export default Tspage