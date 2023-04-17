describe("Dymskaya site test suit", () => {
  beforeEach(() => {
    cy.visit("https://dumskaya.net/");
  });

  it("find link on page / test-case 1", () => {
    cy.get(".leftbot a").contains("Реклама").click();
    cy.get("div.space > p:nth-child(3)")
      .contains("Мы предлагаем размещение рекламных баннеров на нашем сайте.")
      .should("be.visible");
  });

  it("fill 'test' inside search / test-case 2", () => {
    cy.get("input[id='first']").type("test");
    cy.get("input[class='searchgo']").click();
    cy.get("ol.results:nth-child(4) > li").should("have.length", 6);
  });
});
