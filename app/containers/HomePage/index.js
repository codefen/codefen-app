/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserLoggedAction } from 'containers/App/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const handleLogged = () => dispatch(checkUserLoggedAction());

  useEffect(() => {
    handleLogged();
  }, []);

  return null;
}
