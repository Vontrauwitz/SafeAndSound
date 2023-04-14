// import React from 'react';
// import { Box, Flex, Image, Text, Button, Center } from "@chakra-ui/react";
// import DefaultLayout from '@/features/Layouts/DefaultLayout';

// const Productos = () => {
//   return (
//     <DefaultLayout>
//       <Box py={10} bg="white" display='flex'>
//         <Box mr={8} mb={8} alignSelf="center">
//           <Image src='./hero/negocios.png' alt="Garantía mecánica extendida" w="600px" h="auto" />
//         </Box>

//         <Box maxW="1200px" mx="auto">
//           <Text fontSize="2xl" fontWeight="bold" mb={4}>
//             ¿Qué es una garantía mecánica extendida?
//           </Text>

//           <Text mb={4}>
//             Una garantía mecánica extendida es una póliza de seguro que brinda cobertura adicional a los daños mecánicos de un vehículo que no están cubiertos por la garantía original del fabricante. Esta garantía extendida es una excelente opción para aquellos que buscan proteger su inversión en un auto seminuevo y evitar gastos imprevistos por reparaciones mecánicas costosas.
//           </Text>

//           <Text mb={4}>
//             En Garantimex, ofrecemos una garantía mecánica extendida para autos seminuevos que cubre una amplia variedad de componentes mecánicos y eléctricos, incluyendo el motor, la transmisión, el sistema de enfriamiento, el sistema de frenos, el sistema de dirección, el sistema eléctrico y más.
//           </Text>

//           <Text mb={4}>
//             Nuestra garantía mecánica extendida está diseñada para brindarle tranquilidad en la carretera, con cobertura en todo México y una amplia variedad de talleres certificados para que pueda reparar su vehículo con total confianza. Además, ofrecemos planes de pago flexibles y adaptados a sus necesidades.
//           </Text>

//           <Text mb={4}>
//             Si está buscando una manera de proteger su inversión en un auto seminuevo y evitar gastos imprevistos por reparaciones mecánicas costosas, ¡contáctenos hoy mismo para obtener más información sobre nuestra garantía mecánica extendida para autos seminuevos!
//           </Text>
//           <Center>
//             <Button colorScheme="blue" mr={4} mb={4} as="a" href="/ver-mas">Ver más</Button>
//             <Button colorScheme="blue" mb={4} as="a" href="/contacto">Contáctanos</Button>
//           </Center>
//         </Box>
//       </Box>
//     </DefaultLayout>
//   );
// };

// export default Productos;



// import React from 'react';
// import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
// import DefaultLayout from '@/features/Layouts/DefaultLayout';

// const Productos = () => {
//   return (
//     <DefaultLayout>
//       <Box py={10} bg="white" display='flex' flexDir={['column', 'column', 'row']}>
//         <Box mb={[8, 8, 0]} alignSelf={['center', 'center', 'flex-start']} textAlign={['center', 'center', 'left']} mx={[0, 0, 8]} w={['100%', '100%', 'auto']}>
//           <Image src='./hero/negocios.png' alt="Garantía mecánica extendida" w={['100%', '100%', '600px']} h="auto" />
//         </Box>

//         <Box maxW="1200px" mx="auto">
//           <Text fontSize="2xl" fontWeight="bold" mb={4}>
//             ¿Qué es una garantía mecánica extendida?
//           </Text>

//           <Text mb={4}>
//             Una garantía mecánica extendida es una póliza de seguro que brinda cobertura adicional a los daños mecánicos de un vehículo que no están cubiertos por la garantía original del fabricante. Esta garantía extendida es una excelente opción para aquellos que buscan proteger su inversión en un auto seminuevo y evitar gastos imprevistos por reparaciones mecánicas costosas.
//           </Text>

//           <Text mb={4}>
//             En Garantimex, ofrecemos una garantía mecánica extendida para autos seminuevos que cubre una amplia variedad de componentes mecánicos y eléctricos, incluyendo el motor, la transmisión, el sistema de enfriamiento, el sistema de frenos, el sistema de dirección, el sistema eléctrico y más.
//           </Text>

//           <Text mb={4}>
//             Nuestra garantía mecánica extendida está diseñada para brindarle tranquilidad en la carretera, con cobertura en todo México y una amplia variedad de talleres certificados para que pueda reparar su vehículo con total confianza. Además, ofrecemos planes de pago flexibles y adaptados a sus necesidades.
//           </Text>

//           <Text mb={4}>
//             Si está buscando una manera de proteger su inversión en un auto seminuevo y evitar gastos imprevistos por reparaciones mecánicas costosas, ¡contáctenos hoy mismo para obtener más información sobre nuestra garantía mecánica extendida para autos seminuevos!
//           </Text>

//           <Flex justifyContent={['center', 'center', 'flex-start']}>
//             <Button as="a" href="#cubrimiento" colorScheme="blue" mr={[0, 0, 4]} mb={[4, 4, 0]} marginRight={{ base: '2', md: '4' }}>
//               Ver qué cubrimos
//             </Button>
//             <Button as="a" href="#contacto" colorScheme="blue">
//               Contáctanos
//             </Button>
//           </Flex>
//         </Box>
//       </Box>
//     </DefaultLayout>
//   );
// };

// export default Productos;


import React from 'react';
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import DefaultLayout from '@/features/Layouts/DefaultLayout';

const Productos = () => {
  return (
    <DefaultLayout>
      <Box py={10} bg="white" display='flex' flexDirection={['column', 'column', 'row']} alignItems="center">
        <Box mr={[0, 0, 8]} mb={[8, 8, 0]} alignSelf={['center', 'center', 'auto']}>
          <Image src='./hero/negocios.png' alt="Garantía mecánica extendida" w="600px" h="auto" />
        </Box>

        <Box maxW="1200px" mx="auto" px={["1rem", "1rem", "0"]}>
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

          <Flex justify={['space-between', 'space-between', 'center']} flexDirection={['column', 'column', 'row']}>
            <Button as="a" href="/garantiaAuto" colorScheme="blue" mt={4} mr={[0, 0, 4]} mb={[4, 4, 0]}>
              Ver qué cubrimos
            </Button>

            <Button as="a" href="/contactanos" colorScheme="blue" mt={4}>
              Contáctanos
            </Button>
          </Flex>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Productos;
