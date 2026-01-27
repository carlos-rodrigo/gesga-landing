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

    const accessKey = process.env.WEB3FORMS_KEY;
    
    if (!accessKey) {
      console.error("WEB3FORMS_KEY not configured");
      return NextResponse.json(
        { error: "Configuración de email incompleta" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nuevo contacto GESGA: ${nombre}`,
        from_name: "GESGA Landing",
        nombre,
        rol: rol || "No especificado",
        provincia: provincia || "No especificada",
        whatsapp: whatsapp || "No proporcionado",
        mensaje: mensaje || "Sin mensaje adicional",
      }),
    });

    const text = await response.text();
    console.log("Web3Forms response:", text);
    
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Invalid JSON response:", text.substring(0, 200));
      return NextResponse.json(
        { error: "Error en el servicio de email" },
        { status: 500 }
      );
    }

    if (!data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { error: data.message || "Error al enviar el email" },
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
