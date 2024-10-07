'use client'
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Banner from "@/components/banner";
import { useSession as Session, signOut } from "next-auth/react";
import { User } from "next-auth";
import Footer from '@/components/footer'
import Login from "@/components/login";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";


export default function Page() {
  const { data: session } = Session();
  const user: User = session?.user as User

  const [events, setEvents] = useState([])
  // const [userData, setUserData] = useState(null)

  const getData = async () => {
    const result = await axios.post('/api/user', {
      email: user.email
    })
    setEvents(result.data.events)
    // setUserData(result.data.user)
  }

  useEffect(() => {
    if (user) getData()
  }, [user])


  return (
    <div>
      <Banner title="PROFILE" bgColor="bg-purple-800" bigCircle="bg-purple-900" smallCircle="bg-purple-950" />
      {session ? (
        <>
          <div className="flex p-10 gap-10 w-full justify-center items-center">
            <div className="flex flex-col font-bold gap-5 mr-10">
              <h3 className=" text-2xl">Welcome, {user?.name}</h3>
              <h5 className="text-xl">Email :  {user?.email}</h5>
              <Button
                onClick={() => signOut()}
                className="w-full md:w-auto bg-slate-100 text-black"
                variant="outline"
              >
                Logout
              </Button>
            </div>
            <img src={user?.image || "/event/genai_banner.webp"} height={500} width={500} alt={user?.name || "user"} className="rounded-full ml-20 max-w-96" />
          </div>
          <div className="mt-10 m-5 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {events.length > 0 && events.map((event: {
              name: string,
              image: string,
              _id: string
            }) => (
              <div key={event.name}>
                <Link href={`/events/${event._id}`} className="after:absolute after:inset-0">
                  <Image alt={event.name}
                    loading="lazy" width={500}
                    height={500}
                    decoding="async"
                    data-nimg="1" className="w-full h-auto"
                    src={event.image} style={{ color: "transparent" }} />
                  <h2 className="text-xl font-bold text-center mt-2">{event.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className=" flex  items-center flex-col">
          <h2 className="text-2xl mt-2 mb-4">Please login to continue.</h2>
          <Login className="w-full md:w-auto bg-slate-100 text-black" />
        </div>

      )}



      <Footer bgColor="bg-purple-800" />
    </div>
  )
}
