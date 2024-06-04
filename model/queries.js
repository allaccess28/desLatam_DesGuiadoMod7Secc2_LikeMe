import { pool } from "../config/db.js";

export const addPostQuery = async({ usuario, URL, descripcion }) => {
    
   try {
    const sql ={
        text: "INSERT INTO posts (usuario, url, descripcion) VALUES ($1, $2, $3) returning *",
        values: [usuario, URL, descripcion]
        }
        const result = await pool.query(sql);
        if(result.rowCount > 0){
            return result.rows[0];
        }else{
            return new Error("No se pudo insertar el post");
        }
   } catch (error) {
    console.log("Query Error Code: ", error.code, "Message: ", error.message);
   }

}

export const getPostsQuery = async() => {
    try {
        const sql = "SELECT * FROM posts";
        const result = await pool.query(sql);
        if(result.rowCount > 0){
            return result.rows;
        }else{
            return new Error("No se encontraron posts");
        }
    } catch (error) {
        console.log("Query Error Code: ", error.code, "Message: ", error.message);
    }
}

export const updateLikeQuery = async({ id }) => {
    try {
        const sql = {
            text: "UPDATE posts SET likes = likes + 1 WHERE id = $1 returning *",
            values: [id]
        }
        const result = await pool.query(sql);
        if(result.rowCount > 0){
            return result.rows[0];
        }else{
            return new Error("No se pudo actualizar el like");
        }
    } catch (error) {
        console.log("Query Error Code: ", error.code, "Message: ", error.message);
    }
}

export const deletePostQuery = async({ id }) => {
    try {
        const sql = {
            text: "DELETE FROM posts WHERE id = $1 returning *",
            values: [id]
        }
        const result = await pool.query(sql);
        if(result.rowCount > 0){
            return result.rows[0];
        }else{
            return new Error("No se pudo borrar el post");
        }
    } catch (error) {
        console.log("Query Error Code: ", error.code, "Message: ", error.message);
    }
}