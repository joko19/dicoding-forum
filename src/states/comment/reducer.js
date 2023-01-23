import { ActionType } from './action';
 
function commentsReducer(Comments = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [action.payload.Comment, ...Comments];
    // case ActionType.TOGGLE_LIKE_COMMENT:
    //   return Comments.map((Comment) => {
    //     if (Comment.id === action.payload.CommentId) {
    //       return {
    //         ...Comment,
    //         likes: Comment.likes.includes(action.payload.userId)
    //           ? Comment.likes.filter((id) => id !== action.payload.userId)
    //           : Comment.likes.concat([action.payload.userId]),
    //       };
    //     }
    //     return Comment;
    //   });
    default:
      return Comments;
  }
}
 
export default commentsReducer;