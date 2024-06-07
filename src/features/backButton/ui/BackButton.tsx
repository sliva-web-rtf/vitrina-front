import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { memo, ReactNode } from 'react';
import { BaseButton } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import classNames from './BackButton.module.scss';

interface BackButtonProps {
    readonly children?: ReactNode;
}

export const BackButton = memo((props: BackButtonProps) => {
    const { children } = props;
    const navigate = useNavigate();

    const handleClick = () => navigate('/');

    return (
        <BaseButton
            variant="outlined"
            className={classNames.button}
            sx={theme => ({
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
