import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/models/user.model";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { eventId } = await req.json();
    const session = await getServerSession(authOptions);

    if (!eventId) {
      return NextResponse.json(
        { succrss: false, message: "Event Id is required" },
        { status: 400 }
      );
    }

    if (!session) {
      return NextResponse.json(
        { succrss: false, message: "User not logged in" },
        { status: 401 }
      );
    }
    const user = await UserModel.findOneAndUpdate(
      { email: session?.user?.email },
      { $push: { eventsRegistered: eventId } }
    );
    if (!user) {
      return NextResponse.json(
        { succrss: false, message: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { succrss: true, message: "Event Registered Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        succrss: false,
        message: `Failed to Register Event Because : ${error}`,
      },
      { status: 500 }
    );
  }
}
