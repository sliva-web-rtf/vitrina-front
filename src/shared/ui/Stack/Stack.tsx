import { Stack, StackProps } from '@mui/material';

const HStack = (props: StackProps) => <Stack direction="row" {...props} />;
const VStack = (props: StackProps) => <Stack {...props} />;

export { HStack, VStack };
