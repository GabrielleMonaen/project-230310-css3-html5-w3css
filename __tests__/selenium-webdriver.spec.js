const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Elements are present', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Elements are present', async function() {
    // Test name: Elements are present
    // Step # | name | target | value
    // 1 | open | https://project-230310-css3-html5-w3css-js.netlify.app/ | 
    await driver.get("https://project-230310-css3-html5-w3css-js.netlify.app/")
    // 2 | assertText | css=h1 | Portfolio
    assert(await driver.findElement(By.css("h1")).getText() == "Portfolio")
    // 3 | assertText | css=.w3-container:nth-child(1) > h2 | Gabrielle Monaen
    assert(await driver.findElement(By.css(".w3-container:nth-child(1) > h2")).getText() == "Gabrielle Monaen")
    // 4 | assertText | css=.w3-left-align > h3 | About Me:
    assert(await driver.findElement(By.css(".w3-left-align > h3")).getText() == "About Me:")
    // 5 | assertElementPresent | css=.w3-image | 
    {
      const elements = await driver.findElements(By.css(".w3-image"))
      assert(elements.length)
    }
    // 6 | assertText | css=.w3-left-align > p:nth-child(2) | My career began with training in computer network engineering, software development and cryptography. I worked on web design and database design projects, as well as as a contractor in Java software development and Concordion testing. I also worked as a business mentor and managed a company for nearly 5 years. Other professional skills include course curriculum development and team leadership in agile management.
    assert(await driver.findElement(By.css(".w3-left-align > p:nth-child(2)")).getText() == "My career began with training in computer network engineering, software development and cryptography. I worked on web design and database design projects, as well as as a contractor in Java software development and Concordion testing. I also worked as a business mentor and managed a company for nearly 5 years. Other professional skills include course curriculum development and team leadership in agile management.")
    // 7 | assertText | css=.w3-left-align > p:nth-child(3) | I love technology because it improves people's lives and allows businesses to innovate. I believe that now is the best time to enter a technology role and learn about post-quantum cryptography and smart environments. And I take part in training programmes to become a well-rounded tech professional.
    assert(await driver.findElement(By.css(".w3-left-align > p:nth-child(3)")).getText() == "I love technology because it improves people's lives and allows businesses to innovate. I believe that now is the best time to enter a technology role and learn about post-quantum cryptography and smart environments. And I take part in training programmes to become a well-rounded tech professional.")
    // 8 | assertText | css=.w3-padding:nth-child(2) | Github Projects:
    assert(await driver.findElement(By.css(".w3-padding:nth-child(2)")).getText() == "Github Projects:")
    // 9 | assertText | css=.w3-container:nth-child(3) > .w3-row-padding | Created by Gabrielle Monaen. License: MIT.
    assert(await driver.findElement(By.css(".w3-container:nth-child(3) > .w3-row-padding")).getText() == "Created by Gabrielle Monaen. License: MIT.")
  })
})
