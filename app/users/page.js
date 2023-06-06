'use client'

import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const metadata = {
    title:"Users"
}

export default async function Users() {

    const userdata = getAllUsers()

    const users = await userdata

  return (
    <>
    <div className='mx-auto'>
        <h1 className='text-center text-3xl font-semibold pt-5'>This is the User Page</h1>
        <div className='mt-5 flex flex-wrap' >
        {users.map((user)=>{
            return(
                <>
                <div key={user.id} className='m-3'>
                    <Card style={{
                        width:300,
                        height:"auto"
                    }}>
                        <CardContent>
                            <Avatar style={{ width:100,height:100,margin:"auto",marginTop:10 }}>
                              <PersonIcon style={{width:50,height:50}}/>
                            </Avatar>
                            <Typography style={{textAlign:"center",marginTop:10,fontWeight:"bold",fontSize:17}}>
                                Name:{user.name}
                            </Typography>
                            <Typography style={{textAlign:"center",marginTop:10,fontWeight:"bold",fontSize:17}}>
                                Username:{user.username}
                            </Typography>
                            <Typography style={{textAlign:"center",marginTop:10,fontWeight:"bold",fontSize:17}}>
                                Email:{user.email}
                            </Typography>
                            <Typography style={{textAlign:"center",marginTop:10,fontWeight:"bold",fontSize:17}}>
                                Contact:{user.phone}
                            </Typography>
                            <Button className='hover:bg-blue-500 text-white bg-blue-500 mt-5 ml-[60px] py-2 px-5'><Link href={`users/${user.id}`} >More Details</Link></Button>
                        </CardContent>
                    </Card>
                </div>
                </>
            )
        })}
        </div>
    </div>
    </>
  )
}
