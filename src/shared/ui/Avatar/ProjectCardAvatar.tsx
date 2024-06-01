import { Avatar, Stack, StackProps } from '@mui/material';
import logo from '@/shared/assets/logo-icon.png';

export const ProjectCardAvatar = (props: StackProps) => {
    return (
        <Stack alignItems="center" justifyContent="center" bgcolor="#F2F4FE" {...props}>
            <Avatar src={logo} sx={{ width: '80%', height: '80%' }} />
        </Stack>
    );
};
