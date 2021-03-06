import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testing login page', () => {
  test('if inputs (email, password) and button are in the page', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const getInputEmail = getByTestId('email-input');
    const getInputPassw = getByTestId('password-input');
    const getBtnLogin = getByTestId('login-submit-btn');
    expect(getInputEmail).toBeInTheDocument();
    expect(getInputPassw).toBeInTheDocument();
    expect(getBtnLogin).toBeInTheDocument();
  });
  test('the type function in inputs, enable/disable and redirect in button', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    const getInputEmail = getByTestId('email-input');
    const getInputPassw = getByTestId('password-input');
    const getBtnLogin = getByTestId('login-submit-btn');
    expect(getBtnLogin).toBeDisabled();
    userEvent.type(getInputEmail, 'teste@email.com');
    expect(getInputEmail).toHaveValue('teste@email.com');
    userEvent.type(getInputPassw, '12345678');
    expect(getInputPassw).toHaveValue('12345678');
    expect(getBtnLogin).not.toBeDisabled();
    userEvent.click(getBtnLogin);
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
