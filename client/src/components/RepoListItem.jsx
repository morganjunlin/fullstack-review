import React from 'react';

const RepoListItem = (props) => {
  <tr>
    <td>
      name: {props.repo.username}
    </td>
    <td>
      repo: {props.repo.name}
    </td>
    <td>
      url: {props.repo.html_url}
    </td>
  </tr>
}

export default RepoListItem;