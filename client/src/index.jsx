import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.handleList = this.handleList.bind(this);
  }

  componentDidMount() {
    this.handleList();
  }

  handleList() {
    $.get('/repos', (req, res) => {
      this.setState({
        repos: req
      })
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    
    $.post('/repos', { 
      username: term 
    }, () => this.handleList())
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} handleList={this.handleList} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));