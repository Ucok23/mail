interface Mail {
    from: Account;
    to: Account;
    date: string;
    subject: string;
    content?: string;
}

interface Account {
    name: string;
    username: string;
}

export type {Mail, Account}