import React from 'react'
import "./App.css"
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/jackets" component={JacketsPage} />
      </Switch>

    </div>
  )
}

export default App;
