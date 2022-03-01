import { DuoSharp } from '@material-ui/icons';
import axios from 'axios';
import { axiosInstance } from '../../config';

import { loginFailure, loginStart, loginSuccess } from './AuthAction';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post('/auth/login', user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
    console.log('gogo');
  } catch (err) {
    dispatch(loginFailure());
  }
};
