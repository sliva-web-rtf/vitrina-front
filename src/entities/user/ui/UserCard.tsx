import classNames from './UserCard.module.scss';
import { User } from '../model/types/user';
import { Avatar, Stack, Typography } from '@mui/material';
import { ChipsList } from '@/shared/ui';
import { bytesToImage } from '@/shared/lib/helpers/bytesToImage.ts';
import { memo } from 'react';

export const UserCard = memo((props: User) => {
    const { firstName, lastName, patronymic, email, roles, avatar } = props;
    return (
        <Stack className={classNames.card}>
            <Avatar variant="rounded" src={bytesToImage(avatar)} sx={{ width: 80, height: 80 }} />
            <Stack className={classNames.content}>
                <ChipsList items={roles?.length ? roles : ['Не указана']} />
                <Stack>
                    <Typography variant="h5">
                        {firstName} {lastName} {patronymic}
                    </Typography>
                    <Typography color="secondary" variant="subtitle1">
                        {email || 'почта не указана'}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
});
