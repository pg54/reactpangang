import { combineReducers } from 'redux'
import players from './players'
import subreddits from './subreddits'
import mygithub from './mygithub'
const reducers=combineReducers({
    players,
    subreddits,
    mygithub,
})
export default reducers