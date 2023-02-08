import { useSession } from "next-auth/react";

export const useUserLogin = () => {
    const { data: session, status: sessionStatus } = useSession();

    if(sessionStatus === "authenticated"){
        return true
    }else if(sessionStatus === "unauthenticated"){
        return false
    }

}