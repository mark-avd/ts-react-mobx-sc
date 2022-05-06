import { makeAutoObservable, runInAction } from 'mobx'
import fetchPosts from '../services/api'
import { Post } from '../types'

class Store {
    posts: Post[] = []

    constructor() {
        makeAutoObservable(this)
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
        runInAction(() => (this.posts = response.slice(0, 10)))
    }
}

export const store = new Store()
