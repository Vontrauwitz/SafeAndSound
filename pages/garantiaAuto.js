// import React from 'react';

// import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

// const garantias = [
//   "Sistema eléctrico",
//   "Sistema de enfriamiento",
//   "Sistema de alimentación",
//   "Sistema de dirección",
//   "Suspensión",
//   "Caja de cambios",
//   "Motor",
//   "Frenos",
//   "Aire acondicionado",
//   "Diferencial",
// ];

// const GarantiaAuto = () => {
//   return (
//     <Grid
//       templateColumns={{ base: "1fr", md: "2fr 3fr" }}
//       gap={4}
//       alignItems="center"
//     >
//       <GridItem colSpan={{ base: "1", md: "1" }}>
//         <Box
//           bgImage="url('/car-image.jpg')"
//           bgSize="cover"
//           bgPosition="center"
//           h={{ base: "200px", md: "400px" }}
//           w="100%"
//         />
//       </GridItem>
//       <GridItem colSpan={{ base: "1", md: "2" }}>
//         <Box p={4}>
//           <Heading as="h2" size="md" mb={4}>
//             Garantías incluidas
//           </Heading>
//           <Grid templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }} gap={2}>
//             {garantias.map((garantia) => (
//               <GridItem key={garantia}>
//                 <Box
//                   border="1px"
//                   borderColor="gray.200"
//                   borderRadius="md"
//                   p={2}
//                   h="100%"
//                 >
//                   <Text>{garantia}</Text>
//                 </Box>
//               </GridItem>
//             ))}
//           </Grid>
//         </Box>
//       </GridItem>
//     </Grid>
//   );
// };

// export default GarantiaAuto;
import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout';

const garantias = [
  { nombre: "Sistema eléctrico", mensaje: "Este es el mensaje para el sistema eléctrico." },
  { nombre: "Sistema de enfriamiento", mensaje: "Este es el mensaje para el sistema de enfriamiento." },
  { nombre: "Sistema de alimentación", mensaje: "Este es el mensaje para el sistema de alimentación." },
  { nombre: "Sistema de dirección", mensaje: "Este es el mensaje para el sistema de dirección." },
  { nombre: "Suspensión", mensaje: "Este es el mensaje para la suspensión." },
  { nombre: "Caja de cambios", mensaje: "Este es el mensaje para la caja de cambios." },
  { nombre: "Motor", mensaje: "Este es el mensaje para el motor." },
  { nombre: "Frenos", mensaje: "Este es el mensaje para los frenos." },
  { nombre: "Aire acondicionado", mensaje: "Este es el mensaje para el aire acondicionado." },
  { nombre: "Diferencial", mensaje: "Este es el mensaje para el diferencial." },
];

const GarantiaAuto = () => {
  const [garantiaSeleccionada, setGarantiaSeleccionada] = useState(null);

  const handleGarantiaClick = (garantia) => {
    if (garantia === garantiaSeleccionada) {
      setGarantiaSeleccionada(null);
    } else {
      setGarantiaSeleccionada(garantia);
    }
  };

  return (
    <DefaultLayout>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "space-between" }}
        height={{ base: "auto", md: "100vh" }}
        bg="gray.800"
        overflow="hidden"
      >

        <Box
          bgImage="url('/hero/mercedes.png')"
          bgSize="cover"
          bgPosition="center"
          h={{ base: "200px", md: "100%" }}
          w={{ base: "100%", md: "50%" }}
          order={{ base: "1", md: "2" }}
        />

        <Box
          p={4}
          width={{ base: "100%", md: "50%" }}
          order={{ base: "2", md: "1" }}
          textAlign="center"
        >
          <Heading
            as="h2"
            size="md"
            mb={4}
            color="white"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Garantías incluidas
          </Heading>
          <Flex flexWrap="wrap" justifyContent="space-between">
            {garantias.map((garantia) => (
              <Box
                key={garantia.nombre}
                width={{ base: "100%", md: "45%" }}
                mb={4}
              >
                <Box
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  p={2}
                  height="100%"
                  cursor="pointer"
                  onClick={() => handleGarantiaClick(garantia)}
                  bg={
                    garantia === garantiaSeleccionada
                      ? "gray.800"
                      : "transparent"
                  }
                  textAlign="center"
                >
                  <Text
                    color="white"
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "md" }}
                    textAlign="center"
                  >
                    {garantia.nombre}
                  </Text>
                  {garantia === garantiaSeleccionada && (
                    <Text
                      mt={2}
                      color="white"
                      fontSize={{ base: "sm", md: "md" }}
                      textAlign="center"
                    >
                      {garantia.mensaje}
                    </Text>
                  )}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default GarantiaAuto;
