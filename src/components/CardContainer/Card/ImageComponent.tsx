import { Image } from "@chakra-ui/react";
import { useImageUrl } from "../../../hooks";
import { FC } from "react";

interface ImageProps {
  id: number;
}

const ImageComponent: FC<ImageProps> = ({ id }) => {
  const imageUrl = useImageUrl();
  if (id < 0) {
    // console.error("Invalid 'id' provided to ImageComponent");
    return null; // Handle invalid id case, returning null or a fallback image
  }
  return (
    <Image
      src={`https://starwars-visualguide.com/assets/img/${imageUrl}/${id}.jpg`}
      alt={`Image ${id}`}
      borderRadius="lg"
      fallbackSrc="https://via.placeholder.com/250"
      minW="100%"
    />
  );
};

export default ImageComponent;
