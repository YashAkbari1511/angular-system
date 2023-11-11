interface Scripts {
    name: string;
    src: string;
    isUrl: boolean;
    loadIn?: string;
}
export const ScriptStore: Scripts[] = [
    { name: 'plaid', src: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js', isUrl: true },
    { name: 'stripe', src: 'https://js.stripe.com/v3/', isUrl: true },
];