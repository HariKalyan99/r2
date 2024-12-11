import PostServices from "../Services/post.services.js";

const {createOne, deleteOne, editOne, searchFor, all} = new PostServices();

export const getAllPostController = async(request, response) => {
    try {
        const data = await all();
        if(data){
            response.status(200).json(data);
        }
    } catch (error) {
        response.status(404).json({message: "Could not fetch posts from db", error})
    }
}


export const createPostController = async(request, response) => {
    try {
        const data = await createOne({...request.body});
        response.status(201).json(data);
    } catch (error) {
        response.status(500).json({error: error.message})
    }
}


export const deletePostController = async(request, response) => {
    try {
        const { id } = request.params;
        const data = await deleteOne(id);
        response.status(200).json(data);
      } catch (error) {
        response
          .status(500)
          .json({ message: "Could not delete the posts, please try again" });
      } 
}


export const updatePostController = async(request, response) => {
    try {
        const { id } = request.params;
        const data = await editOne({ ...request.body }, id);
        response.status(200).json(data);
      } catch (error) {
        response
          .status(500)
          .json({ message: "Could not update the blogs, please try again" });
      }
    
}

