'use client';

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { memo, ReactNode } from 'react';
import { BaseButton } from '@/shared/ui';
import classNames from './BackButton.module.scss';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
    readonly children?: ReactNode;
}

export const BackButton = memo((props: BackButtonProps) => {
    const { children } = props;
    const router = useRouter();

    const handleClick = () => router.push('/');

    return (
        <BaseButton
            variant="outlined"
            className={classNames.button}
            sx={(theme) => ({
                alignSelf: 'flex-start',
                padding: [theme.spacing(1.5), theme.spacing(3)].join(' '),
                borderColor: 'var(--border-color)',
                borderRadius: theme.spacing(1),
                color: 'var(--font-color)',
                backgroundColor: theme.palette.background.paper,
            })}
            startIcon={<KeyboardBackspaceRoundedIcon />}
            onClick={handleClick}
        >
            {children || 'Вернуться к витрине'}
        </BaseButton>
    );
});

BackButton.displayName = 'BackButton';
