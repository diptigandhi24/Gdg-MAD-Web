import React, { Component } from 'react'
// import './styles/main.scss'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import routesList from './routes/createRoutes'
import BaseLayout from './baselayout'

class App extends Component {
  componentWillMount () {
    document.addEventListener('touchmove', function (event) {
      if (event.scale !== 1) { event.preventDefault() }
    }, false)
  }

  render () {
    return (
      <div className='container'>
        <BaseLayout>
          <Switch>
            {
              routesList.map(
                (route, index) => (
                  <Route
                    exact={route.exactPath || false}
                    path={route.path}
                    component={route.component}
                    key={index}
                  />
                )
              )
            }
            {
              <Redirect path='*' to='/pagenotfound' />
            }
          </Switch>
        </BaseLayout>
      </div>
    )
  }
}

export default App
