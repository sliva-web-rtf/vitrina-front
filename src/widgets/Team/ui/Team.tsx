import { User, UserCard } from '@/entities/user';
import { Slider } from '@/features/slider';

interface TeamProps {
    team: User[];
}

export const Team = (props: TeamProps) => {
    const { team } = props;

    if (!team?.length) {
        return null;
    }

    const items = team.map((user) => <UserCard key={user.id} {...user} />);

    return <Slider items={items} amountPerSlide={4} />;
};
