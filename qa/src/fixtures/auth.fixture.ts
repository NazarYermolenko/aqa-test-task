import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      process.env.TEST_USERNAME as string,
      process.env.TEST_PASSWORD as string
    );

    await use(page);
  },
});

export { expect };