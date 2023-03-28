import { Box, Fade, Flex, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from './../features/Layouts/DefaultLayout/DefaultLayout';
import { HiCheck, HiOutlineXCircle } from 'react-icons/hi2';

const Gm999 = () => {
  let startDate = '2023-03-27'
  let endDate = '2024-03-27'
  const mobile = useBreakpointValue({ base: true, md: false }) ?? true;
  const today = new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
  const cutoffDate = Date.parse(endDate);
  const message = Date.parse(today) < cutoffDate ?
    <Flex
      justifyContent='center'
      color='green.400'
      alignItems='center'
      margin='0.5em'
      padding='0.5em'
    >
      <HiCheck />
      <Box
        marginLeft='0.5em'
        marginBottom='0.5em'
      >
        garantía <strong>válida</strong>
      </Box>
    </Flex>
    :
    <Flex
      justifyContent='center'
      color='red.400'
      alignItems='center'
      margin='0.5em'
      padding='0.5em'
    >
      <HiOutlineXCircle />
      <Box
        marginLeft='0.5em'
        marginBottom='0.5em'
      >
        garantía <strong>inválida</strong>
      </Box>
    </Flex>
  return (
    <Fade in>
      <DefaultLayout>
        <Box p={4}>
          <Box>
            {message}
          </Box>
          <Table variant="simple" size={mobile ? "sm" : "md"}>
            <Thead>
              <Tr>
                <Th>Información General</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>N° CONTRATO</Td>
                <Td>999</Td>
              </Tr>
              <Tr>
                <Td>N° FACTURA</Td>
                <Td>GM-00999</Td>
              </Tr>
              <Tr>
                <Td>FECHA</Td>
                <Td>3/27/2023</Td>
              </Tr>
              <Tr>
                <Td>PRODUCTO</Td>
                <Td>GARANTIA VEHICULAR 1</Td>
              </Tr>
              <Tr>
                <Td>LÍMITES DEL CONTRATO</Td>
                <Td>VALOR COMERCIAL</Td>
              </Tr>
              <Tr>
                <Td>LIMITES POR AVERIA</Td>
                <Td>VALOR COMERCIAL</Td>
              </Tr>
            </Tbody>
          </Table>
          <Table variant="simple" size={mobile ? "sm" : "md"}>
            <Thead>
              <Tr>
                <Th>Vehículo Garantizado por el Contrato</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>MARCA</Td>
                <Td>VOLKSWAGEN</Td>
              </Tr>
              <Tr>
                <Td>NÚMERO DE SERIE (VIN)</Td>
                <Td>AAAA00000000000000</Td>
              </Tr>
              <Tr>
                <Td>VERSIÓN</Td>
                <Td>VENTO CONFORTLINE</Td>
              </Tr>
              <Tr>
                <Td>KILÓMETROS ACTUALES</Td>
                <Td>999,999</Td>
              </Tr>
              <Tr>
                <Td>MODELO</Td>
                <Td>2018</Td>
              </Tr>
              <Tr>
                <Td>FECHA 1° FACTURA</Td>
                <Td>1/1/2018</Td>
              </Tr>
              <Tr>
                <Td>HP</Td>
                <Td>115 HP</Td>
              </Tr>
              <Tr>
                <Td>RAZÓN SOCIAL / NOMBRE 1° FACTURA</Td>
                <Td>MONARQUIA AUTOMOTRIZ SA DE CV</Td>
              </Tr>
              <Tr>
                <Td>CC's</Td>
                <Td>1.5 LTS</Td>
              </Tr>
              <Tr>
                <Td>PLACAS</Td>
                <Td>AAA-001</Td>
              </Tr>
              <Tr>
                <Td>N° MOTOR</Td>
                <Td>AAA-0001</Td>
              </Tr>
            </Tbody>
          </Table>
          <Table variant="simple" size={mobile ? "sm" : "md"}>
            <Thead>
              <Tr>
                <Th>DISTRIBUIDOR AUTORIZADO</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>PUNTO DE VENTA</Td>
                <Td>VW SANTA FE</Td>
              </Tr>
              <Tr>
                <Td>R.F.C.</Td>
                <Td>VSA-1234-A01</Td>
              </Tr>
              <Tr>
                <Td>CONTACTO</Td>
                <Td>EMILIO MUÑOZ DELGADO</Td>
              </Tr>
              <Tr>
                <Td>TELEFONO</Td>
                <Td>(55)12345678</Td>
              </Tr>
              <Tr>
                <Td>CALLE</Td>
                <Td>AV. JUAN AGARAZ</Td>
              </Tr>
              <Tr>
                <Td>COLONIA</Td>
                <Td>SANTA FE</Td>
              </Tr>
              <Tr>
                <Td>POBLACIÓN</Td>
                <Td>CUAJIMALPA</Td>
              </Tr>
              <Tr>
                <Td>CODIGO POSTAL</Td>
                <Td>05000</Td>
              </Tr>
              <Tr>
                <Td>E-MAIL</Td>
                <Td>emunoz@vwsantafe.com</Td>
              </Tr>
            </Tbody>
          </Table>
          <Table variant="simple" size={mobile ? "sm" : "md"}>
            <Thead>
              <Tr>
                <Th>CLIENTE GARANTIZADO</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>NOMBRE</Td>
                <Td>HANS TRAUWITZ</Td>
              </Tr>
              <Tr>
                <Td>R.F.C.</Td>
                <Td>TAVH-831226-6P3</Td>
              </Tr>
              <Tr>
                <Td>CURP</Td>
                <Td>TAVH831226HDFRLN04</Td>
              </Tr>
              <Tr>
                <Td>TELEFONO</Td>
                <Td>(55)12345678</Td>
              </Tr>
              <Tr>
                <Td>CALLE</Td>
                <Td>CALLE FALSA 123</Td>
              </Tr>
              <Tr>
                <Td>COLONIA</Td>
                <Td>SANTA FE</Td>
              </Tr>
              <Tr>
                <Td>POBLACIÓN</Td>
                <Td>CUAJIMALPA</Td>
              </Tr>
              <Tr>
                <Td>CODIGO POSTAL</Td>
                <Td>05000</Td>
              </Tr>
              <Tr>
                <Td>E-MAIL</Td>
                <Td>hans.trauwitz@gmail.com</Td>
              </Tr>
            </Tbody>
          </Table>
          <Table variant="simple" size={mobile ? "sm" : "md"}>
            <Thead>
              <Tr>
                <Th>PERIODO DE VIGENCIA DEL CONTRATO</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody
              fontWeight='bold'
            >
              <Tr
              >
                <Td
                >FECHA DE INICIO</Td>
                <Td
                  color='blue'
                >{startDate}</Td>
              </Tr>
              <Tr>
                <Td>FECHA DE TERMINO</Td>
                <Td
                  color='red'
                >{endDate}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </DefaultLayout>
    </Fade>
  );
};

export default Gm999;
