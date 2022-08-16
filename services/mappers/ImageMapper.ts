import ImageType from "Models/ImageTypeModel";

const mapToImage = (imageData: any): ImageType => {
  return {
    url: imageData.data.attributes.url,
    alternativeText: imageData.data.attributes.alternativeText,
    name: imageData.data.attributes.name,
  } as ImageType;
};

export default mapToImage;
