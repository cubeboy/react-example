import './App.css';
import React, { Component } from 'react';

class Nav extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    console.log('Nav.componentDidMount');
    fetch('list.json')
      .then(function(result) {
        return result.json();
      })
      .then(function(json) {
        console.log("fetched json ==>> ", json);
        this.setState({list: json});
      }.bind(this));
  }

  render () {
    var listTag = [];
    this.state.list.forEach(item => {
      listTag.push(
        <li key={item.id}><a href={item.id} data-id={item.id}
          onClick={function(e) {
            e.preventDefault();
            this.props.onClick(e.target.dataset.id);
          }.bind(this)}
        >
          {item.title}
        </a></li>
      );
    });
    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render () {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  };
}

class App extends Component {
  state = {
    article: {title: 'Welcome', desc: 'Hello, React &amp; Ajax'}
  }
  render () {
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav 
          onClick={
            function (id) {
              fetch(id+'.json')
                .then(function (result) {
                  return result.json();
                })
                .then(function (json) {
                  this.setState({article: {title: json.title, desc: json.desc}});
                }.bind(this));
            }.bind(this)
          }
        />
        <Article title={this.state.article.title} desc={this.state.article.desc} />
      </div>
    );
  }
}

export default App;
