export class TestDataGenerator {

    static generateUsername(prefix: string = 'user'): string {
        return `${prefix}${Date.now()}`;
    }

    static generateEmail(prefix: string = 'user', domain: string = 'test.com'): string {
        const username = this.generateUsername(prefix);
        return `${username}@${domain}`;
    }

    static generateTaskName(prefix: string = 'Task'): string {
        return `${prefix}-${Date.now()}`;
    }

    static generatePassword(): string {
        return `Password@${Date.now()}`;
    }
}