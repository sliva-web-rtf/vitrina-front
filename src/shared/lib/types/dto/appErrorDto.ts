export type ValidationErrorDto<T extends Record<string, any>> = {
    [P in keyof T]?: T[P] extends readonly (infer K extends Record<string, unknown>)[]
        ? ValidationErrorDto<K>[]
        : T[P] extends Record<string, unknown>
          ? ValidationErrorDto<T[P]>
          : string[];
};

export interface ApiErrorDto<TDto extends Record<string, any>> {
    readonly errors?: ValidationErrorDto<TDto>;

    readonly title?: string;
}
