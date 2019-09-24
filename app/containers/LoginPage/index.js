/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

// Import Components
import LoginForm from 'components/LoginForm';
import LoginWrapper from 'components/LoginWrapper';
import LoginContainer from 'components/LoginContainer';
import LoginAside from 'components/LoginAside';

// Import Utils
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';

export default function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <>
      <Helmet>
        <title>Login - codefen.com</title>
        <meta name="description" content="Login - codefen.com" />
      </Helmet>

      <LoginContainer>
        <LoginWrapper>
          <LoginAside />
          <LoginForm />
        </LoginWrapper>
      </LoginContainer>
    </>
  );
}
