/// <reference types="cypress" />

beforeEach(() => {
  localStorage.removeItem('AUTH_TOKEN');
});

describe('Chef Login ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
  });

  it('with valid email and password', () => {
    const user = {
      email: 'vamshi9666@riseup.net',
      password: 'securepassword',
    };
    cy.findByText(/login/i).click();

    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);
    cy.get('[data-testid=submitBtn]').click();
  });

  it('with invalid email and valid password', () => {
    const user = {
      email: 'vamshi9666@riseup',
      password: 'securepassword',
    };
    cy.findByText(/login/i).click();

    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);
    cy.get('[data-testid=submitBtn]').click();
    cy.findByText('Invalid email');
  });
  it('with valid email and invalid password', () => {
    const user = {
      email: 'vamshi9666@riseup.net',
      password: 'secure',
    };
    cy.findByText(/login/i).click();

    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);
    cy.get('[data-testid=submitBtn]').click();
    cy.findByText('Password must be 8 characters long');
  });
});
