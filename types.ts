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

export interface usersType{
  username: string, 
  password: string
}

export interface transactionType {
    value:number,
    debitedAccountId:string,
    creditedAccountId:string
}

export interface accountType {
    balance:number,
    usersId:string,
    debitedAccountId:string,
    creditedAccountId:string
}