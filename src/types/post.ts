export interface IPost {
  id?: string;
  url: string;
  views: number;
  catName: string;
  catAge: string;
  catBreed: string;
  catWeight?: string;
  authorId?: string;
  createdAt?: Date;
  author: IAuthor;
  comments: IComment[];
}

export interface IAuthor {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IComment {
  id: string;
  text: string;
  authorId: string;
  postId: string;
  author: IAuthor;
  createdAt?: Date;
}
