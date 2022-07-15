//import React from "react"
import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import { Row, Col, Card, CardBody } from "reactstrap"
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



useEffect(() => {
  dispatch(getOffers());
},[]);


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Timeline | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
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
                          className="btn btn-primary btn-rounded waves-effect waves-light m-t-5"
                        >
                          See more detail
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
                              className="btn btn-primary btn-rounded waves-effect waves-light m-t-5"
                            >
                              See more detail
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
    </React.Fragment>
  )
}


export default PagesTimeline
