import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

import * as reducers from './Store/reducers';



class Scoreboard extends Component {
	render() {

		const { dispatch, players } = this.props;
		const addPlayer = bindActionCreators(reducers.addPlayer, dispatch);
		const removePlayer = bindActionCreators(reducers.removePlayer, dispatch);
		const updatePlayerScore = bindActionCreators(reducers.updatePlayerScore, dispatch);

		const playerComponents = players.map((player, index) => (
			<Player
				index={index}
				name={player.name}
				score={player.score}
				key={player.name}
				updatePlayerScore={updatePlayerScore}
				removePlayer={removePlayer}
			/>
		));

		return (
			<div className="scoreboard">
				<Header players={players} />
				<div className="players">
					{playerComponents}
				</div>
				<AddPlayerForm addPlayer={addPlayer} />
			</div>
		);
	}
}

Scoreboard.propTypes = {
	players: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
	{
		players: state,
	}
);

export default connect(mapStateToProps)(Scoreboard);