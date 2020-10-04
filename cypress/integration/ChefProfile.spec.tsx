/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

beforeEach(() => {
  localStorage.setItem(
    'AUTH_TOKEN',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNDQzMTAzMS1jMmFmLTRhYjItYTk0MC03ODMzN2MyNDQyY2IiLCJpYXQiOjE1OTc1ODk5OTIuNTQzLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiYTQ0MzEwMzEtYzJhZi00YWIyLWE5NDAtNzgzMzdjMjQ0MmNiIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5ODE5NDc5Mn0.trdSm4KYzRw-vdFPLfuAbnpR7q4FQP4BT-OrhL0JYe4',
  );
});

const newUser = {
  firstName: 'tester first name ',
  lastName: 'tester last  name',
  dob: '1997-11-11',
  bio: 'tester bio',
  role: 'tester role',
  degreeStatus: 'yes',
  degreeType: 'masters in baking',
  degreeFrom: 'Hells kitchen by kitchen nightmares',
  email: 'testerEmail@email.testlatest',
  phone: 9876512345,
  state: 'Telangana',
  city: 'Hyderabad',
  zip: 500040,
  lineOne: 'test line one',
  lineTwo: 'test line two',
};

describe('Profile  section', () => {
  it('successfully move accross tabs', () => {
    cy.visit('http://localhost:3000/profile/info');

    cy.wait(1000);

    cy.findByText('First Name');
    cy.visit('http://localhost:3000/profile/academics');
    cy.wait(1000);

    cy.findByText('Degree Status');
    cy.visit('http://localhost:3000/profile/contact');
    cy.wait(1000);

    cy.findByText('Email');
    cy.visit('http://localhost:3000/profile/delivery');
    cy.wait(1000);

    cy.findByText('Delivery Region');
  });
  it('dont allow to edit in disabled mode', () => {
    cy.visit('http://localhost:3000/profile/info');

    cy.findByLabelText('First Name').should('be.disabled');
  });
  it(' successfully update first name  ', () => {
    cy.visit('http://localhost:3000/profile/info');
    cy.findByText(/edit/i).click();

    cy.findByLabelText('First Name').clear();
    cy.findByLabelText('First Name').type(newUser.firstName);

    cy.findByLabelText('Last Name').clear();
    cy.findByLabelText('Last Name').type(newUser.lastName);

    cy.findByLabelText('Date of Birth').clear();
    cy.findByLabelText('Date of Birth').type(newUser.dob);

    cy.findByLabelText('Bio').clear();
    cy.findByLabelText('Bio').type(newUser.bio);

    cy.findByLabelText('Role').clear();
    cy.findByLabelText('Role').type(newUser.role);
    cy.findByText(/confirm/i).click();
    cy.wait(1000);
    cy.reload();
    cy.findByLabelText(/first name/i).should('be.value', newUser.firstName);
    cy.findByLabelText(/last name/i).should('be.value', newUser.lastName);
    cy.findByLabelText(/date of birth/i).should('be.value', newUser.dob);
    cy.findByLabelText(/bio/i).should('be.value', newUser.bio);
    cy.findByLabelText(/role/i).should('be.value', newUser.role);

    cy.findByText(/academics/i).click();
    cy.wait(1000);
    cy.findByText(/profile/i).click();
    cy.findByLabelText(/first name/i).should('be.value', newUser.firstName);
    cy.findByLabelText(/last name/i).should('be.value', newUser.lastName);
    cy.findByLabelText(/date of birth/i).should('be.value', newUser.dob);
    cy.findByLabelText(/bio/i).should('be.value', newUser.bio);
    cy.findByLabelText(/role/i).should('be.value', newUser.role);
  });
});
describe('Academics  section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/profile/academics');
  });
  it('dont allow to edit in disabled mode', () => {
    cy.findByLabelText(/degree type/i).should('be.disabled');
  });
  it(' successfully update  with yes ', () => {
    cy.findByText(/edit/i).click();

    cy.findByLabelText(/degree status/i).select(newUser.degreeStatus);

    cy.findByLabelText(/degree type/i).clear();
    cy.findByLabelText(/degree type/i).type(newUser.degreeType);

    cy.findByLabelText(/institution/i).clear();
    cy.findByLabelText(/institution/i).type(newUser.degreeFrom);

    cy.findByText(/confirm/i).click();
    cy.wait(500);
    cy.reload();
    cy.findByLabelText(/degree status/i).should(
      'be.value',
      newUser.degreeStatus,
    );
    cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);

    cy.findByText(/Contact/i).click();
    cy.wait(500);
    cy.get(':nth-child(2) > a').click();

    cy.findByLabelText(/degree status/i).should(
      'be.value',
      newUser.degreeStatus,
    );
    cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);
  });
  it(' unsuccessfully update  with no', () => {
    cy.findByText(/edit/i).click();

    cy.findByLabelText(/degree status/i).select('no');
    cy.findByLabelText(/degree type/i).should('be.disabled');
    // cy.findByLabelText(/degree type/i).clear();

    // cy.findByLabelText(/degree type/i).type(newUser.degreeType);

    // cy.findByLabelText(/institution/i).clear();
    // cy.findByLabelText(/institution/i).type(newUser.degreeFrom);

    // cy.findByText(/confirm/i).click();
    // cy.wait(500);
    // cy.reload();
    // cy.findByLabelText(/degree status/i).should('be.value', 'no');
    // cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    // cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);

    // cy.findByText(/Contact/i).click();
    // cy.wait(500);
    // cy.get(':nth-child(2) > a').click();

    // cy.findByLabelText(/degree status/i).should(
    //   'be.value',
    //   newUser.degreeStatus,
    // );
    // cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    // cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);
  });
});

describe('Contact  section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/profile/contact');
  });
  it('dont allow to edit in disabled mode', () => {
    cy.findByLabelText(/email/i).should('be.disabled');
    cy.findByLabelText(/phone number/i).should('be.disabled');
    cy.findByLabelText(/state/i).should('be.disabled');
    cy.findByLabelText(/city/i).should('be.disabled');
    cy.findByLabelText(/zip-code/i).should('be.disabled');
    cy.findByLabelText(/address - line one/i).should('be.disabled');
    cy.findByLabelText(/address - line two/i).should('be.disabled');
  });
  it(' successfully update with yes  ', () => {
    cy.findByText(/edit/i).click();

    const labels = {
      email: /email/i,
      phone: /phone number/i,
      state: /state/i,
      city: /city/i,
      zip: /zip-code/i,

      lineOne: /address - line one/i,
      lineTwo: /address - line two/i,
    };

    cy.findByLabelText(labels.email).clear();
    cy.findByLabelText(labels.email).type(newUser.email);

    cy.findByLabelText(labels.phone).clear();

    cy.findByLabelText(labels.phone).type(newUser.phone);

    // cy.wait(100);

    // cy.findByLabelText(labels.phone).type(123);

    // cy.wait(100);

    // cy.findByLabelText(labels.phone).type(456);

    // cy.wait(100);

    cy.findByLabelText(labels.phone).type(7890);

    cy.findByLabelText(labels.state).select(newUser.state);

    cy.findByLabelText(labels.city).clear();
    cy.findByLabelText(labels.city).type(newUser.city);

    cy.findByLabelText(labels.zip).clear();
    cy.findByLabelText(labels.zip).type(newUser.zip);

    cy.findByLabelText(labels.lineOne).clear();
    cy.findByLabelText(labels.lineOne).type(newUser.lineOne);

    cy.findByLabelText(labels.lineTwo).clear();
    cy.findByLabelText(labels.lineTwo).type(newUser.lineTwo);

    cy.findByText(/confirm/i).click();
    cy.wait(1500);

    cy.reload();

    cy.findByLabelText(labels.email).should('be.value', newUser.email);

    // cy.findByLabelText(labels.phone).should('be.value', newUser.phone);

    cy.findByLabelText(labels.state).should('be.value', newUser.state);

    cy.findByLabelText(labels.city).should('be.value', newUser.city);
    // cy.findByLabelText(labels.zip).should('be.value', +newUser.zip);
    cy.findByLabelText(labels.lineOne).should('be.value', newUser.lineOne);
    cy.findByLabelText(labels.lineTwo).should('be.value', newUser.lineTwo);

    // mapKeys(labels, (label, reg)=> {
    //   cy.findAllByLabelText(reg)
    // })
    // cy.findByLabelText(/degree status/i).should(
    //   'be.value',
    //   newUser.degreeStatus,
    // );

    // cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    // cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);

    // cy.findByText(/Contact/i).click();
    // cy.wait(500);
    // cy.get(':nth-child(2) > a').click();

    // cy.findByLabelText(/degree status/i).should(
    //   'be.value',
    //   newUser.degreeStatus,
    // );
    // cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    // cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);
  });
});

describe('Series of updates ', () => {
  it('profile and academics ', () => {
    cy.visit('http://localhost:3000/profile/info');

    cy.findByText('Edit').click();
    cy.findByLabelText('First Name').clear();
    cy.findByLabelText('First Name').type(newUser.firstName);

    cy.findByLabelText('Last Name').clear();
    cy.findByLabelText('Last Name').type(newUser.lastName);

    cy.findByLabelText('Date of Birth').clear();
    cy.findByLabelText('Date of Birth').type(newUser.dob);

    cy.findByLabelText('Bio').clear();
    cy.findByLabelText('Bio').type(newUser.bio);

    cy.findByLabelText('Role').clear();
    cy.findByLabelText('Role').type(newUser.role);
    cy.findByText(/confirm/i).click();
    cy.wait(500);
    cy.findByText('Academics').click();
    cy.findByText('Edit').click();
    cy.findByLabelText(/degree status/i).select(newUser.degreeStatus);

    cy.findByLabelText(/degree type/i).clear();
    cy.findByLabelText(/degree type/i).type(newUser.degreeType);

    cy.findByLabelText(/institution/i).clear();
    cy.findByLabelText(/institution/i).type(newUser.degreeFrom);
    cy.findByText(/confirm/i).click();
    cy.findByText(/profile/i).click();

    cy.findByLabelText(/first name/i).should('be.value', newUser.firstName);
    cy.findByLabelText(/last name/i).should('be.value', newUser.lastName);
    cy.findByLabelText(/date of birth/i).should('be.value', newUser.dob);
    cy.findByLabelText(/bio/i).should('be.value', newUser.bio);
    cy.findByLabelText(/role/i).should('be.value', newUser.role);
    cy.findByText(/academics/i).click();
    cy.findByLabelText(/degree status/i).should(
      'be.value',
      newUser.degreeStatus,
    );
    cy.findByLabelText(/degree type/i).should('be.value', newUser.degreeType);
    cy.findByLabelText(/institution/i).should('be.value', newUser.degreeFrom);
  });
});
