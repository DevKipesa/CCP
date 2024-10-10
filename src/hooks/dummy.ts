const dummyData = [
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
    },
  ];
  
  export default dummyData;
  