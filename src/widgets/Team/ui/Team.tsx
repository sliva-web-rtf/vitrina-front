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

    const amountPerBreakpoint = {
        xl: 5,
        l: 4,
        m: 3,
        s: 2,
        xs: 1,
    };

    return <Slider items={items} amountPerBreakpoint={amountPerBreakpoint} />;
};
