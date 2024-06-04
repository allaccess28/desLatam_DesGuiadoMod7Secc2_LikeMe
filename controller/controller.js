import path from "path";
import { addPostQuery, getPostsQuery, updateLikeQuery, deletePostQuery } from "../model/queries.js";
const __dirname = path.resolve();
export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
}

export const addPost = async(req, res) => {
    const { usuario, URL, descripcion } = req.body;
    console.log(req.body);
    const result = await addPostQuery({ usuario, URL, descripcion });
    res.send(result);
}

export const getPosts = async(req, res) => {
    const result = await getPostsQuery();
    res.send(result);
}

export const updateLike = async(req, res) => {
    const { id } = req.query;
    const result = await updateLikeQuery({ id });
    res.send(result);
}

export const deletePost = async(req, res) => {
    const { id } = req.query;
    const result = await deletePostQuery({ id });
    res.send(result);
}
