import { request, APIRequestContext } from '@playwright/test';

export class AuthApi {
  private requestContext!: APIRequestContext;

  async init() {
    this.requestContext = await request.newContext({
      baseURL: process.env.BASE_URL,
    });
  }

  async login(username: string, password: string) {
    const response = await this.requestContext.post('/api/v1/login', {
      data: { username, password },
    });

    if (!response.ok()) {
      throw new Error(`Login failed: ${response.status()}`);
    }

    const body = await response.json();
    return body.token;
  }
}