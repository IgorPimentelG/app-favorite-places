import * as SQLite from 'expo-sqlite';
import { Place } from '../../../models/place';

const database = SQLite.openDatabase('places.db');

function init() {

    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
                id INTEGERE PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            )`,
            [],
            () => {
                resolve()
            },
            (_, error) => {
                reject(error);
            }
            );
        });
    });

    return promise;
}

function insertPlace(place) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(`INSERT INTO places
             (id, title, imageUri, address, lat, lng)
             VALUES 
             (?, ?, ?, ?, ?, ?)`,
             [place.id, place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
             () => {
                 resolve();
             },
             (_, error) => {
                 reject(error);
             }
            )
        });
    });

    return promise;
}

function fetchPlaces() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql('SELECT * FROM places', 
            [],
            (_, result) => {
                const places = [];
                for(const item of result.rows._array) {
                    places.push(new Place(item.title, item.imageUri, { address: item.address, lat: item.lat, lng: item.lng }));
                }

                resolve(places);
            },
            (_, error) => {
                reject(error);
            }
            );
        });
    });

    return promise;
}

function fetchPlaceDetails(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(`SELECT * FROM places WHERE id = ?`, 
            [id],
            (_, result) => {
                const place = result.rows._array[0];
                resolve(new Place(
                    place.title, 
                    place.imageUri, 
                    { address: place.address, lat: place.lat, lng: place.lng },
                    place.id
                ));
            },
            (_, error) => {
                reject(error);
            }
            );
        });
    });

    return promise;
}

export { init, insertPlace, fetchPlaces, fetchPlaceDetails };