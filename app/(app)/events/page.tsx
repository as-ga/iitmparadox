'use client'
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [events, SetEvents] = useState([])
  const eventList = async () => {
    const result = await axios.get("/api/events")
    SetEvents(result.data.events)
  }
  useEffect(() => { eventList() }, [events])

  return (
    <div>
      <Banner title="EVENTS" bgColor="bg-purple-500" bigCircle="bg-purple-800" smallCircle="bg-purple-700" />
      <div className="mt-5 m-5 grid lg:grid-cols-2 gap-6">
        {events.length > 0 && events.map((event: {
          _id: string,
          name: string,
          image: string
        }) => (
          <div key={event.name}>
            <Link href={`/events/${event._id}`} className="after:absolute after:inset-0">
              <Image alt={event.name}
                loading="lazy" width={500}
                height={500}
                decoding="async"
                data-nimg="1" className="w-full h-auto"
                src={event.image} style={{ color: "transparent" }} />
            </Link>
          </div>
        ))}
      </div>
      <Footer bgColor="bg-purple-500" />
    </div>
  )
}
