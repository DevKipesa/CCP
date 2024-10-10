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
// types.ts
export interface ContentItem {
  id: number;
  creatorProfile: string;
  creatorImage: string;
  dateCreated: number; // Keep as number for Unix timestamp
  title: string;
  contentType: string;
  ipfsHash: string;
  likes: number;
  dislikes: number;
  // Remove these lines if they are not needed
  // description?: string; // Optional if you want to keep it
  // item?: any; // Optional if you want to keep it
}
