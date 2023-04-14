import react, { useState } from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import { FaUsers, FaProductHunt, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { navigationLinks } from '../../navigationConsts';

const NavigationDesktop = () => {
  return (
    <Box
      color='black.600'
      paddingY='.5rem'
      backgroundColor='white'
      display={{ base: 'none', md: 'block' }}
    >
      <Box maxWidth='1280px' margin='0 auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Link href='/'>
            <Box display='flex' alignItems='center'>
              <Image
                src='./hero/garantimexlogo.png'
                alt='garantimex'
                width='100px'
              />
            </Box>
          </Link>
          <Flex gap='100' alignItems='center' fontWeight='medium'>
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon, sublinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box position='relative'>
      {sublinks ? (
        <Box
          position='relative'
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        >
          <Link href={link}>
            <Flex alignItems='center' gap='0.5rem'>
              {icon}
              {title}
            </Flex>
          </Link>
          {isOpen && (
            <Box
              position='absolute'
              top='100%'
              left='0'
              minWidth='120px'
              zIndex='10'
              backgroundColor='white'
              boxShadow='md'
              py='1rem'
            >
              <Box maxWidth='1280px' margin='0 auto'>
                <Flex flexWrap='wrap' gap='1rem'>
                  {sublinks.map((item) => (
                    <Box key={item.title}>
                      <Link href={item.link}>
                        <Text
                          display='block'
                          padding='0.5rem'
                          color='black.600'
                          _hover={{ backgroundColor: 'gray.100' }}
                        >
                          {item.title}
                        </Text>
                      </Link>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <Link href={link}>
          <Flex alignItems='center' gap='0.5rem'>
            {icon}
            {title}
          </Flex>
        </Link>
      )}
    </Box>
  );
};
