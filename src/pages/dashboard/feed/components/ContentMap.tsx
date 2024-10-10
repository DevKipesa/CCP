import { useState } from "react";
import Content from "./Content";
import { Grid } from "@chakra-ui/react";
import useLike from "../../../../hooks/useLike";
import useDisLike from "../../../../hooks/useDisLike";
import useDelete from "../../../../hooks/useDelete";
import dummyData from "../../../../hooks/dummy";

// Update the ContentItem interface to match your dummy data structure
interface ContentItem {
  id: number;
  creatorProfile: string;
  creatorImage: string;
  dateCreated: number;
  title: string;
  contentType: string;
  ipfsHash: string;
  likes: number;
  dislikes: number;
}

const ContentMap = () => {
  const [id, setId] = useState<ContentItem | undefined>(dummyData[0]);
  
  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  const handleFullContent = (item: ContentItem) => {
    setId(item);
  };

  const handleLike = (e: number) => {
    like(e);
  };

  const handleDisLike = (e: number) => {
    disLike(e);
  };

  const handleDelete = (e: number) => {
    deleteContent(e);
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {dummyData.map((item: ContentItem) => (
        <Content
          handleFullContent={handleFullContent}
          id={id}
          key={item.id} // Use item.id as the key for better performance
          item={item}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          handleDelete={handleDelete}
        />
      ))}
    </Grid>
  );
};

export default ContentMap;
