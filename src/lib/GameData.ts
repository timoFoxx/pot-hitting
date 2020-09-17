export enum Dimensions {
    height = 600,
    width = 500,
}

export enum PotCoords {
    potX = Math.random() * Dimensions.height,
    potY = Math.random() * Dimensions.width,
}
