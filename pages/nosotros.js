import React from 'react';
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import DefaultLayout from '@/features/Layouts/DefaultLayout';

const Nosotros = () => {

  return (
    <DefaultLayout>
      <Box py={10} bg="white">
        <Flex maxW="1200px" mx="auto" alignItems="center" flexWrap="wrap">
          <Box flex="1" pr={{ base: 0, md: 8 }}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Sobre nosotros
            </Text>

            <Text mb={4}>
              En Garantimex, nos enorgullece contar con un equipo altamente capacitado y comprometido con la excelencia en el servicio al cliente. Sabemos lo importante que es para nuestros clientes tener la certeza de que su inversión en un auto seminuevo está protegida, por lo que ofrecemos garantías claras y fáciles de entender.
            </Text>

            <Text mb={4}>
              Nuestro equipo de expertos en garantías cuenta con más de 30 años de experiencia en el sector automotriz. Gracias a ello, podemos brindar soluciones innovadoras y efectivas que se adaptan a las necesidades cambiantes de nuestros clientes.
            </Text>

            <Text mb={4}>
              En Garantimex, trabajamos con transparencia y honestidad en todo lo que hacemos. Nuestro objetivo es brindar una atención personalizada y adaptada a las necesidades de cada uno de nuestros clientes, para que puedan sentirse respaldados y seguros en todo momento.
            </Text>

            <Text mb={4}>
              Nos esforzamos por mantenernos a la vanguardia de las últimas tecnologías y tendencias en el mercado automotriz, de manera que podemos ofrecer soluciones innovadoras y efectivas que se adaptan a las necesidades cambiantes de nuestros clientes.
            </Text>

            <Text mb={4}>
              Si está buscando una empresa de garantías confiable y comprometida con su satisfacción en la compra de un auto seminuevo, Garantimex es la opción ideal. Nuestro equipo altamente capacitado y con más de 30 años de experiencia en el sector automotriz está aquí para ayudarlo a proteger su inversión y brindarle tranquilidad en la carretera. Contáctenos hoy para conocer más acerca de nuestros servicios.
            </Text>
          </Box>
          <Box flex="1" pl={{ base: 0, md: 8 }}>
            <Flex flexDirection="column" justifyContent="center">
              <Image src='./hero/servclie.png' alt="Nosotros" w="full" h="auto" />
              <Image src='./hero/taller.png' alt="Taller" w="full" h="auto" />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </DefaultLayout>
  );
};

export default Nosotros;
