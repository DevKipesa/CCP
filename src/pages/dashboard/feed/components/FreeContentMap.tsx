// // src/pages/dashboard/feed/components/FreeContentMap.tsx
// import { useState } from "react";
// import Content from "./Content";
// import useFetchFreeContent from "../../../../hooks/useFetchFreeContent";
// import { Grid } from "@chakra-ui/react";
// import useLike from "../../../../hooks/useLike";
// import useDisLike from "../../../../hooks/useDisLike";
// import useDelete from "../../../../hooks/useDelete";
// import { ContentItem } from "../../../../hooks/types"; // Import the type

// const FreeContentMap = () => {
//   const { data: contentItems = [], loading, error } = useFetchFreeContent();
//   const [id, setId] = useState<ContentItem | undefined>(undefined);

//   const like = useLike();
//   const disLike = useDisLike();
//   const deleteContent = useDelete();

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const handleFullContent = (item: ContentItem) => {
//     setId(item);
//   };

//   const handleLike = (e: number) => {
//     like(e);
//   };

//   const handleDisLike = (e: number) => {
//     disLike(e);
//   };

//   const handleDelete = (e: number) => {
//     deleteContent(e);
//   };

//   return (
//     <Grid templateColumns="repeat(1, 1fr)" gap={6}>
//       {(contentItems as ContentItem[]).map((item) => (
//         <Content
//           handleFullContent={handleFullContent}
//           id={id}
//           key={item.id} // Use item.id as the key for better performance
//           item={item}
//           handleLike={handleLike}
//           handleDisLike={handleDisLike}
//           handleDelete={handleDelete}
//         />
//       ))}
//     </Grid>
//   );
// };

// export default FreeContentMap;
