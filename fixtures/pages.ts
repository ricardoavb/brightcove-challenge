import { test as base } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { ThanksPage } from '../pages/thanks-page'

type pages = {
    homePage: HomePage,
    thanksPage: ThanksPage
}

const testPages = base.extend<pages>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await homePage.goto()
        await use(homePage)
    },
    thanksPage: async ({ page }, use) => {
        const thanksPage = new ThanksPage(page)
        await use(thanksPage)
    }
})

export const test = testPages
