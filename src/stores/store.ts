import { makeAutoObservable, runInAction } from 'mobx'
import fetchPosts from '../services/api'
import { Post } from '../types'
import makeArrayOutOf from '../utils/makeArrayOutOf'

class Store {
    posts: Post[] = []
    postsPerPage = 10

    constructor() {
        makeAutoObservable(this)
    }

    get lastPage() {
        return this.posts.length / this.postsPerPage
    }

    get pages() {
        return makeArrayOutOf(this.lastPage)
    }

    sortById = () => {
        this.posts = [...this.posts].sort((a, b) => a.id - b.id)
    }

    sortByTitle = () => {
        this.posts = [...this.posts].sort((a, b) =>
            a.title.localeCompare(b.title)
        )
    }

    sortByBody = () => {
        this.posts = [...this.posts].sort((a, b) =>
            a.body.localeCompare(b.body)
        )
    }

    async fetchPosts() {
        const response = await fetchPosts()
        runInAction(() => (this.posts = response))
    }
}

export const store = new Store()
