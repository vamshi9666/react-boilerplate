/// <reference types="cypress" />

beforeEach(() => {
  localStorage.setItem(
    'AUTH_TOKEN',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNDQzMTAzMS1jMmFmLTRhYjItYTk0MC03ODMzN2MyNDQyY2IiLCJpYXQiOjE1OTgwNDE1NzcuMDA3LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiYTQ0MzEwMzEtYzJhZi00YWIyLWE5NDAtNzgzMzdjMjQ0MmNiIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5ODY0NjM3N30.exkXj8f6a4lUMdHz_LncJ-8EZYoNObBE2beo9ccvygA',
  );
});

describe('Adding dish', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('successfully adds a dish with valid inputs', () => {
    cy.findByText('Add New Dish').click();
    const testVariants = [
      { portionSize: 'small', servingCount: 1, price: 199 },
      { portionSize: 'medium', servingCount: 2, price: 299 },
      { portionSize: 'large', servingCount: 3, price: 399 },
    ];
    const newDish = {
      name: 'some dish',
      type: 'APPETIZERS',
      cuisine: 'INDIAN',
      category: 'KETO',
      description: 'new dish desciption',
      ingredients: 'some text ingredients',
      calories: '3000 cal for 100 gms',
      servingUnit: 'grams',
      images: { data: ['1,2', '2'] },
      variants: { data: testVariants },
    };
    const textFormValues = [
      {
        label: /^Name/i,
        value: newDish.name,
      },

      {
        label: /description/i,
        value: newDish.description,
      },
      {
        label: /ingredients/i,
        value: newDish.ingredients,
      },
      {
        label: /calories/i,
        value: newDish.calories,
      },
    ];
    const selectValues = [
      {
        label: /type/i,
        value: newDish.type,
      },
      {
        label: /cuisine/i,
        value: newDish.cuisine,
      },
      {
        label: /category/i,
        value: newDish.category,
      },
      {
        label: /serving unit/i,
        value: newDish.servingUnit,
      },
    ];

    textFormValues.forEach((c) => {
      cy.findByLabelText(c.label).type(c.value);
    });

    selectValues.forEach((c) => {
      cy.findByLabelText(c.label).select(c.value);
    });

    cy.findByText(/submit/i).click();

    // })

    // cy.fixture('assets/images/food.jpg').as('dishImage');
    //  Cypress.Blob.base64StringToBlob(
    //   this.dishImage,
    //   'image/jpg',
    // ).then(blob => {
    // cy.findByLabelText(/images/i).attachFile('cy.png');
    // })
  });
});
