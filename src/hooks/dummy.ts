// dummyData.ts
import { ContentItem } from "../hooks/types"; // Adjust the path accordingly

const dummyData: ContentItem[] = [
  {
    id: 1,
    creatorProfile: "John Patrick",
    creatorImage: "pro.jpg",
    dateCreated: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
    title: "Sample Image Content",
    contentType: "image",
    ipfsHash: "image1.jpeg",
    likes: 34,
    dislikes: 5,
    shares: 10,          // Added shares
    rating: 4.5,         // Added rating
    isDeleted: false,    // Added isDeleted
    isMonetized: true,   // Added isMonetized
    views: 100,          // Added views
    description: "A beautiful sample image content.", // Added description
    item: {},            // Placeholder for item, define the type as needed
    creator: "John Patrick", // Added creator property
  },
  {
    id: 2,
    creatorProfile: "Jane Smith",
    creatorImage: "pro.jpg",
    dateCreated: Math.floor(Date.now() / 1000) - 172800, // 2 days ago
    title: "Sample Video Content",
    contentType: "video",
    ipfsHash: "https://sample-videos.com/video123.mp4",
    likes: 48,
    dislikes: 10,
    shares: 20,          // Added shares
    rating: 4.0,         // Added rating
    isDeleted: false,    // Added isDeleted
    isMonetized: true,   // Added isMonetized
    views: 250,          // Added views
    description: "An interesting sample video content.", // Added description
    item: {},            // Placeholder for item, define the type as needed
    creator: "Jane Smith", // Added creator property
  },
  {
    id: 3,
    creatorProfile: "Mike Johnson",
    creatorImage: "pro.jpg",
    dateCreated: Math.floor(Date.now() / 1000) - 604800, // 1 week ago
    title: "Sample Audio Content",
    contentType: "audio",
    ipfsHash: "https://sample-audio-url.com",
    likes: 20,
    dislikes: 4,
    shares: 5,           // Added shares
    rating: 3.8,         // Added rating
    isDeleted: false,    // Added isDeleted
    isMonetized: false,  // Added isMonetized
    views: 75,           // Added views
    description: "A captivating sample audio content.", // Added description
    item: {},            // Placeholder for item, define the type as needed
    creator: "Mike Johnson", // Added creator property
  },
];

export default dummyData;
