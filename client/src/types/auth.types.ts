export interface IUser {
   email: string,
   username: string,
   password: string,
   posts: string[],
   _id: string,
   createdAt: string,
   updatedAt: string
}

export interface IAuth {
   user: IUser,
   token: string
}