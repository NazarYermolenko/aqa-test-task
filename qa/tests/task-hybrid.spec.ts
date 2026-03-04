import { test, expect } from '@playwright/test';
import { AuthApi } from '../src/api/AuthApi';
import { TaskApi } from '../src/api/TaskApi';
import { LoginPage } from '../src/pages/LoginPage';
import { TaskPage } from '../src/pages/TaskPage';
import { TestDataGenerator } from '../src/utils/testData';

test('Hybrid: API create → UI verify', async ({ page }) => {
  const authApi = new AuthApi();
  await authApi.init();

  const token = await authApi.login(
    process.env.TEST_USERNAME!,
    process.env.TEST_PASSWORD!
  );

  const taskApi = new TaskApi();
  await taskApi.init(token);

  const taskName = TestDataGenerator.generateTaskName('Hybrid');
  await taskApi.createTask(taskName);

  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(
    process.env.TEST_USERNAME!,
    process.env.TEST_PASSWORD!
  );

  const taskPage = new TaskPage(page);
  await taskPage.expectTaskVisible(taskName);

  await taskPage.taskItem(taskName).click();
  await taskPage.deleteTask(taskName);
  await taskPage.expectTaskNotVisible(taskName);

});