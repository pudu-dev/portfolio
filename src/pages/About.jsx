
import WhatIdo from '../sections/sec1About';
import MoreAbout from '../sections/sec2About'

export default function About() {
  
  return (
    <>
      <section>
        <WhatIdo/>
      </section>

      <section className='relative w-full h-150 pt-[15%] md:pt-[5%]'>
        <MoreAbout/>
      </section>
    </>
  );
}
