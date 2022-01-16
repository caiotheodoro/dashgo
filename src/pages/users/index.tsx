
import { Box, Flex, Heading, Button, Icon, Checkbox, Td, Text, Table, Tbody, Thead, Th, Tr, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';
import { useEffect } from 'react';
import { useQuery } from 'react-query';


export default function UserList() {
    const { data, error, isLoading } = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = response.json()
        return data
    });

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
                        <Heading size="lg" fontWeight="normal">Usuarios</Heading>
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
                                        <Tr>
                                            <Td px={["4", "4", "6"]}>
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">Caio Theodoro</Text>
                                                    <Text fontSize="sm" color="gray.300">caio.atla@gmail.com</Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && <Td>
                                                04 de abril, 2020
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