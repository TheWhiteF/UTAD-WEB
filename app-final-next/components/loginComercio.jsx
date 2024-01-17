"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
//import Link from 'next/link'

export default function LoginComercio() {
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [CIF, setCIF] = useState("")

    const handleFindUser = (e) => {
        //alert(e);
        e.preventDefault();
        //alert(CIF);
        localStorage.setItem('CIF', CIF);
        setMessage('OK');
        router.push(`/Comercios/${CIF}`)
    }


    return (

        
        <>
        <section className="bg-[#4586ef]">
            <div className="w-full bg-blue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-white">Inicia sesión</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleFindUser}>
                        <div>
                            <input onChange={(e) => setCIF(e.target.value)} type="text" name="CIF" id="CIF" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Credencial comercio CIF" required="" />
                        </div>
                        {/* <Link href={`/Comercios/${CIF}`}>
                            <button type="submit" className=" mt-5 w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Buscar</button>
                        </Link> */}
                        <button type="submit" className=" mt-5 w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Buscar</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}