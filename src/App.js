import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticleIndex from './Article/Index';
import ArticleShow from './Article/Show';

function App() {
  return (
    <>
    <h1>Blog Title</h1>
    <p>description</p>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ArticleIndex}></Route>
        <Route exact path="/article" component={ArticleIndex}></Route>
        <Route exact path="/article/:id" component={ArticleShow}></Route>
        <Route exact path="/article?:param" component={ArticleIndex}></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
