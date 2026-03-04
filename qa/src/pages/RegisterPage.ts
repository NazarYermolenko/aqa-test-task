import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) { }

  async navigate() {
    await this.page.goto('/');
    await this.page.getByRole('link', { name: 'Create account' }).click();
  }

  async register(username: string, email: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Email address').fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Create account' }).click();
  }
}