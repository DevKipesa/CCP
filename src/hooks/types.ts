// // types.ts
// export interface ProposalView {
//   name: string;
//   description: string;
//   status: ProposalStatus;
//   timeLeft: number;
//   voteCountYes: number;
//   voteCountNo: number;
//   totalVotes: number;
//   executed: boolean;
// }

// export enum ProposalStatus {
//   Ongoing,
//   Completed,
// }


export enum ProposalStatus {
  PENDING,
  EXECUTED,
  CANCELED,
  Approved,
  Rejected,
}

export interface ProposalView {
  name: string;
  description: string;
  status: ProposalStatus;
  totalVotes: number;
  votesFor: number; // Add this new field
  votesAgainst: number; // Add this new field
  timeLeft: number;
  executed: boolean;
  voteCountYes: number;
  voteCountNo: number;

  // Add this new field (in seconds)
}
// src/types.ts
export interface ContentItem {
  id: number;
  title: string;
  item: string; // Ensure this matches the Content component's expected structure
  description: string; // Ensure this matches the Content component's expected structure
  creatorProfile: string;
  creatorImage: string; // Ensure this is included
  dateCreated: string; // This should be a string based on your Content component
  contentType: "image" | "video" | "audio"; // Match the type
  ipfsHash: string; // The hash for the content
  likes: number;
  dislikes: number;
}
