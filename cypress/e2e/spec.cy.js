describe('Yelobank online queue system', () => {
  it('Getting online queue', () => {
    // enter the website 
    cy.visit('/');

    // check url with implicit assertion
    cy.url().should('eq', 'https://www.yelo.az/');

    // get 'online novbe' link and check href attribute with assertion
    cy.get('.ht_right > :nth-child(1) > .tm_8819 > .ht_location')
      .should('have.attr', 'href').and('include', 'online-queue')
      .then((href) => {
        cy.visit(href)
      })

    // wait for js scripts
    cy.wait(1000);

    // click 'bank kartlari' button after checking text included
    cy.get('.links_grid > ul > li')
      .first()
      .find('span')
      .should('have.text',"Bank kartları")
      .click()

    // wait for js scripts and select branch
    cy.wait(2000);
    cy.get('#branches').select('20 yanvar filialı (Həsən bəy Zərdabi prospekti 81K)');

    // get active dates and choose the first one of them 
    cy.wait(2000);
    cy.get('.xdsoft_calendar td')
      .not('.xdsoft_disabled')
      .first()
      .click();

    // get active times and choose the first one of them 
    cy.get('.xdsoft_time_variant div').first().click();

    // fill the form
    cy.get('[name="name"]').type('Mehin');
    cy.get('[name="surname"]').type('Melikova');
    cy.get('[name="prefix"]').select('055');
    cy.get('[name="mobile"]').type('3554355');
    cy.get('[name="mobile"]').type('3554355');
    cy.get('[placeholder="E-mail"]').type('mhmelikova@gmail.com');
    
    // submit the form data
    cy.get("#submit").click();
  })
})