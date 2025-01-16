import { ellipsisTextStyle } from '@/shared/lib/const/ellipsisText';
import { lowercased } from '@/shared/lib/helpers/lowercased';
import { protocolless } from '@/shared/lib/helpers/protocolless';
import { DeepLink, ProjectCardAvatar, VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import { User } from '../model/types/user';
import classNames from './UserCard.module.scss';
import { UserRoles } from './UserRoles';

export const UserCard = (props: User) => {
    const { firstName, lastName, patronymic, description, email, roles } = props;
    const lowercasedEmail = lowercased(email);

    return (
        <VStack className={classNames.card}>
            {/* <Image priority={true} src={image || defaultUserImage} alt={`${lastName} ${firstName} ${patronymic}`} /> */}
            <ProjectCardAvatar className={classNames.image} />
            <VStack className={classNames.content}>
                <UserRoles roles={roles} />

                <VStack spacing={1}>
                    <Typography variant="h5">
                        {lastName} {firstName} <br />
                        {patronymic}
                    </Typography>
                    <Typography>{description}</Typography>
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
