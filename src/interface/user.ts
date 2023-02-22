export interface SignUp  {
    email:string,
    first_name?:string,
    last_name?:string,
    user_name?:string,
    password:string
}
export interface SignIn {
    email:string,
    password:string
}
export interface User_Schema {
    email:string,
    first_name?:string,
    last_name?:string,
    user_name?:string,
    password:string
}