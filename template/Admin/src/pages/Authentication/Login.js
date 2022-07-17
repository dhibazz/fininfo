import React, { useState, useRef } from "react";
import MetaTags from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";


import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

import { Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { login } from "../../store/auth/login/actions"

// import images
import logoSm from "../../assets/images/logo-sm.png";
import { Redirect } from "react-router-dom";


const required = (value) => {
  if (!value) {
    return <div className="text-danger">This field is required!</div>;
  }
};
const email = (value) => {
  if (!/^.+@.+\..+$/.test(value) === true) {
    return <div className="text-danger">This field is required email!</div>;
  }
};


   const Login = () => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
   const { isLoggedIn } = useSelector(state => state.Login);
   const { error } = useSelector(state =>state.Login);
    const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username1 = e.target.value;
    setUsername(username1);
  };

  const onChangePassword = (e) => {
    const password1 = e.target.value;
    setPassword(password1);
    
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    form.current.validateAll();
      dispatch(login(username, password))
  };


if(isLoggedIn)
{
  <Redirect to="/dashboard" />
}

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Welcome Back !
                        </h5>
                    <p className="text-white-50">
                      Sign in to continue to Veltrix.
                        </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm onSubmit={handleLogin} ref={form}
                      className="form-horizontal mt-4"
                     
                    >
                      {error && typeof error === "string" ? (
                        <Alert color="danger">{error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="username"
                          label="username"
                          value={username}
                       onChange={onChangeUsername}
                        validations={[required]}
                          className="form-control"
                          placeholder="Enter email"
                          type="text"
                        
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          value={password}
                  onChange={onChangePassword}
                     validations={[required]}
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                              </button>
                        </Col>
                      </Row>
                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password">
                            <i className="mdi mdi-lock"></i> Forgot your
                                password?
                              </Link>
                        </div>
                      </Row>
                      
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link
                    to="register"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}


export default Login;

