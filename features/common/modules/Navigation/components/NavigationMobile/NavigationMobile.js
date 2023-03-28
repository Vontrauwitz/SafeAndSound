import React from 'react';
import { Box, Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { HiHomeModern } from 'react-icons/hi2'
import Link from 'next/link';
import { navigationLinks } from '../../navigationConsts'
import { HamburgerIcon } from '@chakra-ui/icons';

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
            {/* <HiHomeModern size='30' />
            <Text fontSize='2xl' fontWeight='black'>
              CASAZ (m)
            </Text> */}
            <Image
              src='./hero/garantimex.png'
              alt='SAS'
              width='200px'
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
  )
}

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems='center' gap='0.5rem'>
        {icon}
        {title}
      </MenuItem>
    </Link>
  )
}

export default NavigationMobile
