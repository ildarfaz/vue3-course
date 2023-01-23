export interface IPost {
    id: number,
    title: string,
    body: string
}
export interface INewPost {
    title: string,
    body: string
}

export interface IPostForm {
    newPost: INewPost
}
export interface IApp {
    posts: IPost[]
}
