export type StorageItem = {
    weight: number
}

export type ShipStorage = {
    max: number,
    items: StorageItem[] // weight - typeof number
}