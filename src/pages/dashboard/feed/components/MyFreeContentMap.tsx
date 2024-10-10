// Import the centralized ContentItem type
import { useState } from "react";
import Content from "./Content";
import { Grid } from "@chakra-ui/react";
import useLike from "../../../../hooks/useLike";
import useDisLike from "../../../../hooks/useDisLike";
import useDelete from "../../../../hooks/useDelete";
import useMyFreeContent from "../../../../hooks/useMyFreeContent";
import { ContentItem } from "../../../../hooks/types"; // Adjust the path accordingly

const FreeContentMap: React.FC<{ userAddress: string }> = ({ userAddress }) => {
  const {
    data: contentItems = [],
    loading,
    error,
  } = useMyFreeContent(userAddress);
  const [id, setId] = useState<ContentItem | undefined>(undefined);

  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleFullContent = (item: ContentItem) => {
    setId(item);
  };

  const handleLike = (itemId: number) => {
    like(itemId);
  };

  const handleDisLike = (itemId: number) => {
    disLike(itemId);
  };

  const handleDelete = (itemId: number) => {
    deleteContent(itemId);
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {(contentItems as ContentItem[]).map((item) => (
        <Content
          handleFullContent={handleFullContent}
          id={id}
          key={item.id}
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
