import { Footer } from '@/widgets/Footer';
import { Box } from '@mui/material';
import { ReactNode } from 'react'
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box className={styles.container}>
        {children}
      </Box>
      <Footer />
    </>
  )
}