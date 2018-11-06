import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>You are logged in. Welcome to the Dungeon</p>
        {this.props.dungeon ? <p>{this.props.dungeon.currentRoom}</p> : undefined}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dungeon: state.dungeon,
});

export default connect(mapStateToProps, null)(Dashboard);
