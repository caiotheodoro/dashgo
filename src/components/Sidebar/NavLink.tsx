import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

interface NavLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}
export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
    return (
        <Link href={href}>
        <ChakraLink display="flex" align="center" {...rest} >
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
        </Link>
    )
}