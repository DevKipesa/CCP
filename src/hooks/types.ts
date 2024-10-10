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
// types.ts
export interface ContentItem {
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
  description?: string; // Optional if not every ContentItem has this
  item?: any; // Specify the type here or make it optional
}

