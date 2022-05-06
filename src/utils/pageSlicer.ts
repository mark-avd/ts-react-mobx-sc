const pageSlicer = (postsPerPage: number, page: number) => {
    const startPost = postsPerPage * page - postsPerPage
    const endPost = postsPerPage * page
    return [startPost, endPost]
}

export default pageSlicer
