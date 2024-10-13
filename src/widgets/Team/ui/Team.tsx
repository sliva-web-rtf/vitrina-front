import { User, UserCard } from '@/entities/user';
import { HStack } from '@/shared/ui';
import { memo } from 'react';
import styles from './Team.module.scss';

interface TeamProps {
    team: User[];
}

export const Team = memo((props: TeamProps) => {
    const { team } = props;

    if (!team?.length) {
        return null;
    }

    return (
        <HStack className={styles.container}>
            {team.map((user) => (
                <UserCard key={user.email} {...user} />
            ))}
        </HStack>
    );
});

Team.displayName = 'Team';
