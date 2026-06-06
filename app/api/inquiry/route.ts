import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      requestType,
      fullName,
      phone,
      email,
      makeModel,
      budget,
      neededBy,
      location,
      notes,
    } = body;

    if (!fullName || !phone || !email || !makeModel) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Diamond Wings Inquiry <onboarding@resend.dev>",
      to: ["frank@diamondwings369.com"],
      subject: `New Vehicle Request from ${fullName}`,
      replyTo: email,
      html: `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2>New Vehicle Request</h2>

      <p><strong>Request Type:</strong> ${requestType || "Not selected"}</p>

      <h3>Contact Info</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>

      <h3>Vehicle Details</h3>
      <p><strong>Make / Model:</strong> ${makeModel}</p>
      <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
      <p><strong>Needed By:</strong> ${neededBy || "Not provided"}</p>
      <p><strong>Location:</strong> ${location || "Not provided"}</p>

      <h3>Notes</h3>
      <p>${notes || "No notes provided."}</p>
    </div>
  `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Email failed to send.", error },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Inquiry sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Inquiry route error:", error);

    return NextResponse.json(
      { message: "Something went wrong.", error },
      { status: 500 },
    );
  }
}
