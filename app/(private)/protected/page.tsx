import { UserButton, auth, currentUser } from "@clerk/nextjs";

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
        </div>
    );
}

// Pagina de Pruebas
