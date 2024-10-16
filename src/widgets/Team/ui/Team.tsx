import { User, UserCard } from '@/entities/user';
import { Slider } from '@/features/slider';
import { memo } from 'react';

interface TeamProps {
    team: User[];
}

export const Team = memo((props: TeamProps) => {
    const { team } = props;

    if (!team?.length) {
        return null;
    }

    const items = team.map((user) => <UserCard key={user.email} {...user} />);

    return <Slider items={items} itemWidth={300} />;
});

Team.displayName = 'Team';
