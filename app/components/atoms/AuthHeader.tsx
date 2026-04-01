import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/images/logo.png'

const AuthHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 bg-light-almond py-6 shrink-0 ">
        <Link href="/" className="flex justify-center items-center gap-2">
        <Image src={logo} alt="Invoice Chaser logo" width={100} height={100} className="w-8 h-auto" />
        <span className="font-semibold text-calm-green uppercase leading-none w-16 font-clash">Invoice Chaser</span>
        </Link>
    </header>
  )
}

export default AuthHeader