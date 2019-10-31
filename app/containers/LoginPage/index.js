/**
 *
 * LoginPage
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// Import Components
import LoginForm from 'components/LoginForm';
import LoginWrapper from 'components/LoginWrapper';
import LoginContainer from 'components/LoginContainer';
import LoginAside from 'components/LoginAside';

// Import Utils
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { checkUserLoggedAction } from 'containers/App/actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export default function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const dispatch = useDispatch();
  const handleLogged = () => dispatch(checkUserLoggedAction());

  useEffect(() => {
    handleLogged();
  }, []);

  return (
    <>
      <FormattedMessage {...messages.header}>
        {header => <Helmet title={header} />}
      </FormattedMessage>

      <LoginContainer>
        <LoginWrapper>
          <LoginAside />
          <LoginForm />
        </LoginWrapper>
      </LoginContainer>
    </>
  );
}
