interface User {
    id?: number;
    email: string;
    fullname: string;
    roles: string[];
}

export const getUsersWithoutId = (users: User[]) => {
    return users.map(user => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return { ...user, id: undefined };
    });
};
