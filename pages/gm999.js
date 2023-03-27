import { Box, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from './../features/Layouts/DefaultLayout/DefaultLayout';

const Gm999 = () => {
  return (
    <DefaultLayout>
      <div>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>
              INFORMACIÓN GENERAL
            </TableCaption>
            <Thead>
              <Tr>
                <Th>N° CONTRATO</Th>
                <Th>N° FACTURA</Th>
                <Th>N° FECHA CONTRATO</Th>
                <Th>N° PRODUCTO</Th>
                <Th>N° LÍMITE DEL CONTRATO</Th>
                <Th>N° LÍMITES POR AVERIAS</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Td>999</Td>
              <Td>GM-00999</Td>
              <Td>03/27/2023</Td>
              <Td>GARANTIA VEHÍCULAR 1</Td>
              <Td>VALOR COMERCIAL</Td>
              <Td>VALOR COMERCIAL</Td>
            </Tbody>
          </Table>
          <Table variant='simple'>
            <TableCaption>
              VEHÍCULO GARANTIZADO POR EL CONTRATO
            </TableCaption>
            <Thead>
              <Tr>
                <Th>MARCA</Th>
                <Th>VERSIÓN</Th>
                <Th>MODELO</Th>
                <Th>N° DE SERIE (VIN)</Th>
                <Th>N° DE MOTOR</Th>
                <Th>KILOMETRAJE ACTUAL</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Td>VOLKSWAGUEN</Td>
              <Td>VENTO CONFORTLINE</Td>
              <Td>2018</Td>
              <Td>AAAA00000000000000</Td>
              <Td>AAA-0001</Td>
              <Td>999,999</Td>
            </Tbody>
            <Thead>
              <Tr>
                <Th>HP</Th>
                <Th>CC's</Th>
                <Th>PLACAS</Th>
                <Th>FECHA 1° FACTURA</Th>
                <Th>RAZON SOCIAL / NOMBRE 1° FACTURA</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Td>115 HP</Td>
              <Td>1.5 LTS</Td>
              <Td>AAA-001</Td>
              <Td>01/01/2018</Td>
              <Td>MONARQUIA AUTOMOTRIZ S.A. de C.V.</Td>
            </Tbody>
          </Table>
        </TableContainer>s
        <Box
          padding='.5rem'
        >
          <Box>
            <strong>* PARA QUE ESTA GARANTIA SEA VALIDA NECESITA IR ACOMPAÑADA DE SU FACTURA DIGITAL VALIDA A NOMBRE DEL CLIENTE GARANTIZADO.</strong>
          </Box>
          <Box>
            <strong>** Los datos registrados deberán coincidir completamente con los del vehículo cubierto por la garantía. Si se produce alguna imprecisión, esto es motivo a la rescisión del contrato.</strong>
          </Box>
        </Box>
      </div>
    </DefaultLayout>
  );
}

export default Gm999;
