import { APIRequestContext, request } from '@playwright/test';

export class TaskApi {
  private requestContext!: APIRequestContext;

  async init(token: string) {
    this.requestContext = await request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createTask(title: string) {
    const response = await this.requestContext.put('/api/v1/projects/1/tasks', {

      data: {
        title,
      },
    });

    if (!response.ok()) {
      console.log(response.status());
      console.log(response.statusText());
      console.log(await response.text());
      console.log(await response.json());
      throw new Error(`Create task failed: ${response.status()}`);
    }

    return await response.json();
  }
}