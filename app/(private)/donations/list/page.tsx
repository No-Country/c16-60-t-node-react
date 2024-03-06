import { TableDonations } from "./_components/TableDonations";
import { getAllCauses, getAllDonations } from "@/actions/actions";

const ListDonations = async () => {
  const donations = await getAllDonations();
  const causas = await getAllCauses();

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='py-14 sm:py-16 font-extrabold text-2xl text-black text-center sm:pl-3 sm:text-left w-5/6'>
        Lista de donaciones
      </h1>
      <TableDonations causa={causas} data={donations} />
    </div>
  );
};
export default ListDonations;
