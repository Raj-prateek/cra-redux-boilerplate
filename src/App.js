import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';
import Root from './components/Root/Root.component';

const RootComponentWithRoutes = props => (
  <Root {...props}>
    <Routes />
  </Root>
);

class App extends React.Component<StatePropsType> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router basename="/">
          <Route path="/" component={props => RootComponentWithRoutes(props)} />
        </Router>
      </Provider>
    );
  }
}

export default App;
