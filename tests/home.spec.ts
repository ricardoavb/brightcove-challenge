import { test } from '../fixtures/pages'
import { name } from '../data/data-provider'
import { getRandomOS, getRandomInterface } from '../utils'


test('submit button is disabled without a value for name', async ({ homePage }) => {
  await homePage.verifySubmitButton()
})

test('submit form details', async ({ page, homePage, thanksPage }) => {
  await homePage.populateName()
  await homePage.enterName(name)
  await homePage.checkFeatures()
  await homePage.checktriedTestCafe()
  await homePage.selectOS(getRandomOS())
  await homePage.selectInterface(getRandomInterface())
  await homePage.submit()
  await page.waitForTimeout(2000)
  await thanksPage.verifyMessage()
})
