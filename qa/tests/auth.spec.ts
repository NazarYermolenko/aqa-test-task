import { test, expect } from '@playwright/test';
import { RegisterPage } from '../src/pages/RegisterPage';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';

test('User can register successfully', async ({ page }) => {

  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  const username = `user${Date.now()}`;
  const email = `${username}@test.com`;
  const password = 'Password@123';

  await registerPage.navigate();
  await registerPage.register(username, email, password);

  await expect(await dashboard.isGreetingVisible()).toBeVisible();
  await dashboard.logout();

  await loginPage.navigate();
  await loginPage.login(username, password);

  await expect(await dashboard.isGreetingVisible()).toBeVisible();
  await dashboard.logout();

});