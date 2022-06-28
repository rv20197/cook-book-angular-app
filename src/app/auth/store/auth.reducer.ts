import { User } from '../user.model';
import * as FromAuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state = initialState,
  action: FromAuthActions.AuthActions
) {
  switch (action.type) {
    case FromAuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );

      return {
        ...state,
        authError: null,
        user: user,
        loading: false,
      };
    case FromAuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };

    case FromAuthActions.LOGIN_START:
    case FromAuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };

    case FromAuthActions.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false,
      };

    case FromAuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
}
