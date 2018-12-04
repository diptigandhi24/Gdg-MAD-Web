import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import './BaseLayout.scss'

class BaseLayout extends Component {
  render () {
    return (
      <div className={'row base-layout '}>
        {/* <ToastContainer autoClose={2500} position='top-center'
          hideProgressBar /> */}
        <div className='col-xs-12 base-components'>
          {this.props.children || null}
        </div>
        <div className='loader' />
      </div>
    )
  }
}

// const mapDispatchToProps = {
// }

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps, null)(BaseLayout))
