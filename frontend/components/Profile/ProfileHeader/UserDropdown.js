

//== Users Drop Down ===========================================================
/*
  Please add documentation detailing the purpose and use of this component.
  https://www.npmjs.com/package/next-routes 
*/

//-- Dependencies --------------------------------
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Router } from '../../../services/routes.js'
import { Mutation } from 'react-apollo';
import { MUTATION_FRIEND_PROFILE } from '../../../services/requests/profile.js';

//-- React Implementation ------------------------

  //PROPS - passed from profile.js in pages:
  //userId - the current user that is logged in
  //users - users in the database which can be added as a friend
const UsersDropdown = ({ userId, users }) => {

  //filter users that are private and have names
  let filtered = users.filter(user => user.isPrivate === false && user.name !== null)

  //Takes users from props and maps over each user 
  const userList = filtered.map(user => {
    return {
      text: user.name,
      value: user.id,
      icon: 'user',
    };
  });

  return(
    <Mutation mutation={MUTATION_FRIEND_PROFILE}>
      {setFriendId => (
        <Dropdown
        text='Search for friends'
        icon='search'
        search
        selection
        options={userList}
        className='profile_userDropDown'
        onChange={(e, data) => {
          setFriendId({ variables: { id: data.value }});
          Router.pushRoute('friends', {id: data.value} )
        }}
        />
      )}
    </Mutation>
  );
}
export default UsersDropdown;