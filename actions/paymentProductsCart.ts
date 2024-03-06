"use server";

import { client } from "@/actions/payment";
// SDK de Mercado Pago
import { Preference } from "mercadopago";
import { redirect } from "next/navigation";

// Datos del usuario
import { currentUser } from "@clerk/nextjs";
import { PaymentProduct } from "@/interfaces/payment-product";

export async function BuyProduct(BuyCart: PaymentProduct[]) {
  const user = await currentUser();
  const preference = await new Preference(client).create({
    body: {
      items: BuyCart,
      payer: {
        email: user?.emailAddresses[0].emailAddress,
      },
      metadata: {
        user_id: user?.id,
        user_name: user?.firstName + " " + user?.lastName,
      },
      back_urls: {
        success: "http://localhost:3000/payment/success",
      },
    },
  });

  redirect(preference.sandbox_init_point!);
}
