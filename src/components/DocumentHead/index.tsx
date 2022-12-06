import { Roboto } from '@next/font/google';
import React from 'react';
import localFont from '@next/font/local';

const roboto = Roboto({ weight: ['500', '400'], subsets: ['latin'] });
const myFont = localFont({ src: '../../assets/fonts/georgiab.ttf' });

const DocumentHead = () => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h5 {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </>
  );
};

export default DocumentHead;
