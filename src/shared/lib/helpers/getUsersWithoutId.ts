interface User {
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];

    id?: number;
    patronymic?: string;
}

export const getUsersWithoutId = (users?: User[]) => {
    if (!users) return [];

    return users.map(user => {
        return { ...user, id: undefined };
    });
};
