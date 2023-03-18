describe("reklama od", () => {
  it("find link on page", () => {
    cy.visit("https://dumskaya.net/");
    // cy.get('footer > table > tbody > tr > td > a:contains("Реклама")').click()
    cy.get("footer > table > tbody > tr > td > a").contains("Реклама").click();
    cy.contains(
      "Мы предлагаем размещение рекламных баннеров на нашем сайте."
    ).should("exist");
  });
});
