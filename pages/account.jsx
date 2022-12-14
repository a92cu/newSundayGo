import React from 'react';
import { useSession, signOut ,getSession} from 'next-auth/react'

const account = () => {
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
        return (
            <div className="login-form">
                <div><h3>歡迎，{session.user.name}</h3></div>
                <button className="link-btn" onClick={() => signOut()} >登出</button>
                
            </div>
            
            
        );

    } else {
        return (
            <div>
                <h3>尚未登入</h3>
            </div>
        );
    }

};

export default account;


//若無session 導向 login 
// 無法導向 需修改

// export const getServerSidePorps = async (context)=>{
//     const session = await getSession(context);
//         if (!session) {
//             return{
//                 redirect:{
//                     destination:'/login',
//                     permanent: false,
//                 },
//             }
//         }
//     return{
//         porps:{session},
//     };
// };