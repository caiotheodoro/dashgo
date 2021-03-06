import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error = null, label, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>

      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bg: 'gray.900' }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
export const Input = forwardRef(InputBase);