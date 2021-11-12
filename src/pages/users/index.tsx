
import { Box, Flex, Heading, Button, Icon, Checkbox, Td, Text, Table, Tbody, Thead, Th, Tr } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';
import { Sidebar } from '../../components/Sidebar';
export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="6">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuarios</Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                            Criar novo usuário
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th >Usuario</Th>
                                <Th >Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Caio Theodoro</Text>
                                        <Text fontSize="sm" color="gray.300">caio.atla@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04 de abril, 2020
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}