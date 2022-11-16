export const getRandomOS = () => {
    const options: string[] = ['windows', 'macos', 'linux']
    const id: number = Math.floor(Math.random() * options.length)
    return options[id]
}
