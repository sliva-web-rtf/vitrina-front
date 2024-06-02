import { SemesterMap } from '../types/semester';

export const semesterOptions = Object.entries(SemesterMap).map(([key, value]) => ({
    label: key,
    value: value,
}));
