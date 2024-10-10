import { useState } from "react";
import Content from "./Content";
import { Grid, Spinner, Text } from "@chakra-ui/react"; // Import Spinner and Text for loading and error states
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

  // Loading state
  if (loading) return <Spinner size="lg" />; // Show a spinner while loading

  // Error handling
  if (error) {
    return <Text color="red.500">Error: {error}</Text>; // Display a user-friendly error message
  }

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
