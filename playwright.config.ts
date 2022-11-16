import type { PlaywrightTestConfig } from '@playwright/test'


const config: PlaywrightTestConfig = {
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
}

export default config
