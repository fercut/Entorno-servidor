function getVoteCount(votes) {
    votes = {
       upvotes: votes.upvotes,
       downvotes: votes.downvotes,
   };
   return votes.upvotes - votes.downvotes;
}


// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0