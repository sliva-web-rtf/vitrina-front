import defaultUserImage from '@/shared/assets/defaultUserImage.jpg';
import { lowercased } from '@/shared/lib/helpers/lowercased';
import { MailtoLink, VStack } from '@/shared/ui';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { User } from '../model/types/user';
import classNames from './UserCard.module.scss';
import { UserRoles } from './UserRoles';

export const UserCard = (props: User) => {
    const { image, firstName, lastName, patronymic, description, email, roles } = props;
    const fullName = `${lastName} ${firstName} ${patronymic}`;
    const lowercasedEmail = lowercased(email);

    return (
        <VStack className={classNames.card}>
            <Image src={image || defaultUserImage} alt={fullName} />
            <VStack className={classNames.content}>
                <UserRoles roles={roles} />

                <VStack spacing={1}>
                    <Typography variant="h5">
                        {lastName} {firstName} <br />
                        {patronymic}
                    </Typography>
                    <Typography>{description}</Typography>
                </VStack>

                <MailtoLink email={lowercasedEmail}>
                    <Typography color="secondary" fontWeight={700}>
                        {lowercasedEmail}
                    </Typography>
                </MailtoLink>
            </VStack>
        </VStack>
    );
};
