"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    localStorage.setItem('email', email);

    const redirigir = (code) => {
        console.log("Code", code)
        if (code == 200) {
            router.push("/inicio")
        }
    }

    const redirectToAnotherPage = () => {
        // Reemplaza '/otra-pagina' con la ruta de la página a la que quieres redirigir
        router.push('/anonimo');
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
        }

        fetch("/api/signin", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
           .then((res) => res.json())
           .then((data) => redirigir(data.status))
    }


    return (
        <section className="bg-[#4586ef]">
            <div className="w-full bg-blue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-white">Inicia sesión</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo Electrónico" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Contraseña" x-model="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex justify-between">
                            <Link href="/registrar" className="align-start text-xs font-thin text-white hover:underline">Crear una cuenta</Link>
                        </div>
                        <button type="submit" className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Entrar</button>
                    </form>
                    <button className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center" onClick={redirectToAnotherPage}>Seguir anonimo</button>
                </div>
            </div>

        </section>
    )
}