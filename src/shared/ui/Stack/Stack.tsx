import { Stack, StackProps } from '@mui/material';
import { forwardRef } from 'react';

const HStack = forwardRef<HTMLDivElement, StackProps>((props, ref) => <Stack ref={ref} direction="row" {...props} />);

const VStack = forwardRef<HTMLDivElement, StackProps>((props, ref) => <Stack ref={ref} {...props} />);

HStack.displayName = 'HStack';
VStack.displayName = 'VStack';

export { HStack, VStack };
