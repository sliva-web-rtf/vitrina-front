import { BaseAvatar } from '@/shared/ui';
import { Stack, StackProps } from '@mui/material';

interface ProjectCardAvatarProps extends StackProps {
    readonly logoSrc?: string;
}

export const ProjectCardAvatar = (props: ProjectCardAvatarProps) => {
    const { logoSrc, ...stackProps } = props;

    return (
        <Stack alignItems="center" justifyContent="center" bgcolor="#F2F4FE" {...stackProps}>
            <BaseAvatar src={logoSrc} alt="" sx={{ border: 0 }} />
        </Stack>
    );
};
