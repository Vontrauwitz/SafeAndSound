// import DefaultLayout from '@/features/Layouts/DefaultLayout';
// import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { sendContactForm } from './../lib/api';
// import { useRouter } from 'next/router';

// const initValues = {
//   name: "",
//   email: "",
//   subject: "",
//   message: "",
// }

// const initState = { values: initValues }

// const Contactanos = () => {
//   const [state, setState] = useState(initState)
//   const [touched, setTouched] = useState({})
//   const [isSubmitted, setIsSubmitted] = useState(false); // agregar nueva variable de estado

//   const { values, isLoading, error } = state;

//   const onBlur = ({ target }) => setTouched((prev) => ({
//     ...prev,
//     [target.name]: true
//   }))

//   const handleChange = ({ target }) => setState((prev) => ({
//     ...prev,
//     values: {
//       ...prev.values,
//       [target.name]: target.value,
//     },
//   }))

//   const onSubmit = async () => {
//     setState((prev) => ({
//       ...prev,
//       isLoading: true,
//     }));
//     try {
//       await sendContactForm(values)
//       setIsSubmitted(true);
//       setTimeout(() => {
//         useRouter.push('/');
//       }, 2000);
//     } catch (error) {
//       setState((prev) => ({
//         ...prev,
//         isLoading: false,
//         error: error.message,
//       }));
//     }
//   }

import DefaultLayout from '@/features/Layouts/DefaultLayout';
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { sendContactForm } from './../lib/api';
import { useRouter } from 'next/router';

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const initState = { values: initValues }

const Contactanos = () => {
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false); // agregar nueva variable de estado

  const { values, isLoading, error } = state;
  const router = useRouter();

  const onBlur = ({ target }) => setTouched((prev) => ({
    ...prev,
    [target.name]: true
  }))

  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values)
      setIsSubmitted(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }
  return (
    <DefaultLayout>
      <Container maxW='1250px' mt={12} marginBottom={8}>
        <Heading
          marginBottom={8}
        >
          Envianos tus comentarios, dudas y sugerencias:
        </Heading>
        {error && (
          <Textarea defaultValue={error} color='red.300' my={4} fontSize='xl'>
            {error}
          </Textarea>
        )}

        {isSubmitted ? (
          <Textarea color='green.300' my={4} fontSize='xl'>
            Enviado exitoso, pronto te contactaremos.
          </Textarea>
        ) : (
          <>
            <FormControl isRequired mb={5} isInvalid={touched.name && !values.name}>
              <FormLabel>Nombre</FormLabel>
              <Input
                type='text'
                name='name'
                errorBorderColor='red.300'
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired mb={5} isInvalid={touched.email && !values.email}>
              <FormLabel>E-mail</FormLabel>
              <Input
                type='email'
                name='email'
                errorBorderColor='red.300'
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired mb={5} isInvalid={touched.subject && !values.subject}>
              <FormLabel>Titulo</FormLabel>
              <Input
                type='text'
                name='subject'
                errorBorderColor='red.300'
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired mb={5} isInvalid={touched.message && !values.message}>
              <FormLabel>Mensaje</FormLabel>
              <Textarea
                type='text'
                name='message'
                errorBorderColor='red.300'
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
          </>
        )}
        <Button
          variant='outline'
          colorScheme='blue'
          isLoading={isLoading}
          isDisabled={!values.name || !values.email || !values.subject || !values.message}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Container>
    </DefaultLayout>
  );
}

export default Contactanos;
