import User from "./User.js";
import Post from "./Post.js";
import Comment from "./Comment.js";
import Like from "./Like.js";

Post.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Post, { foreignKey: "userId" });

Comment.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Comment, { foreignKey: "userId" });

Comment.belongsTo(Post, { foreignKey: "postId" });
Post.hasMany(Comment, { foreignKey: "postId" });

Like.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Like, { foreignKey: "userId" });

Like.belongsTo(Post, { foreignKey: "postId" });
Post.hasMany(Like, { foreignKey: "postId" });

export { User, Post, Comment, Like };
