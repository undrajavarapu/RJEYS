import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import Homepage from '../Homepage';
import Navib from './Navib';
import Side from '../sidebar/Side';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import Donut from './donut';
import Tspage from '../timesheet/Tspage';


function Content(props) {

  //console.log(props)
  //
  
  const [usercount,setUsercount]=useState()
  console.log(usercount)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      axios
  .get("http://localhost:8080/api/usercount", {
    responseType: "json",
  })
  .then(function (response) {
    console.log(response.data);
    setUsercount(response.data.usercount);
  });
    }
    //const res=axios.get('')
    

     // Sets isLoggedIn to true if token exists, false otherwise
    
  }, [usercount]);

  const handleCount=()=>alert("Hiii")
  const flag2 = props.isOpen

  const flag3=(flag2.toString());
  // <h1 >dani:{flag3}</h1>

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <Container fluid className={classNames("content", { "is-open": props.isOpen })}>
      
       <Navib toggle={props.toggle}  /> 
       {/* <Side  toggle={props.toggle}  isOpen  className={classNames("sidebar", { "is-open": props.isOpen })}> </Side> */}

       <div className="card-group">
{/* card1 */}
       <div className="card text-white bg-primary mb-3 ml-3"  onClick={handleShow}>
  <div className="card-header">No of Users</div>
  <div className="card-body">
    <h5 className="card-title">Employees</h5>
    <p className="card-text center">{usercount}</p>
  </div>
  

</div>

{/* card2 */}
<div className="card text-white bg-danger mb-3 ml-3" >
  <div className="card-header">Productivity</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{/* card3 */}

<div className="card text-white bg-warning mb-3 ml-3" >
  <div className="card-header">Leaves Remaining</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{/* card4 */}

<div className="card text-white bg-info mb-3 ml-3" >
  <div className="card-header">Certifications</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className="position-relative">
<Modal show={show} onHide={handleClose} className="position-absolute bottom-0 end-0">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Hello
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

<><Donut></Donut></>

</div>
    </Container>
  )
}

export default Content