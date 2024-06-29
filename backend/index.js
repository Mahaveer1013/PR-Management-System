import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const app = express();
app.use(express.json())

mongoose.connect(()=>{})