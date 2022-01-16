import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        color: {
            'heading': '#F5F8FA',
            'highlight': '#FFBA08',
            'dark': '#47585B',
            'light': '#FFFFFF',
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global : {
            body: {
                bg: 'color.light',
                color: 'color.dark',
            }
        }
    }
  });