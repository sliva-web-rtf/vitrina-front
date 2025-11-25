type Token = {
    token: string;
    expiresIn: number;
};

export interface ConfirmResponse {
    isSuccess: boolean;
    message: string | null;
    userId: number;
    token: Token;
}
