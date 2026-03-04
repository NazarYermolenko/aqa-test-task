import { test, expect } from '../src/fixtures/auth.fixture';
import { TaskPage } from '../src/pages/TaskPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { TestDataGenerator } from '../src/utils/testData';

test.describe('Task CRUD via UI', () => {

  test('User can Create, Update and Delete a task', async ({ page }) => {

    const taskPage = new TaskPage(page);
    const dashboard = new DashboardPage(page);

    await expect(await dashboard.isGreetingVisible()).toBeVisible();

    const taskName = TestDataGenerator.generateTaskName();
    await taskPage.createTask(taskName);
    await taskPage.expectTaskVisible(taskName);

    const updatedTask = `${taskName}-Updated`;
    await taskPage.updateTask(taskName, updatedTask);
    await taskPage.expectTaskVisible(updatedTask);

    await taskPage.deleteTask(updatedTask);
    await taskPage.expectTaskNotVisible(updatedTask);

  });

});