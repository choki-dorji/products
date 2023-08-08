import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions ={
    
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: {label: "username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req){
                const res = await fetch(
                    "https://dummyjson.com/auth/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",

                        },
                        body:  JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        })
                    }
                )

                if(res.ok){
                    return res.json()
                }
                return null
                
                //perform database operations
                // if(credentials?.email === "admin@example.com" && credentials?.password === "admin"){
                //     return {
                //         id: "1",
                //         email: "admin@example.com"

                //     }
                // }
                // return null
            }
        }),
        GoogleProvider({
            clientId: "317375209245-hgnmtu5lo6okdr4pkeccvge25c7ebnaq.apps.googleusercontent.com",
            clientSecret: "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"
          }),
          GitHubProvider({
            clientId: "246984953ddd77c5683d",
            clientSecret: "4b1c0a673a24a6b261ed6949a139d5d68b947e74"
          })
          
    ]
}