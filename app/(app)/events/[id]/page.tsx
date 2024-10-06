'use client'
import axios from 'axios'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import { useSession } from "next-auth/react";
import Login from '@/components/login'
import { User } from "next-auth";
export default function Page() {
    const [isLoading, setIsLoading] = useState(false)
    const [userEventRegistered, setUsrEventRegistered] = useState(false)
    const [event, setEvent] = useState({
        _id: "",
        title: "",
        image: "",
        details: "",
        eventType: "",
        date: new Date(),
        venu: "",
        summaary1: "",
        summaary2: ""
    })

    const { id } = useParams<{ id: string }>()
    const eventData = async () => {
        const result = await axios.get(`/api/events?id=${id}`)
        setEvent(result.data.events)
    }
    useEffect(() => { eventData() }, [])

    const { data: session } = useSession()
    const user: User = session?.user as User

    const userData = async () => {
        const result = await axios.get(`/api/user?email=${user?.email}`)
        if (result.data.user.eventsRegistered.includes(id)) setUsrEventRegistered(true)
    }

    useEffect(() => {
        if (session) userData()
    }, [session])

    const router = useRouter()
    const eventRegistration = async () => {
        try {
            setIsLoading(true)
            await axios.post("/api/register", { eventId: id })
            router.replace("/profile")
        } catch (error) {
            alert(error || "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className='p-10 px-32'>

            <Image
                className='w-full h-1/6'
                src={event.image}
                alt={event.title}
                width={5000}
                height={500}
            />
            <div
                className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center text-center mx-auto font-bold tracking-wide text-4xl bg-slate-200"
            >
                <h1>{event.title.toLocaleUpperCase()}</h1>
            </div>
            <div className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center text-center  max-w-[500px]  mx-auto font-bold tracking-wide bg-slate-200" >
                <p>Event Type : {event.eventType}</p>
            </div>
            <div
                className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center text-center  max-w-[500px]  mx-auto font-bold tracking-wide bg-slate-200"
            >
                <Calendar />
                <p>{new Date(event.date).toDateString()}</p>
            </div>
            <div className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center text-center  max-w-[500px]  mx-auto font-bold tracking-wide bg-slate-200" >
                <MapPin />
                <p>Venue : {event.venu}</p>
            </div>
            <div className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center  mx-auto font-bold tracking-wide text-justify bg-slate-200" >
                <p>{event.details}</p>
            </div>

            {event.summaary1 && (
                <div className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center text-justify font-bold tracking-wide bg-slate-200" >
                    <p>{event.summaary1}</p>
                </div>
            )}
            {event.summaary2 && (
                <div className="mt-5 rounded-2xl w-full p-4 flex items-center justify-center text-justify font-bold tracking-wide bg-slate-200" >
                    <p>{event.summaary2}</p>
                </div>
            )}

            {session ? (userEventRegistered ? (

                <div className="mt-5 rounded-2xl w-full flex items-center justify-center bg-gray-900 p-3 text-white font-bold text-xl" >
                    <p>You have already registered for this event</p>
                </div>
            ) : (
                <div className="mt-5 rounded-2xl w-full flex items-center justify-center bg-gray-600 p-3 hover:bg-gray-700 transition-colors duration-300" >
                    <button
                        disabled={isLoading}
                        onClick={eventRegistration}>

                        {isLoading ? "Registering..." : "Register"}
                    </button>
                </div>
            )) : (
                <div className="mt-5 rounded-2xl w-full flex flex-col gap-2 items-center justify-center bg-gray-600 p-3 hover:bg-gray-700 transition-colors duration-300" >
                    <p className='text-white'>First Login Then Event Register</p>
                    <Login />
                </div>
            )}
        </div >
    )
}
