/**
 * Created by turjoy on 4/16/17.
 */
import React from 'react';

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(user => user.friend === true).map(friend => <li key={friend.name}>{friend.name}</li>)}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list
            .filter(user => user.friend === false)
            .map(nonFriend => <li key={nonFriend.name}>{nonFriend.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default Users;