
import { Box, Flex, Heading, Button, Icon, Checkbox, Td, Text, Table, Tbody, Thead, Th, Tr, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';
import { useEffect } from 'react';

import { useUsers } from '../../services/hooks/users/useUsers';


export default function UserList() {
    const { data, error, isLoading, isFetching } = useUsers()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });


    useEffect(() => {

    }, []);
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="6">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">

                            Usuarios 

                            { isFetching && !isLoading && <Spinner size="sm" color={'grey.500'} ml={4}/> }
                        </Heading>
                        <Link href={"/users/create"} passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                                Criar novo usuário
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? <Flex justify={"center"}><Spinner /></Flex> :

                        error ? <Flex justify={"center"}>Falha ao obter dados.</Flex> :
                            (
                                <>
                                    <Table colorScheme="whiteAlpha">
                                        <Thead>
                                            <Tr>
                                                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                                    <Checkbox colorScheme="pink" />
                                                </Th>
                                                <Th >Usuario</Th>
                                                {isWideVersion && <Th >Data de cadastro</Th>}
                                                <Th w="8"></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {data.map((user) => (
                                                <Tr key={user.id}>
                                                    <Td px={["4", "4", "6"]}>
                                                        <Checkbox colorScheme="pink" />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion && <Td>
                                                        {user.createdAt}
                                                    </Td>}
                                                    <Td>
                                                        <Button
                                                            as="a"
                                                            size="sm"
                                                            fontSize="sm"
                                                            colorScheme="purple"
                                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                                            {isWideVersion ? 'Editar' : ''}
                                                        </Button>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                    <Pagination />
                                </>
                            )

                    }
                </Box>
            </Flex>
        </Box>
    )
}