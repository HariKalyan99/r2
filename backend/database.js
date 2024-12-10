import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PWD,
    database: process.env.MYSQL_DATABASE
}).promise()




const getAllPosts = async() => {
    try {
        const [data] = await pool.query("select * from posts");
        return data;
    } catch (error) {
        console.log(error);
    }
}

const getPost = async(search) => {
    try {
        const [data] = await pool.query(`select * from posts where title like ?`, [`%${search}%`]);
        return data;
    } catch (error) {
        console.log(error);
    }
}


const createPost = async({title, body, reactions, views, userId}) => {
    try {
        const [data] = await pool.query(`insert into posts(title, body, reactions, views, userId) values(?, ?, ?, ?, ?)`, [title, body, reactions, views, userId]);
        return {id: data.insertId, title, body, reactions, views, userId};
    } catch (error) {
        console.log(error);
    }
}




const res = await createPost({title: "seventh title", body: "seventh body", reactions: 33, views: 20, userId: 9});
console.log(res);