import { Page, Locator, expect } from '@playwright/test';

export class TaskPage {
  constructor(private page: Page) { }

  private taskInput = () => this.page.getByPlaceholder('Add a task…');

  taskItem(taskName: string): Locator {
    return this.page.getByText(taskName, { exact: true });
  }

  async createTask(taskName: string) {
    await this.taskInput().fill(taskName);
    await this.page.keyboard.press('Enter');
  }

  async updateTask(oldName: string, newName: string) {
    const task = this.taskItem(oldName);
    await task.click();
    const title = this.page.getByRole('heading', { name: oldName });
    await title.click();
    await title.fill(newName);
    await this.page.keyboard.press('Enter');
  }

  async deleteTask(taskName: string) {
    const task = this.taskItem(taskName);
    await this.page.getByRole('button', { name: /delete/i }).click();
    await this.page.getByRole('button', { name: /Do it!/i }).click();
  }

  async expectTaskVisible(taskName: string) {
    await expect(this.taskItem(taskName)).toBeVisible();
  }

  async expectTaskNotVisible(taskName: string) {
    await expect(this.taskItem(taskName)).not.toBeVisible();
  }
}