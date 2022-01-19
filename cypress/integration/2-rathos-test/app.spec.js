describe("RATHOS app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it("displays homepage title", () => {
    cy.get(".header-title").contains("RATHOS");
  });

  it("display search bar and button", () => {
    cy.get(".search-input-wrapper").should("have.length", 1);
    cy.get(".form-control").invoke("attr", "placeholder").should("contain", "Search by tags here!");
    cy.get(".btn-primary").contains("Search")
  });

  it("display 16 elements of image", () => {
    cy.get(".page-images-wrapper").should("have.length", 1);
    cy.get(".image-card-component").should("have.length", 16);
  });

  it("display paginations", () => {
    cy.get(".pagination-component").should("have.length", 1);
    cy.get(".pagination-item").should("have.length", 7);
  });

  it("can search image", () => {
    cy.get(".search-input-wrapper").should("have.length", 1);
    cy.get(".form-control").type("Cats");
    cy.get(".btn-primary").invoke("click");
    cy.get(".page-images-wrapper").should("have.length", 1);
    cy.get(".image-card-component").should("have.length", 16);
  });

  it("can change page", () => {
    cy.get(".pagination-component").should("have.length", 1);
    cy.get(".pagination-item").should("have.length", 7);
    cy.get(".pagination-item.pagination-item-2").click();
    cy.get(".image-card-component").should("have.length", 16);
    cy.get(".pagination-item.pagination-item-next").click();
    cy.get(".image-card-component").should("have.length", 16);
    cy.get(".pagination-item.pagination-item-back").click();
    cy.get(".image-card-component").should("have.length", 16);
  });

  it("can search image and change page", () => {
    // Search Image
    cy.get(".search-input-wrapper").should("have.length", 1);
    cy.get(".form-control").type("Cats");
    cy.get(".btn-primary").invoke("click");
    cy.get(".page-images-wrapper").should("have.length", 1);
    cy.get(".image-card-component").should("have.length", 16);
    
    // Change Page
    cy.get(".pagination-component").should("have.length", 1);
    cy.get(".pagination-item").should("have.length", 7);
    cy.get(".pagination-item.pagination-item-2").click();
    cy.get(".image-card-component").should("have.length", 16);
    cy.get(".pagination-item.pagination-item-next").click();
    cy.get(".image-card-component").should("have.length", 16);
    cy.get(".pagination-item.pagination-item-back").click();
    cy.get(".image-card-component").should("have.length", 16);
  })

})