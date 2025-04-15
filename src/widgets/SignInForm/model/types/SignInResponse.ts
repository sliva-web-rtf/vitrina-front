export interface SignInResponse {
    isSuccess: boolean;
    message: string | null;
    confirmationCode: number;
    userId: number;
}
