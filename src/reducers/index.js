import { combineReducers } from 'redux';
import nowplaying from './nowplaying';
import similliar from './similliar';
import tvpopular from './tvpopular';
import tvtoprated from './tvtoprated';

export default combineReducers({
    nowplaying: nowplaying,
    similliarmovies: similliar,
    tvpopular: tvpopular,
    tvtoprated: tvtoprated
});