import { Router } from "express"

export interface typePost {
    slug: string,
    title: string,
    body:string,
    authorId:string
}

export interface typeUser {
    email:string,
    name:string,
    address:string
}

export interface typeRoutes {
    endpoint:string,
    routes:Router
}