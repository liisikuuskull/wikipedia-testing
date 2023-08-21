describe('Wikipedia API Test', () => {
    it('Should fetch a random article title using Wikipedia API', () => {
      // Use Wikipedia API to fetch a random article title
      cy.request({
        method: 'GET',
        url: 'https://en.wikipedia.org/w/api.php',
        qs: {
          action: 'query',
          format: 'json',
          list: 'random',
          rnnamespace: 0, // Fetch articles in the main namespace
        },
      }).then((response) => {
        // Verify that the response contains a random article title
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('query');
        expect(response.body.query).to.have.property('random');
        const randomArticle = response.body.query.random[0];
        expect(randomArticle).to.have.property('title').that.is.a('string');
        cy.log('Random Article Title:', randomArticle.title);
      });
    });
  });
  
