import { Typography } from '@mui/material';

interface UserRolesProps {
    roles?: string[];
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
        <span>
            {roles.map((role, index) => (
                <span key={role}>
                    <Typography component="span" key={role} fontWeight={700} color="primary">
                        {role}
                    </Typography>
                    {index < roles.length - 1 && <span>, </span>}
                </span>
            ))}
        </span>
    );
};
