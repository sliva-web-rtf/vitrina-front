import { Avatar, AvatarProps } from '@mui/material';

export const BaseAvatar = (props: AvatarProps) => {
    const { src, ...otherProps } = props;

    if (!src) {
        return (
            <Avatar
                src="/logo.svg"
                {...otherProps}
                sx={{
                    width: 'auto',
                    height: '35%',
                    ...otherProps.sx,
                }}
            />
        );
    }

    return (
        <Avatar
            src={src}
            {...otherProps}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                ...otherProps.sx,
            }}
        />
    );
};
