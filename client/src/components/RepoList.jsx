import React from 'react';
import RepoListItem from './RepoListItem.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    <table>
        {props.repos.map((repo, index) => <RepoListItem key={index} repo={repo} />)}
    </table>
    
  </div>
)

export default RepoList;