export interface IPost {
   author: string,
   comments: string[],
   createdAt: string,
   imgUrl: string,
   text: string,
   title: string,
   updatedAt: string,
   username: string,
   views: number,
   _id: string
}

export interface IPosts {
   posts: IPost[],
   popularPosts: IPost[]
}