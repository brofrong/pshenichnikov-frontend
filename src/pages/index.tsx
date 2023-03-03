import { type NextPage } from "next";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { api } from "~/core/api";
import Image, { StaticImageData } from "next/image";
import image1 from '../../public/img/pexels-photo-618079.jpeg';
import image2 from '../../public/img/pexels-photo-256150.webp';
import image3 from '../../public/img/pexels-photo-135018.jpeg';

export async function getStaticProps() {
  // Fetch data from external API
  const res = await api('categories');

  // Pass data to the page via props
  return { props: { data: res } }
}

const Home: NextPage = (props) => {
  console.log({ props });
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Carousel className="mb-0" autoPlay emulateTouch infiniteLoop showArrows={false} showIndicators={false} showStatus={false} showThumbs={false}>
          <CarouselCard src={image1} alt='image1' priority={true} />
          <CarouselCard src={image2} alt='image2' priority={true} />
          <CarouselCard src={image3} alt='image3' priority={false} />
        </Carousel>
      </div>
    </>
  );
};

const CarouselCard: React.FC<{ src: StaticImageData, alt: string, priority: boolean }> = ({ src, alt, priority }) => {
  return (
    <div className="h-[calc(100vh_-_70px)] ">
      <Image
        fill={true}
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        src={src}
        alt={alt}
        priority={priority}
      />
    </div>
  )
}

export default Home;
