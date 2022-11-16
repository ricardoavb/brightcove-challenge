import { test, devices } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { name } from '../data/data-provider'
import { getRandomOS, getRandomInterface } from '../utils'


test('submit button is disabled without a value for name', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.verifySubmitButton()
})

test.only('submit form details', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.populateName()
  await homePage.enterName(name)
  await homePage.checkFeatures()
  await homePage.checktriedTestCafe()
  await homePage.selectOS(getRandomOS())
  await homePage.selectInterface(getRandomInterface())
  await homePage.submit()
  await page.waitForTimeout(2000)
})
