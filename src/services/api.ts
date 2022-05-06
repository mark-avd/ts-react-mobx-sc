import { Post } from '../types'

export default async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}
