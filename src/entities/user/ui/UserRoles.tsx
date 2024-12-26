import { ellipsisTextStyle } from '@/shared/lib/const/ellipsisText';
import { Typography } from '@mui/material';
import { Role } from '../model/types/role';

interface UserRolesProps {
    roles?: Role[];
}

export const UserRoles = (props: UserRolesProps) => {
    const { roles } = props;

    if (!roles?.length) {
        return (
            <Typography fontWeight={700} color="primary">
                Нет роли
            </Typography>
        );
    }

    return (
        <span style={ellipsisTextStyle}>
            {roles.map((role, index) => (
                <span key={role.id}>
                    <Typography component="span" fontWeight={700} color="primary">
                        {role.name}
                    </Typography>
                    {index < roles.length - 1 && <span>, </span>}
                </span>
            ))}
        </span>
    );
};
