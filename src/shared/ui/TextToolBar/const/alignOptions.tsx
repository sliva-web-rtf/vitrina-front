import MuiFormatAlignLeftIcon from '@/shared/assets/Icons/MuiFormatAlignLeftIcon';
import MuiFormatAlignCenterIcon from '@/shared/assets/Icons/MuiFormatAlignCenterIcon';
import MuiFormatAlignRightIcon from '@/shared/assets/Icons/MuiFormatAlignRightIcon';
import MuiFormatAlignJustifyIcon from '@/shared/assets/Icons/MuiFormatAlignJustifyIcon';

export const alignOptions = [
    { value: 'left', label: 'По левому краю', icon: <MuiFormatAlignLeftIcon /> },
    { value: 'center', label: 'По центру', icon: <MuiFormatAlignCenterIcon /> },
    { value: 'right', label: 'По правому краю', icon: <MuiFormatAlignRightIcon /> },
    { value: 'justify', label: 'По ширине', icon: <MuiFormatAlignJustifyIcon /> },
];
