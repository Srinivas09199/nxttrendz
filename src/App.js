import {Route, Switch} from 'react-router-dom'

import LoginFrom from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginFrom} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)
export default App
