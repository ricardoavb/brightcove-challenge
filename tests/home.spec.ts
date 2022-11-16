import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'


test('first test', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.enterName('test')
})
