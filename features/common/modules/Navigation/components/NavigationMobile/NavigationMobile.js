import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import Link from 'next/link';
import { navigationLinks } from '../../navigationConsts';
import { HamburgerIcon } from '@chakra-ui/icons';
import { HiChevronDown } from 'react-icons/hi2';

function NavigationMobile() {
  return (
    <Box
      color='black.600'
      padding='.5rem'
      backgroundColor='white'
      display={{ base: 'block', md: 'none' }}
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <Link href='/'>
          <Box display='flex' gap='2' alignItems='center'>
            <Image
              src='./hero/garantimexlogo.png'
              alt='garantimex'
              width='100px'
            />
          </Box>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

const NavigationLink = ({ title, link, icon, sublinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box position="relative">
      {sublinks ? (
        <Box
          position="relative"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        >
          <Link href={link}>
            <Flex
              alignItems="center"
              gap="0.5rem"
              _hover={{ textDecoration: "underline" }}
              _selected={{ backgroundColor: "gray.100" }}
              onClick={() => setIsSelected(!isSelected)}
            >
              {icon}
              <Text
                fontWeight="medium"
                color="black.600"
              >
                {title}
              </Text>
            </Flex>
          </Link>
          {isOpen && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              minWidth="120px"
              zIndex="10"
              backgroundColor="white"
              boxShadow="md"
              py="1rem"
            >
              <Box maxWidth="1280px" margin="0 auto">
                <Flex flexWrap="wrap" gap="1rem">
                  {sublinks.map((item) => (
                    <Box key={item.title}>
                      <Link href={item.link}>
                        <Text
                          display="block"
                          padding="0.5rem"
                          color="black.600"
                          _hover={{ backgroundColor: "gray.100" }}
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
          <Flex
            alignItems="center"
            gap="0.5rem"
            _hover={{ textDecoration: "underline" }}
            _selected={{ backgroundColor: "gray.100" }}
            onClick={() => setIsSelected(!isSelected)}
          >
            {icon}
            <Text
              fontWeight="medium"
              color="black.600"
            >
              {title}
            </Text>
            {title === "Productos" && <Box as={HiChevronDown} />}
          </Flex>
        </Link>
      )}
    </Box>
  );
};

export default NavigationMobile;

