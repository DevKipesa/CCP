// src/pages/dashboard/feed/components/FreeContentMap.tsx
import { useState } from "react";
import Content from "./Content";
import useFetchFreeContent from "../../../../hooks/useFetchFreeContent";
import { Grid } from "@chakra-ui/react";
import useLike from "../../../../hooks/useLike";
import useDisLike from "../../../../hooks/useDisLike";
import useDelete from "../../../../hooks/useDelete";
import { ContentItem } from "../../../../hooks/types";

const FreeContentMap = () => {
  const { data: contentItems = [], loading, error } = useFetchFreeContent();
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>(undefined); // Change to number | undefined

  const like = useLike();
  const disLike = useDisLike();
  const deleteContent = useDelete();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleFullContent = (item: ContentItem) => {
    setSelectedItemId(item.id); // Set the ID of the selected item
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
      {(contentItems as ContentItem[]).map((item) => (
        <Content
          handleFullContent={handleFullContent}
          id={selectedItemId} // Pass the selected ID
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

export default FreeContentMap;
