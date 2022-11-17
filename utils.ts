const getRandomElement = (arr: string[]) => {
    const id: number = Math.floor(Math.random() * arr.length)
    return arr[id]
}

export const getRandomOS = () => {
    const options: string[] = ['windows', 'macos', 'linux']
    return getRandomElement(options)
}

export const getRandomInterface = () => {
    const options: string[] = ['Command Line', 'JavaScript API', 'Both']
    return getRandomElement(options)
}
