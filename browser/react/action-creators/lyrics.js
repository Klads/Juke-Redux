import {SET_LYRICS} from '../constants.js'

export const setLyrics = (text) => {
	return {
		type: SET_LYRICS,
		lyric: text
	}

}