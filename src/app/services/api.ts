import axios from 'axios'
import { Post } from '../types/index'

export async function fetchPosts(): Promise<Post[]> {
  try {
    return (await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Access-Control-Allow-Credentials': 'true',
        'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY,
        'Access-Control-Allow-Origin': 'https://nextlevelcodeblog.netlify.app'
      }
    })).data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}`)
  }
}

export async function fetchPostImage(): Promise<string[]> {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/${process.env.NEXT_PUBLIC_POST_ARCHLINUX_INSTALL_GUIDE}/images`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Access-Control-Allow-Credentials': 'true',
        'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY,
        'Access-Control-Allow-Origin': 'https://nextlevelcodeblog.netlify.app'
      }
    });
    return res.data
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}}`)
  }
}
