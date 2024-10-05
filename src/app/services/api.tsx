import axios from 'axios'
import { Post } from '../types/index'

export async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await axios.get(`${process.env.API_URL}posts`)
    return res.data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}`)
  }
}

export async function fetchPostImages(postName: string): Promise<string[]> {
  try {
    const res = await axios.get(`${process.env.API_URL}post/${postName}/images`)
    return res.data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}}`)
  }
}
