const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = require("graphql");

const Post = require("./Post");
const PostModel = require("../model/Post");

const Query = new GraphQLObjectType({
    name: "Query",
    descipriton: "Query interface for our blog",
    fields: {
        post: {
            type: Post,
            description: "Query to get a single post by its ID", 
            args: {
                id : { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: (_, args) => {
                return PostModel.getPost(args.id);
            }
        } , 
        posts: {
            type: new GraphQLList(Post),
            description: "Query to get all posts" ,
            args: {},
            resolve: (_, args) => {
                return PostModel.getPosts();
            }
        }  
    }
});

module.exports = Query;