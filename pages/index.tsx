import type { NextPage } from 'next';
import { Box, Flex, HStack, VStack, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import InstallLink from '../components/InstallLink';
import { Carousel } from 'react-responsive-carousel';

const CAROUSEL_IMAGE_HEIGHT = '80vh';
const CAROUSEL_IMAGES = [
  'assets/appIntro_01.jpg',
  'assets/appIntro_02.jpg',
  'assets/appIntro_03.jpg',
  'assets/appIntro_04.jpg',
  'assets/appIntro_05.jpg',
  'assets/dye_help_01.jpg',
  'assets/dye_help_02.jpg',
  'assets/dye_help_03.jpg',
  'assets/dye_help_04.jpg',
  'assets/dye_tips_01.jpg',
  'assets/dye_tips_02.jpg',
  'assets/dye_tips_03.jpg',
  'assets/dye_tips_04.jpg',
];
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
          background='white'
        >
          <Box>
            <Image src='/logo_h.png' alt='logo' w='180px' />
          </Box>
          <Flex w={140}>
            <InstallLink />
          </Flex>
        </HStack>

        <Box display={['none', 'flex']} position='absolute' bottom='0' top='0' left='0' width='100vw' zIndex={-1}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 1890 880'
            width='100%'
            height='70vh'
          >
            <g transform='translate(920,468.5) scale(1.1,1) translate(-950,-428.5)'>
              <linearGradient id='lg-0.9132446388816053' x1='0' x2='1' y1='0' y2='0'>
                <stop stopColor='#ff00ff' offset='0'></stop>
                <stop stopColor='#00ffff' offset='1'></stop>
              </linearGradient>
              <path d='' fill='url(#lg-0.9132446388816053)' opacity='0.4'>
                <animate
                  attributeName='d'
                  dur='10s'
                  repeatCount='indefinite'
                  keyTimes='0;0.333;0.667;1'
                  calcmod='spline'
                  keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                  begin='0s'
                  values='M0 0L 0 824.866187185718Q 192 786.9502453737275  384 749.947060043283T 768 670.3743436960923T 1152 529.7717365455394T 1536 476.82023809442893T 1920 295.0851229072154L 1920 0 Z;M0 0L 0 883.7702853226581Q 192 834.6633813358479  384 799.777174767838T 768 616.459355307169T 1152 490.8890298760749T 1536 455.42699543276825T 1920 361.38219490685424L 1920 0 Z;M0 0L 0 846.2633420096205Q 192 830.9971369753122  384 801.4767728948442T 768 701.4924498208006T 1152 480.1019780310248T 1536 454.10781907469186T 1920 358.3009194414825L 1920 0 Z;M0 0L 0 824.866187185718Q 192 786.9502453737275  384 749.947060043283T 768 670.3743436960923T 1152 529.7717365455394T 1536 476.82023809442893T 1920 295.0851229072154L 1920 0 Z'
                ></animate>
              </path>
              <path d='' fill='url(#lg-0.9132446388816053)' opacity='0.4'>
                <animate
                  attributeName='d'
                  dur='10s'
                  repeatCount='indefinite'
                  keyTimes='0;0.333;0.667;1'
                  calcmod='spline'
                  keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                  begin='-2s'
                  values='M0 0L 0 933.7857886291753Q 192 873.2093809107103  384 832.2183610713764T 768 662.1920373699236T 1152 528.0801623945224T 1536 515.1914041552564T 1920 450.2272315494457L 1920 0 Z;M0 0L 0 853.1364358923051Q 192 733.5893008341674  384 716.0996766172855T 768 654.5585371760756T 1152 637.1750401232284T 1536 560.1738882922388T 1920 374.6363126248659L 1920 0 Z;M0 0L 0 849.1121516483728Q 192 874.8367034923176  384 844.5406129509851T 768 615.4831674068163T 1152 667.0420915609498T 1536 534.3239862349417T 1920 495.07538571973464L 1920 0 Z;M0 0L 0 933.7857886291753Q 192 873.2093809107103  384 832.2183610713764T 768 662.1920373699236T 1152 528.0801623945224T 1536 515.1914041552564T 1920 450.2272315494457L 1920 0 Z'
                ></animate>
              </path>
              <path d='' fill='url(#lg-0.9132446388816053)' opacity='0.4'>
                <animate
                  attributeName='d'
                  dur='10s'
                  repeatCount='indefinite'
                  keyTimes='0;0.333;0.667;1'
                  calcmod='spline'
                  keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                  begin='-4s'
                  values='M0 0L 0 801.0130929111108Q 192 868.5276321748526  384 833.7544437479698T 768 722.9511350900216T 1152 527.094239273461T 1536 508.5708950790045T 1920 417.83327806700134L 1920 0 Z;M0 0L 0 794.6009442237089Q 192 792.8560991242265  384 747.8552091894122T 768 669.3715844654055T 1152 620.2732019687048T 1536 503.6454401739247T 1920 419.41795591926973L 1920 0 Z;M0 0L 0 844.1498478501547Q 192 841.1477589355034  384 794.0449078385755T 768 714.0999384912193T 1152 604.5336720330758T 1536 438.11022246702146T 1920 411.8504124743602L 1920 0 Z;M0 0L 0 801.0130929111108Q 192 868.5276321748526  384 833.7544437479698T 768 722.9511350900216T 1152 527.094239273461T 1536 508.5708950790045T 1920 417.83327806700134L 1920 0 Z'
                ></animate>
              </path>
              <path d='' fill='url(#lg-0.9132446388816053)' opacity='0.4'>
                <animate
                  attributeName='d'
                  dur='10s'
                  repeatCount='indefinite'
                  keyTimes='0;0.333;0.667;1'
                  calcmod='spline'
                  keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                  begin='-6s'
                  values='M0 0L 0 892.7114135990103Q 192 717.2821410193167  384 693.0179460852202T 768 655.2332523200009T 1152 536.6522960901445T 1536 472.19602762632974T 1920 498.93195910704117L 1920 0 Z;M0 0L 0 771.6535146093365Q 192 820.0442657660802  384 775.9269213823048T 768 726.9877640246486T 1152 507.9352442527324T 1536 565.8880420504732T 1920 463.33692271143565L 1920 0 Z;M0 0L 0 901.8308433608913Q 192 767.2755949991217  384 746.4827319850953T 768 726.3521964735243T 1152 653.730011542488T 1536 494.68240102845317T 1920 415.09426444808093L 1920 0 Z;M0 0L 0 892.7114135990103Q 192 717.2821410193167  384 693.0179460852202T 768 655.2332523200009T 1152 536.6522960901445T 1536 472.19602762632974T 1920 498.93195910704117L 1920 0 Z'
                ></animate>
              </path>
              <path d='' fill='url(#lg-0.9132446388816053)' opacity='0.4'>
                <animate
                  attributeName='d'
                  dur='10s'
                  repeatCount='indefinite'
                  keyTimes='0;0.333;0.667;1'
                  calcmod='spline'
                  keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                  begin='-8s'
                  values='M0 0L 0 818.0407201049302Q 192 754.6800847774164  384 721.8503313000405T 768 729.8126714664435T 1152 568.9893526573417T 1536 430.7988855968227T 1920 314.06090170507537L 1920 0 Z;M0 0L 0 918.7265568675257Q 192 830.242109714392  384 812.2398229937047T 768 733.1836164081966T 1152 511.78206020252566T 1536 537.4410423575009T 1920 409.87405284483305L 1920 0 Z;M0 0L 0 888.3670770045053Q 192 774.7455845636608  384 738.3355079292608T 768 700.2485416699361T 1152 544.7626950784199T 1536 369.820757691709T 1920 349.6551852096288L 1920 0 Z;M0 0L 0 818.0407201049302Q 192 754.6800847774164  384 721.8503313000405T 768 729.8126714664435T 1152 568.9893526573417T 1536 430.7988855968227T 1920 314.06090170507537L 1920 0 Z'
                ></animate>
              </path>
            </g>
          </svg>
        </Box>
        <Flex width={['100%', '800px']} gridGap='2rem' justifyContent='space-between'>
          <Box
            display={['none', 'flex']}
            flex='1'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            color='whiteAlpha.900'
          >
            <Heading size='xl'>내스타일메이트</Heading>
            <br />
            <Heading size='lg' marginLeft='4rem'>
              - 스타일을 AI하다
            </Heading>
          </Box>
          <Flex width={['full', '320px']}>
            <Carousel
              showThumbs={false}
              autoPlay={false}
              infiniteLoop={true}
              showStatus={false}
              dynamicHeight={true}
              centerMode
            >
              {CAROUSEL_IMAGES.map((image, index) => (
                <Box height={CAROUSEL_IMAGE_HEIGHT} key={image}>
                  <Image src={image} alt={`carousel image ${index}`} />
                </Box>
              ))}
            </Carousel>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default Home;
