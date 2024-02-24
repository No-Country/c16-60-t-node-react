import { getAllDonations } from "@/actions/actions";
import { donations } from "@/data/donations-data";

//TODO: Mejorar la interfas de donaciones con una tabla
const ListDonations = async () => {
  let donationes = await getAllDonations();

  //TODO: retirar en produccion
  if (!donationes) {
    donationes = donations;
  }

  return (
    <div>
      <pre>{JSON.stringify(donationes, null, 2)}</pre>
    </div>
  );
};
export default ListDonations;
