import React from 'react'

export default async function getAllUsers() {

    const userdata = await fetch('https://jsonplaceholder.typicode.com/users')

    return userdata.json()
}
