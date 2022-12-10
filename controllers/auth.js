import express from "express"
import { db } from "../connection.js"
import bcrypt from "bcryptjs"
import {json} from "express"


export const register = (req,res) =>{
    
    const q = "SELECT* FROM users WHERE email=?"

    db.query(q,[req.body.email],(err,result)=>{
        if(err) return res.status(500).json(err)
        if(result.length) return res.status(409).json("user already exists")
        //create new user
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        const q = "INSERT INTO users (`family_name`,`first_name`,`last_name`,`email`,`password`,`mobile`,`address`,`city`,`diocese_name`,`church_name`,`profile_pic`) VALUES (?)"
        const values = [req.body.family_name,req.body.first_name,req.body.last_name,req.body.email,hashedPassword,req.body.mobile,req.body.address,req.body.city,req.body.diocese_name,req.body.church_name,req.body.profile_pic]
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.json("user has been created")
        })

    })
} 