import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";
interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }: InputProps, ref) => {
  return (
    <FormControl>

      {!!label && <FormLabel htmlFor={name}>Email</FormLabel>}
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

    </FormControl>
  )
}
export const Input = forwardRef(InputBase);