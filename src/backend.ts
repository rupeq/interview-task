export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: 'active' | 'inactive';
    company: string;
    role: string;
}

export interface SearchParams {
    query?: string;
    emailDomain?: string;
    status?: 'active' | 'inactive' | 'all';
    page?: number;
    limit?: number;
}

export interface SearchResponse {
    users: User[];
    total: number;
    page: number;
    totalPages: number;
}

const MOCK_USERS: User[] = [
    {
        id: 1,
        name: 'Александр Петров',
        email: 'a.petrov@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=1',
        status: 'active',
        company: 'Яндекс',
        role: 'Senior Developer',
    },
    {
        id: 2,
        name: 'Мария Иванова',
        email: 'm.ivanova@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?img=2',
        status: 'active',
        company: 'VK',
        role: 'Tech Lead',
    },
    {
        id: 3,
        name: 'Дмитрий Смирнов',
        email: 'd.smirnov@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=3',
        status: 'inactive',
        company: 'Ozon',
        role: 'Middle Developer',
    },
    {
        id: 4,
        name: 'Елена Козлова',
        email: 'e.kozlova@outlook.com',
        avatar: 'https://i.pravatar.cc/150?img=4',
        status: 'active',
        company: 'Сбер',
        role: 'Frontend Developer',
    },
    {
        id: 5,
        name: 'Игорь Васильев',
        email: 'i.vasiliev@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
        status: 'active',
        company: 'Тинькофф',
        role: 'Senior Developer',
    },
    {
        id: 6,
        name: 'Анна Новикова',
        email: 'a.novikova@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?img=6',
        status: 'inactive',
        company: 'Авито',
        role: 'Middle Developer',
    },
    {
        id: 7,
        name: 'Сергей Федоров',
        email: 's.fedorov@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=7',
        status: 'active',
        company: 'Яндекс',
        role: 'Team Lead',
    },
    {
        id: 8,
        name: 'Ольга Морозова',
        email: 'o.morozova@outlook.com',
        avatar: 'https://i.pravatar.cc/150?img=8',
        status: 'active',
        company: 'Mail.ru',
        role: 'Senior Developer',
    },
    {
        id: 9,
        name: 'Павел Волков',
        email: 'p.volkov@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?img=9',
        status: 'inactive',
        company: 'Lamoda',
        role: 'Middle+ Developer',
    },
    {
        id: 10,
        name: 'Татьяна Соколова',
        email: 't.sokolova@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=10',
        status: 'active',
        company: 'Wildberries',
        role: 'Frontend Developer',
    },
    {
        id: 11,
        name: 'Андрей Лебедев',
        email: 'a.lebedev@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=11',
        status: 'active',
        company: 'VK',
        role: 'Middle Developer',
    },
    {
        id: 12,
        name: 'Наталья Зайцева',
        email: 'n.zaitseva@outlook.com',
        avatar: 'https://i.pravatar.cc/150?img=12',
        status: 'inactive',
        company: 'Ozon',
        role: 'Senior Developer',
    },
];

const API_CONFIG = {
    minDelay: 300, // минимальная задержка
    maxDelay: 800, // максимальная задержка
    errorRate: 0.05, // 5% шанс ошибки
};

const randomDelay = (): Promise<void> => {
    const delay =
        Math.random() * (API_CONFIG.maxDelay - API_CONFIG.minDelay) +
        API_CONFIG.minDelay;
    return new Promise((resolve) => setTimeout(resolve, delay));
};

const maybeThrowError = (): void => {
    if (Math.random() < API_CONFIG.errorRate) {
        throw new Error('Network error: Failed to fetch users');
    }
};

export const searchUsers = async (
    params: SearchParams = {}
): Promise<SearchResponse> => {
    await randomDelay();
    maybeThrowError();

    const {
        query = '',
        emailDomain = 'all',
        status = 'all',
        page = 1,
        limit = 10,
    } = params;

    let filtered = MOCK_USERS;

    if (query.trim()) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter(
            (user) =>
                user.name.toLowerCase().includes(lowerQuery) ||
                user.email.toLowerCase().includes(lowerQuery) ||
                user.company.toLowerCase().includes(lowerQuery)
        );
    }

    if (emailDomain !== 'all') {
        filtered = filtered.filter((user) =>
            user.email.endsWith(`@${emailDomain}`)
        );
    }

    if (status !== 'all') {
        filtered = filtered.filter((user) => user.status === status);
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const users = filtered.slice(start, end);

    return {
        users,
        total,
        page,
        totalPages,
    };
};

export const getEmailDomains = (): string[] => {
    const domains = new Set(
        MOCK_USERS.map((user) => user.email.split('@')[1])
    );
    return Array.from(domains).sort();
};

export const getUserById = async (id: number): Promise<User | null> => {
    await randomDelay();
    maybeThrowError();

    return MOCK_USERS.find((user) => user.id === id) || null;
};

export const forceError = async (): Promise<never> => {
    await randomDelay();
    throw new Error('Forced error for testing');
};

export const setApiConfig = (config: Partial<typeof API_CONFIG>): void => {
    Object.assign(API_CONFIG, config);
};