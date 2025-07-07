import { Typography } from '@mui/material';

import { ellipsisTextStyle } from '@/shared/lib/const/ellipsisText';
import { lowercased } from '@/shared/lib/helpers/lowercased';
import { protocolless } from '@/shared/lib/helpers/protocolless';
import { DeepLink, ProjectCardAvatar, VStack } from '@/shared/ui';
import { User } from '../../model/types/user';
import classNames from './UserCard.module.scss';
import { UserRoles } from '../UserRoles';

export const UserCard = (props: User) => {
    const { email } = props;
    const lowercasedEmail = lowercased(email);

    return (
        <VStack className={classNames.card}>
            <ProjectCardAvatar className={classNames.image} />
            <VStack className={classNames.content}>
                {/* <UserRoles roles={roles} /> */}

                <VStack spacing={1}>
                    <Typography variant="h5">
                        Иванов Иван <br />
                        Иванович
                    </Typography>
                    <Typography>Какое-то описание</Typography>
                </VStack>

                <DeepLink link={lowercasedEmail}>
                    <Typography color="secondary" fontWeight={700} sx={ellipsisTextStyle}>
                        {protocolless(lowercasedEmail)}
                    </Typography>
                </DeepLink>
            </VStack>
        </VStack>
    );
};
