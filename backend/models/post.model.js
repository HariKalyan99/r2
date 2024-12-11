import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PWD,
    database: process.env.MYSQL_DATABASE
}).promise()




export const getAllPosts = async() => {
    try {
        const [data] = await pool.query("select * from posts");
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPost = async(search) => {
    try {
        const [data] = await pool.query(`select * from posts where title like ?`, [`%${search}%`]);
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const createPost = async({title, body, reactions, views, userId}) => {
    try {

        // add validation here tooo!!!!
        const [data] = await pool.query(`insert into posts(title, body, reactions, views, userId) values(?, ?, ?, ?, ?)`, [title, body, reactions, views, userId]);
        return {id: data.insertId, title, body, reactions, views, userId};
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = async(id) => {
    try {
        const [currentPost] = await pool.query(`select * from posts where id = ?`, [id]);
        if(currentPost?.length === 0){
            return {error: "Post not found"};
        }else{
            const [data] = await pool.query(`delete from posts where posts.id = ?`, [id]);
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

export const editPost = async({title, body, reactions, views, userId}, id) => {
    try {
        const [currentPost] = await pool.query(`select * from posts where id = ?`, [id]);
        if(currentPost?.length === 0){
            return {error: "Post not found"};
        }else{
            const [data] = await pool.query(`update posts set title = ?, body = ?, reactions = ?, views = ?, userId = ? where posts.id = ?`, [title || currentPost[0].title, body || currentPost[0].body, reactions || currentPost[0].reactions, views || currentPost[0].views, userId || currentPost[0].userId, id]);
            return {id: data.insertId, title, body, reactions, views, userId};
        }
        
    } catch (error) {
        console.log(error);
    }
}

// const res = await editPost({title: "This is a edited post for seven", reactions: 1, views: 1, userId: 10}, 7);
// console.log(res);