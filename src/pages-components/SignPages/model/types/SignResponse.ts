export interface SignInResponse {
    isSuccess: boolean;
    message: string | null;
    confirmationCode: number;
    userId: number;
}

export interface SignUpResponse {
    userId: number;
    confirmationCode: number;
}

export interface ConfirmResponse {}
