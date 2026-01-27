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

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: `Nuevo contacto GESGA: ${nombre}`,
        from_name: "GESGA Landing",
        to: "juanfroment@gmail.com",
        nombre,
        rol: rol || "No especificado",
        provincia: provincia || "No especificada",
        whatsapp: whatsapp || "No proporcionado",
        mensaje: mensaje || "Sin mensaje adicional",
      }),
    });

    const data = await response.json();

    if (!data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
