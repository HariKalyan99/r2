import { createPost, deletePost, editPost, getAllPosts, getPost } from "../models/post.model.js"

class PostServices{
    all = async() => {
        try {
            const data = await getAllPosts();
            return data;
        } catch (error) {
            throw error;
        }
    }

    searchFor = async(searchTerm) => {
        try {
            const data = await getPost(searchTerm);
            return data;
        } catch (error) {
            throw error;
        }
    }

    createOne = async(post) => {
        try {
            const data = await createPost({...post});
            return data;
        } catch (error) {
            throw error;
        }
    }

    deleteOne = async(id) => {
        try {
            const data = await deletePost(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    editOne = async(editedPost, id) => {
        try {
            const data =  await editPost({...editedPost}, id);
            return data;
        } catch (error) {
            throw error
        }
    }
}

export default PostServices;