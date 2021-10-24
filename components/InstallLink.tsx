import { Image, Link } from '@chakra-ui/react';
import React from 'react';

const InstallLink = () => {
  return (
    <Link href='https://play.google.com/store/apps/details?id=com.nestylemate&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
      <Image
        maxW='100%'
        alt='다운로드하기 Google Play'
        src='https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png'
      />
    </Link>
  );
};

export default InstallLink;
