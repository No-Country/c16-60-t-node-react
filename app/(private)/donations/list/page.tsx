//import { getAllDonations } from "@/actions/actions";

//TODO: Mejorar la interfas de donaciones con una tabla
const ListDonations = async () => {
  // let donationes = await getAllDonations();

  // //TODO: retirar en produccion
  // if (!donationes) {
  //   donationes = donations;
  // }

  return (
    <div >
        <h1 className="py-20 font-bold text-2xl text-black text-center">Lista de donaciones</h1>
      {/* <pre>{JSON.stringify(donationes, null, 2)}</pre> */}
    </div>
  );
};
export default ListDonations;
