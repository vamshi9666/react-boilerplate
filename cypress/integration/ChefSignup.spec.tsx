/// <reference types="cypress" />

import { closeSync, watchFile } from 'fs';
import { phone } from 'faker';

beforeEach(() => {
  cy.visit('http://localhost:3000/signup');
  localStorage.removeItem('AUTH_TOKEN');
});

describe('Signup Page', () => {
  it('with existing email', () => {
    const user = {
      firstName: 'first Name',
      email: 'vamshi9666@riseup.net',
    };
    cy.findByLabelText(/first name/i).type(user.firstName);
    cy.findByLabelText(/email/i).type(user.email);
    cy.findByText(/sign up/i).click();

    cy.findByText('Error');
  });
  it.only('with unique email', () => {
    const user = {
      firstName: 'first Name',
      lastName: 'last name',
      email: 'vamshi9666@neemail.somenewmail',
      phone: 9876543210,
      password: 'testpassword',
    };
    cy.findByLabelText(/first name/i).type(user.firstName);
    cy.findByLabelText(/email/i).type(user.email);
    cy.findByText(/sign up/i).click();

    cy.wait(2500);
    // #todo
    cy.findByLabelText(/first name/i).should('be.value', user.firstName);
    cy.findByLabelText(/last name/i).type(user.firstName);
    cy.findByLabelText(/gender/i).select('Male');
    cy.findByText(/next/i).click();

    cy.findByLabelText(/phone number/i).should('be.value', '');

    cy.findByLabelText(/phone number/i).type(9876543210);
    cy.findByLabelText(/date of birth/i).type('1998-11-11');
    cy.findByLabelText(/password/i).type(user.password);
  });
});
