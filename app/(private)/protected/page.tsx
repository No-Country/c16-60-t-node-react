import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { causas } from "@/data/causas-data";

export default async function Protected() {
    const user = await currentUser();
    const { userId } = auth();
    return (
        <div className="h-screen">
            <UserButton afterSignOutUrl="/" />

            <div>
                User:{user?.firstName}
                userId:{userId}
            </div>
            <div>
                <ul>
                {
                    causas.map((causa)=>
                    <>
                        <li key={causa.id}>
                            <h4>Causa: {causa.title}</h4>
                            <p>{causa.description}</p>
                        </li>
                    </>)
                }</ul>
            </div>
        </div>
    );
}

// Pagina de Pruebas
