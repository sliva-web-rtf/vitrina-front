interface User {
    id?: number;
    email: string;
    fullname: string;
    roles: string[];
}

export const getUsersWithoutId = (users: User[]) => {
    return users.map(user => {
        return { ...user, id: undefined };
    });
};
