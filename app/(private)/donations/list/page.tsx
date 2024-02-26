//import { getAllDonations } from "@/actions/actions";
import { donations } from "@/data/donations-data";
import { columns } from '@/app/(private)/donations/list/column'
import { DataTable } from "../_components/Data-Table";

//TODO: Mejorar la interfas de donaciones con una tabla
const ListDonations = async () => {
  // let donationes = await getAllDonations();

  // //TODO: retirar en produccion
  // if (!donationes) {
  //   donationes = donations;
  // }

  return (
    <div >
        <h1 className="font-bold text-center text-2xl text-black py-20">Lista de donaciones</h1>
      {/* <pre>{JSON.stringify(donationes, null, 2)}</pre> */}
      <DataTable columns={columns} data={donations} />
    </div>
  );
};
export default ListDonations;
