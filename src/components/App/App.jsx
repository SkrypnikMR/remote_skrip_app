import { useState, useEffect } from 'react';
import './App.scss';
import { MainPage, Header, Article } from '..';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import firebase from '../../firebase';
import { validateCreatingCard } from '../../helpers';

function App(props) {
  const [skripDB, setSkripDB] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const DB = firebase.firestore();
      const data = await DB.collection('skripDB').get();
      setSkripDB(data.docs.map((el) => el.data()));
    };
    fetchData();
  }, []);
  const validData = validateCreatingCard(skripDB);
  const article = validData.map(el => (<Route path={`/article/${el.id}`} key={el.id}><Article data={el}></Article></Route>));
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Redirect to={'/article'}></Redirect></Route>
          <Route render={props => < MainPage data={skripDB} />} exact path='/article' />
          {article}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
