import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) { }

  async logout() {
    await this.page.locator('.username-dropdown-trigger').click();
    await this.page.getByRole('button', { name: /logout/i }).click();
  }

  async isGreetingVisible() {
    return this.page.getByRole('heading', { name: /Good/i });
  }
}