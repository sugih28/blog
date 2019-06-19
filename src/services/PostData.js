import axios from 'axios'

export function PostData(type, userData) {
    let BaseUrl = 'https://reqres.in/api/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type, {
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