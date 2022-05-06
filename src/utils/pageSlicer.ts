const pageSlicer = (postsPerPage: number, page: number): number[] => {
    const startPost = postsPerPage * page - postsPerPage
    const endPost = postsPerPage * page
    return [startPost, endPost]
}

export default pageSlicer
