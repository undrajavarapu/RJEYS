import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./Submenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

const Side = (props) => {
   //const [sidebar,Setsidebar] =useState(false)
   //const [toggle,Settoggle]=useState()
//const toggle=()=>Setsidebar(!props.isOpen);
//let user=useContext(UserContext)

const home=()=>{
  localStorage.removeItem('token')
  window.location='/'
}

  return (
   
     <div className={classNames("sidebar", { "is-open": props.isOpen })}>
         <div className="sidebar-header">
          <Button
            variant="link"
            onClick={props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>react-bootstrap sidebar</h3>
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">Heading</p>

          <Nav.Item className="active">
            <Nav.Link href="/dashboard">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>

          <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          />
          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/timesheet">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              Timesheets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={()=>
          //event.preventDefault().
          //localStorage.removeItem('token')
          
          home()
          }>
            <Nav.Link href="">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" 
          />
            signout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    
  )
}

export default Side