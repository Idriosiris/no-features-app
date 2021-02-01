export interface AppEventHandler {
    event: string;
    handler(data: any): void;
}