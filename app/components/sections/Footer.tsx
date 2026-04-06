import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/images/logo-tan.png'

const Footer = () => {
  return (
    <footer className="w-full bg-calm-green py-6 px-4.5 shrink-0">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center text-light-almond">
        <Link href="/" className="flex justify-center items-center gap-2">
        <Image src={logo} alt="Invoice Chaser logo" width={100} height={100} className="w-8 h-auto" />
        <span className="font-semibold  uppercase leading-none w-16 font-clash">Invoice Chaser</span>
        </Link>
            <span className="text-sm">An Artbox affiliate creation</span>
        </div>
    </footer>
  )
}

export default Footer