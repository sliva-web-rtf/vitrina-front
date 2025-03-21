export interface SignInSchema {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface SignUpSchema {
    email: string;
    password: string;
    passwordConfirm: string;
    educationLevel: string;
    educationCourse: number;
    roleInTeam: string;
    firstName: string;
    lastName: string;
    surname: string;
}

export interface ConfirmSchema {
    userId: number;
    confirmationCode: number;
}
