import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, NavLink, Outlet, useParams } from 'react-router-dom';

const contents = [
  {id: 1, title: 'HTML', description: 'HTML is ...'},
  {id: 2, title: 'JS', description: 'JS is ...'},
  {id: 3, title: 'React', description: 'React is ...'},
];

function Topic () {
  var params = useParams();
  var topic_id = Number(params.topic_id);
  var selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  if(contents.findIndex(item => item.id === topic_id) >= 0) {
    selected_topic = contents.find(item => item.id === topic_id)
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  );
}

function Topics () {
  const lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Outlet />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact ...
    </div>
  );
}

function App () {
  return (
    <div>
      <BrowserRouter>
      <h1>Hello Rect Router DOM</h1>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topics/" element={<Topics />}>
            <Route path="/topics/:topic_id" element={<Topic />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
