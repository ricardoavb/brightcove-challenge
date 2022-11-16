import { expect, Locator, Page } from '@playwright/test'


export class HomePage {
  readonly page: Page
  readonly nameInput: Locator
  readonly submitButton: Locator
  readonly populateButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#developer-name')
    this.submitButton = page.locator('#submit-button')
    this.populateButton = page.locator('#populate')
  }

  async goto() {
    await this.page.goto("https://devexpress.github.io/testcafe/example/")
  }

  async enterName(name: string) {
    await this.nameInput.fill(name)
  }

  async verifySubmitButton() {
    await expect(this.submitButton).toBeDisabled()
  }

  async populateName() {
    await this.populateButton.click()    
  }

  async checkFeatures() {
    const featureIds: string[] = [
        'remote-testing',
        'reusing-js-code',
        'background-parallel-testing'
    ]

    featureIds.forEach(async featureId => {
        const locator = this.page.locator(`#${featureId}`)
        await locator.click()
    })
  }
}
