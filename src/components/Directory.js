
import React from 'react'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            friends: [],
            firstName: '',
            lastName: '',
        }
    }

    handleFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    handleClick() {
        const { firstName, lastName } = this.state

        // let newFriend = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        // }

        this.setState({
            friends: [...this.state.friends, { firstName, lastName }],
            // friends: [...this.state.friends, newFriend]
            lastName: '',
            firstName: ''
        })
    }

    handleRemove(e) {
        let filteredFriends = this.state.friends.filter(element => element.firstName !== e.target.id)
        this.setState({
            friends: filteredFriends
        })
    }

    render() {
    let friendsMap = this.state.friends.map((e, i, a) => (
      <div>
        <p key={i}>
          {e.firstName} {e.lastName}
        </p>
        <button key={i} id={e.firstName} onClick={e => this.handleRemove(e)}>-</button>
      </div>
    ));
    // let friendsMap = this.state.friends.map((friend, i, a) => <p key={i}>{ `${friend.firstName} ${friend.lastName}` }</p>)
        return (
            <div>
                <input value={this.state.firstName} placeholder="first name" onChange={(e) => this.handleFirstNameChange(e)} />
                <input value={this.state.lastName} placeholder="last name" onChange={(e) => this.handleLastNameChange(e)} />
                <button onClick={() => this.handleClick()}>Add Friend</button>
                <p>Friends</p>
                {friendsMap}
            </div>
        )
    }
}

export default Directory;