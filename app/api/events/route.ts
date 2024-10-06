import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { EventModel } from "@/models/event.model";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    let events;
    if (id) {
      events = await EventModel.findById(id);
    } else {
      events = await EventModel.find();
    }

    if (!events) {
      return NextResponse.json(
        { succrss: false, message: "No events found", events: [] },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { succrss: true, message: "Events fetched successfully", events },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { succrss: false, message: `Failed to fetch events : ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const {
      title,
      image,
      details,
      eventType,
      date,
      venu,
      summaary1,
      summaary2,
    } = await req.json();

    console.log(
      `Title : ${title}, Image : ${image}, Details : ${details}, Event Type : ${eventType}, Date : ${date}, Venu : ${venu}, Summaary 1 : ${summaary1}, Summaary 2 : ${summaary2}`
    );

    if (!image) {
      return NextResponse.json(
        { succrss: false, message: "Image is required" },
        { status: 400 }
      );
    }
    if (!title || !details || !eventType || !date || !venu) {
      return NextResponse.json(
        { succrss: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const event = await EventModel.create({
      title,
      image,
      details,
      eventType,
      date: new Date(),
      venu,
      summaary1,
      summaary2,
    });

    if (!event) {
      return NextResponse.json(
        { succrss: false, message: "Failed to create event" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { succrss: true, message: "Event created successfully", data: event },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { succrss: false, message: `Failed to create event : ${error}` },
      { status: 500 }
    );
  }
}
