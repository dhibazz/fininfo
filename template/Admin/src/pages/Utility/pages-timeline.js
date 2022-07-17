//import React from "react"
import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import { Row, Col, Card, CardBody,Form,FormGroup,Label,Input  } from "reactstrap"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom"
import axios from "axios";

import {useDispatch,useSelector} from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";

import {getOffers} from "../../store/actions";


const PagesTimeline = () => {
const dispatch = useDispatch();
const offers = useSelector((state) => state.offers.offers);

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

useEffect(() => {
  dispatch(getOffers());
},[]);


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Timeline</title>
        </MetaTags>
        <div className="container-fluid">
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="Timeline" />

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div id="cd-timeline">
                      <ul className="timeline list-unstyled">
                        
                        {offers.map((offer, key)=> (
                          <>
                          {key%2 !== 1 ? 
                          <li className="timeline-list" key={key}>
                          <div className="cd-timeline-content p-4">
                            <h5 className="mt-0 mb-3">{offer.poste}</h5>
                            <p className="mb-2">
                              {offer.description}
                            </p>
                            <p className="mb-0">
                              {offer.emplacement}
                          </p>
                          <button
                          type="button"
                          onClick={toggle}
                          className="btn btn-primary btn-rounded waves-effect waves-light m-t-5"
                        >
                          Apply
                      </button>
                            <div className="date bg-primary">
                              <h4 className="mt-0">{offer.experience}</h4>
                              <p className="mb-0 text-white-50">{offer.type}</p>
                            </div>
                          </div>
                        </li>
                          : 
                          <li className="timeline-list right clearfix" key={key}>
                          <div className="cd-timeline-content p-4">
                            <h5 className="mt-0 mb-3">{offer.poste}</h5>
                            <p>
                            {offer.description}
                          </p>
                          <p> {offer.emplacement}</p>
                            <button
                              type="button"
                              onClick={toggle}
                              className="btn btn-primary btn-rounded waves-effect waves-light m-t-5"
                            >
                              Apply
                          </button>

                          <div className="date bg-primary">
                                  <h4 className="mt-0">{offer.experience}</h4>
                                  <p className="mb-0 text-white-50">{offer.type}</p>
                                </div>
                          </div>
                        </li>
                          } 
                       
                          </>
                        ))
                          
                        }

                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add </ModalHeader>
        <ModalBody>
        <Form inline>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="poste"
    >
      Poste
    </Label>
    <Input
      id="poste"
      name="poste"
      type="text"
    />
  </FormGroup>
  <FormGroup className="mb-2 mt-3 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="cv"
    >
      Cv
    </Label>
    <Input
      id="cv"
      name="cv"
      type="file"
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="date"
    >
      Date
    </Label>
    <Input
      id="date"
      name="date"
      type="date"
    />
  </FormGroup>
</Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}


export default PagesTimeline
