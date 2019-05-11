import React from 'react';
import RepoListItem from './RepoListItem.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos. <br/>
    {/* <RepoListItem repo={props.repos[0]} />) */}
    {setTimeout(() => `Hi I'm ${props.repos[0].name}`, 500)}
    {/* Hi I'm {props.repos[0].name} */}
    <table>
        {/* {setTimeout(() => props.repos.map((repo, index) => <RepoListItem key={index} repo={repo} />), 500)} */}
        {/* {props.repos.map((repo, index) => <RepoListItem key={index} repo={repo} />)} */}
    </table>
    
  </div>
)

export default RepoList;