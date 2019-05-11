import React from 'react';

const RepoListItem = (props) => (
  <tr>
    <td>
      <strong>Github Handle:</strong> {props.repo.username}
    </td>
    <td>
      <strong>URL:</strong> <a href={props.repo.html_url}>{props.repo.html_url}</a>
    </td>
    <td>
      <strong>Watchers:</strong> {props.repo.watchers}
    </td>
  </tr>

)

export default RepoListItem;