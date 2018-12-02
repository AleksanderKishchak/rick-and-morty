import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HeroPage from './pages/HeroPage';
import HeroesList from './Components/HeroesList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { getHeroes } from './common/APIcalls';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    getHeroes()
      .then((characters) => {
        this.setState({
          characters: characters
        });
      })
      .catch(e => {
        console.error(e.message);
      });
  }

  lastPage = 25

  handlePageChange = newPage => {
    getHeroes(newPage)
      .then(characters => {
        this.setState({
          characters,
          currentPage: newPage
        });
      });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route
            exact
            path="/character"
            render={
              props => (
                <HeroesList
                  characters={this.state.characters}
                  handlePageChange={this.handlePageChange}
                  currentPage={currentPage}
                  lastPage={this.lastPage}
                  {...props}
                />
              )}
          />
          <Route
            path="/character/:id"
            component={HeroPage}
          />
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);