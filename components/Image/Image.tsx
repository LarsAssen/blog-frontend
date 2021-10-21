import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

type ImageType ={
    alternativeText: string,
    name: string,
}

const Images:React.FC<{image:ImageType|null}> = ({ image }) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <Image
      src={imageUrl}
      alt=""
      width={500}
      height={300}
      layout="intrinsic"
      loading="lazy"
    />
  );
};

export default Images;