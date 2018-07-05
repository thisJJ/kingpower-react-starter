# INTEGRATION TEST
## Using Cypress.js
```
https://docs.cypress.io/
```

#### Getting start
###### View testing process
```npm
npm run cypress:open
```

###### Capture testing process
```npm
npm run cypress:run
```

###### Write test

|Function name|Description|Example|
|:-|:-|:-|
|cy.get|get action by element className or id| get by id ```cy.get('#input-exam')```<br />get by className ```cy.get('.input-exam')```<br />|
|cy.visit|Open website for test|```cy.visit('http://localhost:3000')```|
|cy.get('#xxx).click()|Click element||
|cy.get('#xxx).type()|Typing on input|```cy.get('#xxx).type('Username')```|
|cy.get('#xxx).should('contain', 'yyyyyy')|Expect value|```cy.get('#xxx).should('contain', 'yyyyyy')```|
|cy.get('#select-sku').select('Yiminghe')|Select value||
|cy.screenshot()|Screenshot|||

Other : https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability