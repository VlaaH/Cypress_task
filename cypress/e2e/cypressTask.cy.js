describe(`Visit the homepage`, () => {
    it(`I can visit a page`, () => {
        cy.visit(`https://www.saucedemo.com/`)
        cy.wait(2000);
    });
    it(`LogIn button is visible`, () => {
        cy.get('input[id="login-button"]')
        .should('be.visible').click();
    });
    it(`Clear an input`, () => {
        cy.get('[type="text"]').clear();
    });
    it('Verify that input fields are visible', () => {
        cy.get("input[placeholder=\"Username\"]").type('aws')
        .should('be.visible')
        .clear();
    });
    it('Enter valid username',()=>{
        cy.get('input[id="user-name"]').type('standard_user');
    });
    it('Enter a valid password',()=>{
        cy.get('input[id="password"]').type('secret_sauce');
    });
    it ('Press the LogIn button',()=> {
        cy.get('input[type="submit"]').click();
    });
    it('Click on the hamburger menu',()=>{
        cy.get('button[id="react-burger-menu-btn"]').click('topLeft');
    });
    it('LogOut button is visible',()=>{
        cy.get('a[id="logout_sidebar_link"]')
        cy.contains('Logout').and('be.visible');
    });
    it('LogOut from the account',()=>{
        cy.get('a[id="logout_sidebar_link"]').click();
    });
    it('Redirected on the main page',()=>{
        cy.url()
        .should('be.equal','https://www.saucedemo.com/');
    });
    });