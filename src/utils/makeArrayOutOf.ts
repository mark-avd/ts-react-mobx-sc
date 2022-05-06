const makeArrayOutOf = (number: number): number[] => {
    return Array.from({ length: number }, (_, i) => i + 1)
}

export default makeArrayOutOf
