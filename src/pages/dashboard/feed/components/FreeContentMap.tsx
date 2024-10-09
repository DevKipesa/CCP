import { useState } from "react";
import Content from "./Content";
import useFetchFreeContent from "../../../../hooks/useFetchFreeContent";
import { Grid } from "@chakra-ui/react";
import useLike from "../../../../hooks/useLike";
import useDisLike from "../../../../hooks/useDisLike";
import useDelete from "../../../../hooks/useDelete";

interface ContentItem {
  id: number;
  title: string;
  item:string;
  description: string; // Ensure this matches the Content component's expected structure
  creatorProfile: string;
  creatorImage: string; // Ensure this is included
  dateCreated: string; // This should be a string based on your Content component
  contentType: "image" | "video" | "audio"; // Match the type
  ipfsHash: string; // The hash for the content
  likes: number;
  dislikes: number;
}

const FreeContentMap = () => {
  const { data: contentItems = [], loading, error } = useFetchFreeContent();
  const [fullContent, setFullContent] = useState(contentItems);
  const [id, setId] = useState<ContentItem | undefined>(
    (fullContent as ContentItem[])[0]
  );
  const [contentId, setContentId] = useState<number | undefined>(undefined);

  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
      {(contentItems as ContentItem[]).map((item, index) => (
        <Content
          handleFullContent={handleFullContent}
          id={id}
          key={index}s
          item={item}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          handleDelete={handleDelete}
        />
      ))}
    </Grid>
  );
};

export default FreeContentMap;
