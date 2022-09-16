import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import Link from 'next/link'

export default function Header() {
  return (
    <div className="header fixed top-0 w-full">
      <div className="px-10 pt-6 pb-4 flex flex-row shadow-sm">
        <div className="title font-medium text-xl -mt-0.5"><Link href="/"><a>Pinterest Palette</a></Link></div>
        <div className="flex">
          <div className="home mx-8"><Link href="/home"><a>Home</a></Link></div>
          <div className="recommended mr-8"><Link href="/recommended"><a>Recommended</a></Link></div>
        </div>
        <div className="search align-center w-full">
          <form>
            <input type="search" placeholder="Search Pins" className="w-full border-solid border rounded-full border-slate-300 py-3 px-4 text-sm -mt-2.5"/>
          </form>
        </div>
        <div className="sign-in ml-8"><button>Sign In</button></div>
        <FontAwesomeIcon icon={faMoon} className="ml-8 mt-0.5" size="lg"/>
      </div>
    </div>
  )
}