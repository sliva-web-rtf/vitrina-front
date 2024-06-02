enum Semester {
    Spring = 'Весна',
    Autumn = 'Осень',
}

export const SemesterMap: Record<Semester, number> = {
    [Semester.Spring]: 1,
    [Semester.Autumn]: 2,
};
