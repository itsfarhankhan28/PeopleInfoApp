import React from 'react'

export default async function getUserdata(userId) {

    const userdata = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    return userdata.json() 
}
