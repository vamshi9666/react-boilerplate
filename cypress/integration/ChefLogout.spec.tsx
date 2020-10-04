/// <reference types="cypress" />

beforeEach(() => {
  localStorage.setItem(
    'AUTH_TOKEN',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNDQzMTAzMS1jMmFmLTRhYjItYTk0MC03ODMzN2MyNDQyY2IiLCJpYXQiOjE1OTc1ODk5OTIuNTQzLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiYTQ0MzEwMzEtYzJhZi00YWIyLWE5NDAtNzgzMzdjMjQ0MmNiIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5ODE5NDc5Mn0.trdSm4KYzRw-vdFPLfuAbnpR7q4FQP4BT-OrhL0JYe4',
  );
});

describe('user logs out', () => {
  it('success', () => {
    cy.visit('http://localhost:3000');
    cy.findByTestId(/chefProfileIcon/i).click();
    cy.findByText(/logout/i).click();
    // cy.location().should('be', 'http://localhost:3000');
  });
});
