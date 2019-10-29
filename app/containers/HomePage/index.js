/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { isLoggedAction } from './actions';
import saga from './saga';

export default function HomePage() {
  const dispatch = useDispatch();
  useInjectSaga({ key: 'homePage', saga });

  const handleLogged = () => dispatch(isLoggedAction());

  useEffect(() => {
    handleLogged();
  }, []);

  return null;
}
