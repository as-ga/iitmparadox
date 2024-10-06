import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/models/user.model";
import { EventModel } from "@/models/event.model";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { succrss: false, message: "User not logged in" },
        { status: 401 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { succrss: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { succrss: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { succrss: true, message: "User found", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        succrss: false,
        message: `Failed to fetch events Because : ${error}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    dbConnect();
    const { email }: { email: string } = await req.json();
    if (!email)
      NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );

    const user = await UserModel.findOne({ email });
    if (!user)
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    const Ids = user.eventsRegistered;
    await user.save();
    const result = await EventModel.find({ _id: { $in: Ids } });
    if (!result)
      return NextResponse.json(
        { success: false, message: "No events found" },
        { status: 404 }
      );
    return NextResponse.json(
      {
        success: true,
        message: "Events fetched successfully",
        events: result,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { sucress: false, message: `Failed to Feach Events : ${error}` },
      { status: 500 }
    );
  }
}
