import React from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";
import Slides from "../features/revision/Slides"
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";

function ServiciosDeRevision() {
  return (
    <DefaultLayout>
      <Box>
        <Slides />
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Servicio de revisión de autos
        </Text>
        <Text mb={4}>
          Un servicio de revisión de autos es un conjunto de pruebas y verificaciones
          que se realizan para garantizar que el vehículo se encuentre en óptimas condiciones.
        </Text>
        <Text fontWeight="bold" mb={2}>
          Algunas de las cosas que se revisan en un servicio de revisión de autos son:
        </Text>
        <List mb={4}>
          <ListItem>mecanica/tren Motriz</ListItem>
          <ListItem>De desgaste: batas, liquidos, filtos, etc.</ListItem>
          <ListItem>Carroceria: daños fisicos reparados y otros vicios ocultos que npudieran existir</ListItem>
          <ListItem>Papeleria: factura de origen, seguimiento, reportes de robo, adeudos con aseguradoras, revision de todos los vin del vehiculo que no este remarcado, etc.</ListItem>
          <ListItem>Prueba dinamica de manejo: manejo de la unidad para poder dar una imagen global del estado de la unidad.</ListItem>
        </List>
        <Text fontWeight="bold" mb={2}>
          Algunas de las ventajas de contratar un servicio de revisión de autos son:
        </Text>
        <List mb={4}>
          <ListItem>Mayor seguridad</ListItem>
          <ListItem>Mayor durabilidad</ListItem>
          <ListItem>Ahorro de dinero</ListItem>
          <ListItem>Confort</ListItem>
        </List>
      </Box>
    </DefaultLayout>
  );
}

export default ServiciosDeRevision;
