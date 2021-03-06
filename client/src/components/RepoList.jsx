import React from 'react';
import RepoListItem from './RepoListItem.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <br />
    <br />
    <table>
        <tbody>
          {props.repos.map((repo, index) => <RepoListItem key={index} repo={repo} />)}
        </tbody>
    </table>
  </div>
)

export default RepoList;