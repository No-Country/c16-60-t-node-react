import { donate } from "@/actions/donations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const FormDonation = async () => {
  return (
    <div className="flex flex-col gap-4 max-w-[500px]">
      <form action={donate}>
        <Label>
          Valor
          <Input name="amount" type="number" />
        </Label>
        <Label>
          Tu Mensaje (opcional)
          <Textarea name="message" />
        </Label>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};
