
import { Box, Flex, Heading, Divider, HStack, VStack, Button, SimpleGrid } from '@chakra-ui/react';
import { Header } from '../../components/Header/index';
import { Sidebar } from '../../components/Sidebar/index';
import { Input } from '../../components/Form/Input';
import Link from 'next/link';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';

type createUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('Email invalido').required("Email obrigatório"),
    password: yup.string().required('Senha obrigatória').min(6, 'Senha deve ter no minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem'),
})


export default function CreateUser() {
    const { register, handleSubmit, control } = useForm<createUserFormData>({
        resolver: yupResolver(createUserFormSchema),
    });

    const { isSubmitting, errors } = useFormState({
        control
    })


    const handleCreateUser: SubmitHandler<createUserFormData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        console.log(values)
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box onSubmit={handleSubmit(handleCreateUser)} as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing={6}>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input id="name" name="name" label="Nome Completo" {...register("name")} error={errors.name} />
                            <Input id="email" name="email" label="E-mail" type="email" {...register('email')} error={errors.email} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input id="password" name="password" label="Senha" type="password" {...register('password')} error={errors.password} />
                            <Input id="password_confirmation" name="password_confirmation" label="Confirmar Senha" type="password" {...register('password_confirmation')} error={errors.password_confirmation} />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users">
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" type='submit' isLoading={isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}