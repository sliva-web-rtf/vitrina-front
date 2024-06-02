import { Avatar, Stack, StackProps } from '@mui/material';
import logo from '@/shared/assets/logo-icon.png';

interface ProjectCardAvatarProps extends StackProps {
    readonly logoSrc?: string;
}

export const ProjectCardAvatar = (props: ProjectCardAvatarProps) => {
    const { logoSrc } = props
    return (
        <Stack alignItems="center" justifyContent="center" bgcolor="#F2F4FE" {...props}>
            <Avatar src={logoSrc && logoSrc !== "" ? logoSrc : logo} sx={{ width: '80%', height: '80%', border: 0 }} />
        </Stack>
    );
};
