"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Grid, GridItem, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

export default function Page() {
  const areFilesDropped = false;
  const files = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Flex direction="column" align="center" justify="center">
        <Flex
          direction="column"
          align="center"
          justify="center"
          marginTop="20vh"
        >
          <Text fontSize="xx-large" textAlign="center">
            Lighten
          </Text>
          <Text fontSize="medium">Drop your files to compress below</Text>
        </Flex>
          {!areFilesDropped ? 
            <NoFilesBox/> : <TableBox files={files}/>
          }
      </Flex>
    </>
  );
}

async function NoFilesBox(){
  return (
    <Box
      className="page-body"
      minWidth="360px"
      width="100vh"
      justifySelf="center"
      marginTop="5vh"
      height="60%"
      rounded="30px"
      flex="1"
      alignItems="center"
      justifyContent="center"
    >
      <Text textAlign="center" alignSelf="center">
        Drop files here
      </Text>
    </Box>
  );
}

async function TableBox(files: {files: number[]}){
  return <Box
  className="page-body"
  minWidth="360px"
  width="100vh"
  justifySelf="center"
  marginTop="5vh"
  height="60vh"
  rounded="30px"
  overflow={"auto"}
><TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer></Box>
}
