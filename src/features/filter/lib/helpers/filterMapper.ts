import { SelectOption } from '@/shared/lib/types/selectOption';

export const mapFilterDtoToModel = (dto: Array<string>): Array<SelectOption> =>
    dto.map(value => ({
        label: value,
        value,
    }));
