import {
  getMoviesFailure,
  getMoviesSuccess,
  getMoviesStart,
  deleteMoviesStart,
  deleteMoviesSuccess,
  deleteMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  createMoviesFailure,
} from './MovieActions';
import { axiosInstance } from '../../config';

import axios from 'axios';

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());

  try {
    console.log('Lai liao calling movies api');
    const res = await axiosInstance.get('/movies', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    console.log(`This is ${JSON.stringify(res.data)}`);
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    console.log(err);
    console.log('wat the shit is this');
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMoviesStart());

  try {
    console.log('Lai liao calling create movies api');
    console.log(JSON.parse(localStorage.getItem('user')).accessToken);
    const res = await axiosInstance.post('/movies', movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    console.log('no running till here');
    dispatch(createMoviesSuccess(res.data));
  } catch (err) {
    console.log(err);
    console.log('Lol why fail agn');
    dispatch(createMoviesFailure());
  }
};

//delete
export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMoviesStart());

  try {
    console.log('Lai liao calling delete movies api');
    await axiosInstance.delete('/movies' + id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (err) {
    console.log('Lol why fail agn');
    dispatch(deleteMoviesFailure());
  }
};
