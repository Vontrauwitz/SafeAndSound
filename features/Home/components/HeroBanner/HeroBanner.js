import { Box, Fade, Text } from '@chakra-ui/react';
import React from 'react';
import HeroForm from './HeroForm/HeroForm';

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position='relative'
        minHeight={{ base: '110vh', sm: '60vh' }}
        backgroundImage={`url('./hero/madrehijaplaya.png')`}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundAttachment='fixed'
      >
        <Box
          position='absolute'
          width='100%'
          height='100%'
          opacity='0.45'
          backgroundColor='blue.900'
        />
        <Box
          display='flex'
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems='center'
          justifyContent={{ base: 'flex-start', sm: 'space-between' }}
          maxWidth='1280px'
          position='absolute'
          color='white'
          fontWeight='light'
          left='0'
          right='0'
          bottom='0'
          top='0'
          margin='0 auto'
          padding='2rem'
        >
          <Box
            width={{ base: '100%', sm: '50%' }}
            padding='1rem'
          >
            <Text
              fontSize={{ base: '3xl', sm: '4xl' }}
              lineHeight='shorter'
              marginBottom='1.5rem'
            >
              Descarga nuestra <strong>infografía de nuestras garantias</strong> hoy...
            </Text>
            <Text fontSize={{ base: 'sm', sm: 'sm' }}>
              Un PDF gratis con todos nuestros servicios y coberturas para que mantengas protegido tu futuro.
            </Text>
          </Box>
          <Box
            width={{ base: '100%', sm: 'auto' }}
            marginTop={{ base: '2rem', sm: '0' }}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

export default HeroBanner;
