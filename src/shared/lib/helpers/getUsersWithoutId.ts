interface User {
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];

    id?: number;
    patronymic?: string;
}

export const getUsersWithoutId = (users: User[]) => {
    return users.map(user => {
        return { ...user, id: undefined };
    });
};
