import { styled } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';

export const StyledOtpInput = styled(MuiOtpInput)(() => ({
    '& .MuiOtpInput-TextField': {
        backgroundColor: '#F2F4F7',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0px',
        borderRadius: '100px',
    },
}));
