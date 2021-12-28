
import { Box, Flex, Heading, Divider, HStack, VStack,Button, SimpleGrid } from '@chakra-ui/react';
import { Header } from '../../components/Header/index';
import { Sidebar } from '../../components/Sidebar/index';
import { Input } from '../../components/Form/Input';
import Link from 'next/link';
export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                    <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing={6}>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="E-mail" type="email" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="password" label="Senha" type="password" />
                            <Input name="password_confirmation" label="Confirmar Senha" type="password" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users">
                            <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}