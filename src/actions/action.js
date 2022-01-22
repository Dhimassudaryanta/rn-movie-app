import React from 'react';
import Api from '../apis/api';
import axios from 'axios';

export const GetNowPlaying = () => async dispatch => {


    try {
        const response = await Api.get(`/movie/now_playing?api_key=d71d4cea124eac1044ac9a46baada530`)


        dispatch({ type: "GET_NOW_PLAYING", payload: response.data.results })

    }
    catch (err) {
        null
    }
}

export const GetTvPopular = () => async dispatch => {


    try {
        const response = await Api.get(`/tv/popular?api_key=d71d4cea124eac1044ac9a46baada530`)


        dispatch({ type: "GET_TV_POPULAR", payload: response.data.results })

    }
    catch (err) {
        null
    }
}

export const GetTvTopRated = () => async dispatch => {


    try {
        const response = await Api.get(`/tv/top_rated?api_key=d71d4cea124eac1044ac9a46baada530`)


        dispatch({ type: "GET_TV_TOP_RATED", payload: response.data.results })

    }
    catch (err) {
        null
    }
}

export const GetSimilliarMovies = (id) => async dispatch => {

    console.log(id)
    // console.log('wkwkwk')
    try {
        const response = await Api.get(`/movie/${id}/similar?api_key=d71d4cea124eac1044ac9a46baada530`)


        dispatch({ type: "GET_SIMILLIAR_MOVIES", payload: response.data.results })

    }
    catch (err) {
        null
    }
}

export const GetSimilliarTv = (id) => async dispatch => {

    console.log(id)
    try {
        const response = await Api.get(`/tv/${id}/similar?api_key=d71d4cea124eac1044ac9a46baada530`)


        dispatch({ type: "GET_SIMILLIAR_MOVIES", payload: response.data.results })

    }
    catch (err) {
        null
    }
}