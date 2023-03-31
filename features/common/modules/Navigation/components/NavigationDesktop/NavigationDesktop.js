import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { HiHomeModern } from 'react-icons/hi2'
import Link from 'next/link';
import { navigationLinks } from '../../navigationConsts'

const NavigationDesktop = () => {
  return (
    <Box
      color='black.600'
      paddingY='.5rem'
      backgroundColor='white'
      display={{ base: 'none', md: 'block' }}
    >
      <Box
        maxWidth='1280px'
        margin='0 auto'
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
        >
          <Link href='/'>
            <Box
              display='flex'
              alignItems='center'>
              <Image
                src='./hero/garantimexlogo.png'
                alt='garantimex'
                width='100px'
              />
            </Box>
          </Link>
          <Flex
            gap='100'
            alignItems='center'
            fontWeight='medium'
          >
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
            {/* <Button
              padding='1.5rem'
              colorScheme='twitter'
              fontSize='0.8rem'
              fontWeight='medium'>
              CREATE LISTING
            </Button> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default NavigationDesktop;

//componente personalizado.  como lo usamos en las dos despues cambiar a un componente independiente y usarlo en ambos lados desktop/mobile

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems='center' gap='0.5rem'>
        {icon}
        {title}
      </Flex>
    </Link>
  )
}
