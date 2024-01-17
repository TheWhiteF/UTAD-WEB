"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function registroComercios() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [CIF, setCIF] = useState("")
    const [address, setAddress] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            CIF: CIF,
            address: address,
            name: name,
            phone: phone,
            ciudad:"",
            actividad:"",
            titulo:"",
            resumen:"",
            textos:"",
            fotos:"",
            scoring:"0",
            puntuaciones:"0",
            resenas:"",

        }
        if(email==="" || CIF==="" || address==="" || name==="" || phone==="")
        {
            alert("Debes rellenar los datos");
        }else{
            fetch("/api/regisComer", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
            })
        }
        
    }


    return (
        <section className="bg-[#4586ef]">
            <div className="w-full bg-blue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-white">REGISTRAR COMERCIO</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del negocio" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setCIF(e.target.value)} type="text" name="CIF" id="CIF" placeholder="CIF" x-model="CIF" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setAddress(e.target.value)} type="text" name="address" id="address" placeholder="Direccion" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo Electrónico" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" placeholder="Telefono" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <button type="submit" className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Crear comercio</button>
                    </form>
                </div>
            </div>

        </section>
    )
}