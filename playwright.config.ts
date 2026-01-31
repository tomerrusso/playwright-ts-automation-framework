import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    launchOptions: {
      slowMo: 1000, 
    },
    screenshot: 'on',
    video:{ mode: 'on',
      size: { width: 1280, height: 720 }
         },     // מקליט וידאו תמיד
    trace: 'on',     // יוצר Trace תמיד (לא רק ב-Retry)
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});