import './App.scss';
import { MainPage, Header, Article } from '..';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import mockCards from '../../mockData/mockCards.json';

function App(props) {
  const article = mockCards.map(el => (<Route path={`/article/${el.id}`} key={el.id}><Article data={el}></Article></Route>));
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Redirect to={'/article'}></Redirect></Route>
          <Route render={props => < MainPage data={mockCards} />} exact path='/article' />
          {article}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
