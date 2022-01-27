
import { Box, Flex, Link, Heading, Button, Icon, Checkbox, Td, Text, Table, Tbody, Thead, Th, Tr, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';
import { Sidebar } from '../../components/Sidebar';
import NextLink from 'next/link';
import {  useState } from 'react';

import { useUsers } from '../../services/hooks/users/useUsers';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';


export default function UserList() {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching } = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });


    async function handlePrefetchUser(userId: string){
        await queryClient.prefetchQuery(['user', userId], async () =>{
            const response = await api.get(`users/${userId}`)

            return response.data
        }, {
            staleTime: 1000 * 60 * 10,
        });
    }
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
                        <NextLink href={"/users/create"} passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                                Criar novo usuário
                            </Button>
                        </NextLink>
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
                                            {data.users.map((user) => (
                                                <Tr key={user.id}>
                                                    <Td px={["4", "4", "6"]}>
                                                        <Checkbox colorScheme="pink" />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Link  color={'purple.400'} onMouseEnter={() => handlePrefetchUser(String(user.id))}>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                            </Link>
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
                                    <Pagination  totalCountOfRegisters={data.totalCount} currentPage={page} registersPerPage={10} onPageChange={setPage} />
                                </>
                            )

                    }
                </Box>
            </Flex>
        </Box>
    )
}