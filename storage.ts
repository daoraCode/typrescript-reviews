import { ShipStorage } from "./storageType";
import { StorageItem } from "./storageType";

// object
const storage = {
    max: 8000,
    items: []
}

// add or modify object's property (key: value)
Object.defineProperty(storage, 'max', { writable: 
false, value: 5000 })

let currentStorage: number;

function storageUsed() {
    if(currentStorage) {
        return currentStorage
    }
    currentStorage = 0
    // for(let i = 0; i < storage.items.length(); i++) {
        // currentStorage += storage.items[i].weight
    // }
    return currentStorage
};

function add(item: number) {
    if(storage.max - item >= storageUsed()) {
        // storage.items.push(item)
        currentStorage += item
    }
}