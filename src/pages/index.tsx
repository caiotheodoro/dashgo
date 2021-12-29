import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm, SubmitHandler, useFormState } from 'react-hook-form'

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, control } = useForm<SignInFormData>()
  
  const {isSubmitting } = useFormState({
    control
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 1200))

   console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" label="email" type="email" {...register('email')} />
          <Input name="password" label="password" type="password" {...register('password')} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >

          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
