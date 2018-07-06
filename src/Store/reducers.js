export const ADD_PLAYER = 'player/ADD_PLAYER';
export const REMOVE_PLAYER = 'player/REMOVE_PLAYER';
export const UPDATE_PLAYER_SCORE = 'player/UPDATE_PLAYER_SCORE';

export const addPlayer = name => {
	return {
		type: ADD_PLAYER,
		name,
	};
};

export const removePlayer = index => {
	return {
		type: REMOVE_PLAYER,
		index,
	};
};

export const updatePlayerScore = (index, score) => {
	return {
		type: UPDATE_PLAYER_SCORE,
		index,
		score,
	};
};


const initialState = [
	{
		name: 'Lady Gaga',
		score: 35,
	},
	{
		name: 'Kim Kardashian',
		score: 32,
	},
	{
		name: 'Ariana Grande',
		score: 26,
	},
];

export default function Player(state = initialState, action) {
	switch (action.type) {
		case ADD_PLAYER:
			return [
				...state,
				{
					name: action.name,
					score: 0,
				},
			];

		case REMOVE_PLAYER:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1),
			];

		case UPDATE_PLAYER_SCORE:
			return state.map((player, index) => {
				if (index === action.index) {
					return {
						...player,
						score: player.score + action.score,
					}
				}

				return player;
			});

		default:
			return state;
	}
}