import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { name } from '../data/data-provider'


test('submit button is disabled without a value for name', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.verifySubmitButton()
})

test('submit form details', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.populateName()
  await homePage.enterName(name)
  await homePage.checkFeatures()
})
