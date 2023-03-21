import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { servicios, garantias, trabajaConNosotros, nuestrasOficinas } from './footerConst'
import { HiHomeModern } from 'react-icons/hi2';

const Footer = () => {
  return (
    <Box backgroundColor='blue.600'>
      <Box
        maxWidth='1280px'
        margin='0 auto'
        paddingY='1rem'
        paddingX={{ base: '2rem', sm: '.5rem' }}
      >
        <SimpleGrid
          columns='4'
          color='whiteAlpha.700'
          gap='1.7rem'
          minChildWidth='150px'
        >
          <Flex flexDirection='column'>
            <FooterHeader title='Nosotros' />
            {servicios.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection='column'>
            <FooterHeader title='Garantias' />
            {garantias.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>  <Flex flexDirection='column'>
            <FooterHeader title='Soy' />
            {trabajaConNosotros.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>  <Flex flexDirection='column'>
            <FooterHeader title='Nuestras Oficinas' />
            {nuestrasOficinas.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor='blue.900'
        display='flex'
        padding='.5rem'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        color='white'
      >
        {/* <Box
          display='flex'
          flexDirection='row'
          gap='2'
          alignItems='center'
        > */}
        <Flex
          alignItems='center'
          justifyContent='center'
          gap='5'
        >
          <Text fontSize='lg' fontWeight='black'>
            SAFE AND SOUND
          </Text>
          {/* </Box> */}
          <Text fontSize='xs' textAlign='center'>
            Todos los derechos reservados- Copyright SAFE AND SOUND 2021
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const FooterLink = ({ name, link }) => {
  return (
    <Text>
      <Link href={link}>{name}</Link>
    </Text>
  )
}

const FooterHeader = ({ title }) => {
  return (
    <Text as='h4' fontWeight='light' fontSize='xl'>{title}</Text>
  )
}
