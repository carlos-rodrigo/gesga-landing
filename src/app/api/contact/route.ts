import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nombre, rol, provincia, whatsapp, mensaje } = await request.json();

    if (!nombre) {
      return NextResponse.json(
        { error: "El nombre es requerido" },
        { status: 400 }
      );
    }

    const emailContent = `
Nuevo contacto desde GESGA Landing

Nombre: ${nombre}
Rol: ${rol || "No especificado"}
Provincia: ${provincia || "No especificada"}
WhatsApp: ${whatsapp || "No proporcionado"}

Mensaje:
${mensaje || "Sin mensaje adicional"}
    `.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "GESGA <onboarding@resend.dev>",
        to: ["juanfroment@gmail.com"],
        subject: `Nuevo contacto: ${nombre}`,
        text: emailContent,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
