import React from 'react';
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import DefaultLayout from '@/features/Layouts/DefaultLayout';

const Productos = () => {
  return (
    <DefaultLayout>
      <Box py={10} bg="white" display='flex'>
        <Box mr={8} mb={8} alignSelf="center">
          <Image src='./hero/negocios.png' alt="Garantía mecánica extendida" w="600px" h="auto" />
        </Box>

        <Box maxW="1200px" mx="auto">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            ¿Qué es una garantía mecánica extendida?
          </Text>

          <Text mb={4}>
            Una garantía mecánica extendida es una póliza de seguro que brinda cobertura adicional a los daños mecánicos de un vehículo que no están cubiertos por la garantía original del fabricante. Esta garantía extendida es una excelente opción para aquellos que buscan proteger su inversión en un auto seminuevo y evitar gastos imprevistos por reparaciones mecánicas costosas.
          </Text>

          <Text mb={4}>
            En Garantimex, ofrecemos una garantía mecánica extendida para autos seminuevos que cubre una amplia variedad de componentes mecánicos y eléctricos, incluyendo el motor, la transmisión, el sistema de enfriamiento, el sistema de frenos, el sistema de dirección, el sistema eléctrico y más.
          </Text>

          <Text mb={4}>
            Nuestra garantía mecánica extendida está diseñada para brindarle tranquilidad en la carretera, con cobertura en todo México y una amplia variedad de talleres certificados para que pueda reparar su vehículo con total confianza. Además, ofrecemos planes de pago flexibles y adaptados a sus necesidades.
          </Text>

          <Text mb={4}>
            Si está buscando una manera de proteger su inversión en un auto seminuevo y evitar gastos imprevistos por reparaciones mecánicas costosas, ¡contáctenos hoy mismo para obtener más información sobre nuestra garantía mecánica extendida para autos seminuevos!
          </Text>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Productos;
