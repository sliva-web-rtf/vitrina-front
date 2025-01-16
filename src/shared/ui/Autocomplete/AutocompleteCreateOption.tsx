import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { BaseField } from '../Field/BaseField';

type OptionType = {
    inputValue?: string;
    title: string;
};

type AutocompleteCreateOptionProps = {
    options: (OptionType | string)[];
    value: string | null;
    onChange: (v: string | null) => void;

    label?: string;
};

const filter = createFilterOptions<OptionType>();

export const AutocompleteCreateOption = (props: AutocompleteCreateOptionProps) => {
    const { label, options, value, onChange } = props;
    const autocompleteOptions: OptionType[] = options.map(option =>
        typeof option === 'string' ? { title: option } : option,
    );

    return (
        <Autocomplete
            value={value}
            onChange={(_, newValue) => {
                if (typeof newValue === 'string') {
                    onChange(newValue);
                } else if (newValue?.inputValue) {
                    onChange(newValue.inputValue);
                } else {
                    onChange(newValue?.title ?? null);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                const isExisting = options.some(option => inputValue === option.title);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `Добавить "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            options={autocompleteOptions}
            getOptionLabel={option => {
                if (typeof option === 'string') {
                    return option;
                }
                if (option.inputValue) {
                    return option.inputValue;
                }
                return option.title;
            }}
            renderOption={(props, option) => {
                // @ts-expect-error игнорим key
                const { key, ...optionProps } = props;

                return (
                    <li key={key} {...optionProps}>
                        {option.title}
                    </li>
                );
            }}
            freeSolo
            renderInput={params => <BaseField {...params} label={label} />}
        />
    );
};
