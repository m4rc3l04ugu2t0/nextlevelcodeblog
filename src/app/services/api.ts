import axios from 'axios'
import { Post } from '../types/index'

export async function fetchPosts(): Promise<Post[]> {
  try {
    return (await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
        'Access-Control-Allow-Origin': '*',
      }
    })).data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}`)
  }
}

export async function fetchPostImage(postName: string): Promise<string[]> {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/${postName}/images`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
        'Accss-Control-Allow-Origin': '*',
      }
    });
    return res.data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}}`)
  }
}
