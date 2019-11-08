import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectError,
  makeSelectIsLoading,
} from '../selectors';

describe('makeSelectEmail', () => {
  it('should select the email', () => {
    const emailSelector = makeSelectEmail();
    const email = 'sfss@o2.com';
    const mockedState = {
      loginPage: { email },
    };
    expect(emailSelector(mockedState)).toEqual(email);
  });
});

describe('makeSelectPassword', () => {
  it('should select the password', () => {
    const passwordSelector = makeSelectPassword();
    const password = '12345790';
    const mockedState = {
      loginPage: { password },
    };
    expect(passwordSelector(mockedState)).toEqual(password);
  });
});

describe('makeSelectError', () => {
  it('should select the error', () => {
    const errorSelector = makeSelectError();
    const error = 'error';
    const mockedState = {
      loginPage: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectIsLoading', () => {
  it('should select the loading', () => {
    const loadingSelector = makeSelectIsLoading();
    const isLoading = false;
    const mockedState = {
      global: { isLoading },
    };
    expect(loadingSelector(mockedState)).toEqual(isLoading);
  });
});
