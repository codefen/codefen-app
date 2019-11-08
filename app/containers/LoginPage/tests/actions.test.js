import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants';

import {
  changeEmailAction,
  changePasswordAction,
  loginAction,
  loginSuccessAction,
  loginErrorAction,
} from '../actions';

describe('LoginPage Actions', () => {
  describe('changeEmailAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHANGE_EMAIL,
      };

      expect(changeEmailAction()).toEqual(expectedResult);
    });
  });

  describe('changePasswordAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHANGE_PASSWORD,
      };

      expect(changePasswordAction()).toEqual(expectedResult);
    });
  });

  describe('loginAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGIN,
      };

      expect(loginAction()).toEqual(expectedResult);
    });
  });

  describe('loginSuccessAction', () => {
    it('should return the correct type and the passed session and user', () => {
      const session = 'test';
      const user = ['test'];
      const expectedResult = {
        type: LOGIN_SUCCESS,
        session,
        user,
      };

      expect(loginSuccessAction(session, user)).toEqual(expectedResult);
    });
  });

  describe('loginErrorAction', () => {
    it('should return the correct type and the error', () => {
      const error = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOGIN_ERROR,
        error,
      };

      expect(loginErrorAction(error)).toEqual(expectedResult);
    });
  });
});
