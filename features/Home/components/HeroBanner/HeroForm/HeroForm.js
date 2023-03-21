import { Box, Button, Checkbox, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form'

const HeroForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  //para conectar ocn el backend ej mailchimp etc...
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Box width='100%'
        padding='2rem'
        borderRadius='sm'
        backgroundColor='white'
        color='gray.700'
      >
        <Text
          fontSize='xl'
          fontWeight='bold'
        >
          Infografía en PDF Gratis
        </Text>
        <Text fontSize='lg'>
          Completa el formulario para poder recibir tu guía de servicio
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            {/* revisar todas las validaciones de react-hook-form van en required*/}
            <Input
              marginTop='1.3rem'
              id='name'
              type='text'
              placeholder='Nombre'
              {...register('name', { required: true })}
            />
            {errors.name && (
              <Text fontSize='xs' color='red.400'>{errors.name.type}</Text>
            )}
            <Flex gap={{ base: '0', sm: '1rem' }} flexDirection={{ base: 'Column', sm: 'row' }}>
              <Input
                marginTop='1.3rem'
                id='email'
                type='text'
                placeholder='E-mail'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <Text fontSize='xs' color='red.400'>{errors.email.type}</Text>
              )}
              <Input
                marginTop='1.3rem'
                id='phone'
                type='phone'
                placeholder='Telefono'
                {...register('phone', { required: true })}
              />
              {errors.phone && (
                <Text fontSize='xs' color='red.400'>{errors.phone.type}</Text>
              )}
            </Flex>
            <Checkbox
              fontSize='xs'
              marginTop='1.3rem'
              id='lpdp'
              type='checkbox'
              placeholder='LPDP'
              {...register('lpdp', { required: true })}
            >
              Consiento de conformidad con las disposiciones establecidas en la Ley Federal de Protección de Datos Personales en Posesión de Particulares enviar mis datos personales.
            </Checkbox>
            {errors.lpdp && (
              <Text fontSize='xs' color='red.400'>{errors.lpdp.type}</Text>
            )}
          </FormControl>
          <Button
            type='submit'
            colorScheme='red'
            width='100%'
            fontSize='xl'
            padding='2rem'
            marginTop='2rem'

          >Descargar ahora</Button>
        </form>
      </Box>
    </>
  );
}

export default HeroForm;
