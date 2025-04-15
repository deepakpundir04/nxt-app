export interface IUser{
    name:string,
    email:string,
    mobile:string,
    interest:string[],
    age:string,
    _id?:string
}

export interface IError {
    message :string,
    code ?:string,

}

export type response ={
    user:IUser[],
    totalCount:string,
    page?:string
    message?:string,
    code?:string
}

export type sResponse ={
    user:IUser|null,
    totalCount:string,
    page?:string
    message?:string,
    code?:string
}