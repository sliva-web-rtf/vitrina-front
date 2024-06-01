import { Skeleton, Stack } from '@mui/material';
import { BaseChip } from '@/shared/ui';
import { memo } from 'react';
import { stringToColor } from '@/shared/lib/helpers/stringToColor.ts';

interface ChipsListProps {
    readonly items?: Array<string>;
    readonly columnGap?: number;
    readonly rowGap?: number;
    readonly big?: boolean;
}

const bigStyles = {
    fontSize: 14,
    padding: '8px 16px',
    height: 'unset',
};

export const ChipsList = memo((props: ChipsListProps) => {
    const { items, columnGap, rowGap, big } = props;

    const styles = big ? bigStyles : null;

    return (
        <Stack direction="row" columnGap={columnGap || 1} rowGap={rowGap || 0.5} sx={{ flexWrap: 'wrap' }}>
            {items?.map(item => (
                <BaseChip
                    key={item}
                    label={item}
                    sx={{
                        bgcolor: stringToColor(item),
                        ...styles,
                    }}
                />
            ))}
        </Stack>
    );
});

export const ChipsListSkeleton = (props: Omit<ChipsListProps, 'items'>) => {
    const { columnGap, rowGap } = props;

    return (
        <Stack direction="row" columnGap={columnGap || 1} rowGap={rowGap || 0.5} sx={{ flexWrap: 'wrap' }}>
            <Skeleton width="40%" height={32} sx={{ borderRadius: 16 }} />
            <Skeleton width="20%" height={32} sx={{ borderRadius: 16 }} />
        </Stack>
    );
};
