import { makeAutoObservable, runInAction } from 'mobx'
import fetchPosts from '../services/api'
import makeArrayOutOf from '../utils/makeArrayOutOf'
import pageSlicer from '../utils/pageSlicer'
import { Post, SearchKeys } from '../types'

class Store {
    posts: Post[] = []
    postsPerPage = 10

    searchQuery = ''
    searchKeys: (keyof SearchKeys)[] = ['title', 'body']

    constructor() {
        makeAutoObservable(this)
    }

    get maxPages() {
        return Math.ceil(this.searchResult().length / this.postsPerPage)
    }

    get pages() {
        return this.maxPages ? makeArrayOutOf(this.maxPages) : []
    }

    paginate = (data: Post[], page: number) => {
        return data.slice(...pageSlicer(this.postsPerPage, page))
    }

    searchResult = () => {
        return this.posts.filter((item) =>
            this.searchKeys.some((key) =>
                item[key].toLowerCase().includes(this.searchQuery.trim())
            )
        )
    }

    sortById = () => {
        this.posts = [...this.posts].sort((a, b) => a.id - b.id)
    }

    sortByTitle = () => {
        this.posts = [...this.posts].sort((a, b) => a.title.localeCompare(b.title))
    }

    sortByBody = () => {
        this.posts = [...this.posts].sort((a, b) => a.body.localeCompare(b.body))
    }

    setSearchQuery = (searchTerm: string) => {
        this.searchQuery = searchTerm
    }

    async fetchPosts() {
        const response = await fetchPosts()
        runInAction(() => (this.posts = response))
    }
}

export const store = new Store()
