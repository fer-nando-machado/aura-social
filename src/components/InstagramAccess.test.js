import React from 'react';
import { render } from '@testing-library/react';
import InstagramAccess from './InstagramAccess';

test('renders InstagramAccess button', () => {
  const { container, getByText, getByAltText } = render(<InstagramAccess />);

  const title = getByText(/Continue with Instagram/i);
  expect(title).toBeInTheDocument();

  const img = getByAltText(/Continue with Instagram/i)
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(`${process.env.REACT_APP_IMAGES}instagram.svg`)

  expect(container.firstChild).toHaveAttribute('href',
  'https://api.instagram.com/oauth/authorize' +
  '?client_id=' + process.env.REACT_APP_INSTAGRAM_CLIENT_ID +
  '&redirect_uri=' + process.env.REACT_APP_URL +
  '&scope=user_profile,user_media' +
  '&response_type=code')
});
