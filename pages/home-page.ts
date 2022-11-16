import { expect, Locator, Page } from '@playwright/test'
import { url } from '../data/data-provider'

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
    await this.page.goto(url)
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

    for (const featureId of featureIds) {
        const locator = this.page.locator(`#${featureId}`)
        await locator.click()
    }
  }

  async selectOS(os: string) {
    const locator = this.page.locator(`#${os}`)
    await locator.click()
  }
}
