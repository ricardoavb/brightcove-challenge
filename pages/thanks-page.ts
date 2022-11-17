import { expect, Locator, Page } from '@playwright/test'
import { url } from '../data/data-provider'


export class ThanksPage {
  readonly page: Page
  readonly messageHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.messageHeader = page.locator('[data-testid=thank-you-header]')
  }

  async verifyMessage(name: string) {
    await expect(this.messageHeader).toBeVisible()
    await expect(this.messageHeader).toContainText(name)
  }

  async verifyUrl() {
    const pageUrl = `${url}thank-you.html`
    await expect(this.page).toHaveURL(pageUrl)
  }
}
