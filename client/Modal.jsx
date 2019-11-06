import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { StoreContext } from './Store.jsx';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'

const CenteredModal = (props) => {
  const [Store, setStore] = useContext(StoreContext);
  const [icon, setIcon] = useState(true);

  const addFav = (id) => {
    const job_ID = id;
    setStore({
      ...Store,
      job_ID
    })
    console.log(Store)
  }
  const changeIcon = () => {
    const bool = icon
    setIcon(!bool);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
        <Button onClick={()=> {
          addFav(props.id) 
          changeIcon()
        }}
          variant='none'
          id="favoriteButton">
            { icon ? <IoIosStarOutline id="star"/> : <IoIosStar id="star"/>}
        </Button>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.company}</h4>
        <h6>{props.location}</h6>
        <p>We are CoreLogic - a leading provider of business information, analytics and outsourcing services. Together, we are a global company with proven experts in the areas where we work and are passionate about helping our clients succeed. More than one million users rely on CoreLogic to assess risk, support underwriting, investment and marketing decisions, prevent fraud, and improve business performance in their daily operations. No one else has such a vast repository of data, an advanced set of analytical models and a talented, diverse team of professionals.</p>
        <p>We have the opportunity to drive innovation, cultivate insights and build unique solutions for our clients. We take pride in our workforce and believe in cultivating an atmosphere that supports and values our greatest asset: talent.</p>
        <p>The Applications Developer Senior is a core contributor to the development of new products and maintenance of existing products.</p>
        <p>Essential Functions/Responsibilities</p>

<p>Devise/modify procedures to solve problems considering computer equipment capacity and limitations, operating time, and desired results.
Design, code, test, debug, and document those programs.
Prepare detailed specifications from which programs will be written, designed, coded, tested and debugged.
Consult with users and develop business relationships and integrate activities with other IT departments to ensure successful implementation.
May lead small projects or regularly coach other team members to ensure business application systems are developed in a way that complies with architectural standards and established methodologies and practices.
Monitor and report to management on the status of project efforts, anticipating/identifying issues that inhibit the attainment of project goals and implementing corrective actions.
Foster and maintain good relationships with customers and IT colleagues to meet expected customer service levels.</p>
<p>
<strong>JOB REQUIREMENTS:</strong>
<br/>
Education
<br/>
Bachelor's degree strongly preferred
<br/>
Experience

Four to seven years of experience in software design, development, and testing
Knowledge/Skills
<br/>
Strong Java development skills
Excellent written and verbal communication skills
Ability to work independently under general direction
Dedication to keeping abreast of emerging technology trends
Core Java and Java Enterprise Edition (JavaEE)
Strong relational database experience using Oracle9i/10g/11g. SQL Server, DB2, MySQL, or PostgreSQL may be substituted for Oracle.
Web Application development using one of the following frameworks: SEAM, Struts, Spring, JSF, or Grails
Experience using one of the following: JBoss, Glassfish, Weblogic, WebSphere.
Experience working in and deploying to a UNIX based environment.
Experience designing application systems
Web Services development familiarity using either SOAP, WSDL, or REST
CoreLogic offers an empowered work environment that encourages creativity, initiative and professional growth and provides a competitive salary and benefits package. CoreLogic is an Equal Employment Opportunity/Affirmative Action Employer and maintains a Drug-Free Workplace. We are fully committed to employing a diverse workforce and creating an inclusive work environment that embraces everyone's unique contributions, experiences and values. Please apply on our website for consideration.
        </p>

      </Modal.Body>
      <Modal.Footer>
        <p id="postDate">Posted: {props.posted}</p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;