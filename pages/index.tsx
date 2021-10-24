import type { NextPage } from 'next';
import { Box, Flex, HStack, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import InstallLink from '../components/InstallLink';
import { Carousel } from 'react-responsive-carousel';

const Home: NextPage = () => {
  return (
    <>
      <VStack h='100vh'>
        <HStack
          w='100%'
          px={{ base: '0.5rem', lg: '2rem' }}
          py='1rem'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Image src='/logo_h.png' alt='logo' w='180px' />
          </Box>
          <Flex w={140}>
            <InstallLink />
          </Flex>
        </HStack>

        <Carousel showThumbs={false}>
          <Box>
            <Image src='assets/appIntro_01.jpg' alt='' />
          </Box>
          <Box>
            <Image src='assets/appIntro_02.jpg' alt='' />
          </Box>
          <Box>
            <Image src='assets/appIntro_03.jpg' alt='' />
          </Box>
          <Box>
            <Image src='assets/appIntro_04.jpg' alt='' />
          </Box>
          <Box>
            <Image src='assets/appIntro_05.jpg' alt='' />
          </Box>
        </Carousel>
      </VStack>
    </>
  );
};

export default Home;
