import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

export const FormDonation = () => {
  async function donate(formData: FormData) {
    "use server";
    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: "donacion",
            title: formData.get("message") as string,
            quantity: 1,
            unit_price: Number(formData.get("amount")),
          },
        ],
      },
    });

    redirect(preference.sandbox_init_point!);
  }

  return (
    <div className="flex flex-col gap-4 max-w-[500px]">
      <form action={donate}>
        <Label>
          <span>Valor</span>
          <Input name="amount" type="number" />
        </Label>
        <Label>
          <span>Tu Mensaje (opcional)</span>
          <Textarea name="message" />
        </Label>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};
