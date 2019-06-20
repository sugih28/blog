import axios from 'axios'

export function PostData(url, userData) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        .then((res) => res.json())
        .then((resJson) => {
            resolve(resJson)
        })
        .catch((err) => {
            reject(err)
        })
    })
}