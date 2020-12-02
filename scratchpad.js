    case "UPDATE_UPVOTE":
      const initialState = {...state};
      console.log(initialState)
      // THIS IS ARRAY NOTATION, RIGHT? HOW DO WE FETCH OBJECT WITH SPECIFIC ID. Filter?
      const newUpvoteNumber = initialState[id].upvotes + 1;
      initialState[id].upvotes = newUpvoteNumber;
      return initialState;
      case "UP_VOTE":
        const upvote = { ...state };
        upvote[id].upvotes++;
        return upvote;
    case "UPDATE_DOWNVOTE":
      const tempState = {...state}
      const newDownvoteNumber = tempState[id].downvotes + 1
      tempState[id].downvotes = newDownvoteNumber;
      return tempState;

