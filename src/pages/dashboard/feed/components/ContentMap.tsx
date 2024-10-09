import { useState } from "react";
import Content from "./Content";
import { Grid } from "@chakra-ui/react";
import useLike from "../../../../hooks/useLike";
import useDisLike from "../../../../hooks/useDisLike";
import useDelete from "../../../../hooks/useDelete";
import dummyData from "./dummyData"; // Import the dummy data

interface ContentItem {
  title: string;
  id: number;
  dateCreated: number;
  creatorProfile: string;
  ipfsHash: string;
  creator: string;
  isDeleted: boolean;
  isMonetized: boolean;
  views: number;
  likes: number;
  dislikes: number;
  shares: number;
  rating: number;
  contentType: string;
  creatorImage: string;
}

const ContentMap = () => {
  const [fullContent, setFullContent] = useState(dummyData);
  const [id, setId] = useState<ContentItem | undefined>(dummyData[0]);

  const [contentId, setContentId] = useState<number>(0);

  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  const handleFullContent = (e: ContentItem) => {
    setId(e);
    setFullContent((prev) => prev);
  };

  const handleLike = (e: number) => {
    setContentId(e);
    like(e);
  };

  const handleDisLike = (e: number) => {
    setContentId(e);
    disLike(e);
  };

  const handleDelete = (e: number) => {
    setContentId(e);
    deleteContent(e);
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {dummyData.map((item, index) => (
        <Content
          handleFullContent={handleFullContent}
          id={id}
          key={index}
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
