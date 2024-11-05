import axios from 'axios'
import { Post } from '../types/index'

export async function fetchPosts(): Promise<Post[]> {
  try {
    return (await axios.get<Post[]>(`${process.env.API_URL}posts`)).data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}`)
  }
}

export async function fetchPostImage(postName: string): Promise<string[]> {
  try {
    const res = await axios.get(`${process.env.API_URL}post/${postName}/images`);
    return res.data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}}`)
  }
}
