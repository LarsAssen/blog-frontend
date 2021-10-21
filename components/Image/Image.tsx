import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

type ImageType ={
    alternativeText: string,
    name: string,
}

const Images:React.FC<{image:ImageType}> = ({ image }) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      width={500}
      height={300}
      layout="intrinsic"
      loading="lazy"
    />
  );
};

export default Images;