export interface AlertMessage {
    title: string,
    message: string,
    type: 'success' | 'danger' | 'warning' | 'info',
    time: number,
    createdAt: number
}