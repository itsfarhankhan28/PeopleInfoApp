'use client'

import React from 'react'
import getUserdata from '@/lib/getUserdata'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

export default async function Userdata({params:{userId}}) {

    const userdata = getUserdata(userId)

    const users = await userdata

  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <h1 className='text-3xl font-semibold'>Details of {users.name}</h1>
        <Card style={{
            width:730,
            height:"auto",
            display:"flex"
        }}>
            <CardContent style={{width:'45%',textAlign:"center"}} className=' border-r border-black my-10'>
                <Avatar style={{ width:100,height:100,margin:"auto"}}>
                    <PersonIcon style={{width:50,height:50}}/>
                </Avatar>
                <Typography className='mt-5 text-lg font-semibold'>
                    Name:{users.name}
                </Typography>
                <Typography className='mt-2 text-lg font-semibold'>
                    Userame:{users.username}
                </Typography>
                <Typography className='mt-2 text-lg font-semibold'>
                    Email:{users.email}
                </Typography>
                <Typography className='mt-2 text-lg font-semibold'>
                    Contact:{users.phone}
                </Typography>
            </CardContent>
            
            <CardContent style={{width:'55%'}} className='my-2'>
                <Typography className='mt-2 text-2xl font-semibold'>
                    Address:
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    Street:{users.address.street}
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    Suite:{users.address.suite}
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    City:{users.address.city}
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    ZipCode:{users.address.zipcode}
                </Typography>

                <Typography className='mt-2 text-2xl font-semibold'>
                    Website:
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    Website Name:{users.website}
                </Typography>

                <Typography className='mt-2 text-2xl font-semibold'>
                    Company:
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    Name:{users.company.name}
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    Catch Phrase:{users.company.catchPhrase}
                </Typography>
                <Typography className='mt-2 text-md font-semibold'>
                    Companys Work:{users.company.bs}
                </Typography>
            </CardContent>
        </Card>
        <Link className='mt-5' href='/users'>Back to user page</Link>
    </div>
  )
}
