export function getRandomFromEnum<T extends object>(anEnum: T): any {
    const enumValues = Object.keys(anEnum)
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    return anEnum[enumValues[randomIndex] as keyof T]
}
