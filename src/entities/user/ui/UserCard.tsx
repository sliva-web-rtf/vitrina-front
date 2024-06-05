import classNames from './UserCard.module.scss';
import { User } from '../model/types/user';
import { Stack, Typography } from '@mui/material';
import { ChipsList } from '@/shared/ui';
import { memo } from 'react';

export const UserCard = memo((props: User) => {
    const { firstName, lastName, patronymic, email, roles } = props;
    return (
        <Stack className={classNames.card}>
            <Stack className={classNames.content}>
                <ChipsList items={roles?.length ? roles : ['Не указана']} />
                <Stack>
                    <Typography variant="h5">
                        {lastName} {firstName} {patronymic}
                    </Typography>
                    <Typography color="secondary" variant="subtitle1">
                        {email || 'почта не указана'}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
});
