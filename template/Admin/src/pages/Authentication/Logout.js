import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

//import { logoutUser } from "../login/actions"

const Logout = props => {
  useEffect(() => {
    props.logoutUser(props.history)
  })

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func
}

export default withRouter(connect(null, { Logout })(Logout))
