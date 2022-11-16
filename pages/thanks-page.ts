import { expect, Locator, Page } from '@playwright/test'


export class ThanksPage {
  readonly page: Page
  readonly messageHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.messageHeader = page.locator('[data-testid=thank-you-header]')
  }

  async verifyMessage() {
    await expect(this.messageHeader).toBeVisible()
  }
}
