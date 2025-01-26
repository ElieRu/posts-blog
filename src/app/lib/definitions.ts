
import mongoose, { Types } from 'mongoose'
import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})
 
export type FormState = | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    } | undefined

  export interface PostForm {
    title: string,
    content: string,
    type: string,
    userId: string | null | undefined
  }

  export interface FormComment {
    content: string
  }
  
  export type Post = {
    _id: string
    title: string
    content: string
    type: string
    userId: string | null | undefined
    updatedAt: string 
    createdAt: string 
    __v: number
  }

export type Posts = Post[] | [];

export interface CallbackPostsItems {
  (arg: Posts): Posts
}

export interface CallbackCommentsItems {
  (arg: Comments): Comments
}

export const ObjectIdFormat = (value: string) => {
  return new Types.ObjectId(value)
}

export type Comment = {
  _id: string
  content: string
  postId: string
  userId: string
  picture: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type Comments = Comment[];

export type UpdateCommentsItems = (comments: Comments) => Comments;

export type PostsComments = [
  Post,
  Comments | null | undefined
];

export type SearchType = string

