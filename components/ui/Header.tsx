'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './Button'
import Image from 'next/image';

interface HeaderProps {
  user?: {
    name?: string | null
    email?: string | null
  } | null
}

export function Header({ user }: HeaderProps) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-[#008080] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[120px] flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/homepage">
              <Image
                src="/LOGO_Dashboard_P6_EA.png"
                alt="Beschrijving van de afbeelding"
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />

            </Link>
            <div className="hidden md:flex gap-6">
              <Link
                href="/homepage"
                className={`text-l font-medium transition-colors ${isActive('/homepage')
                  ? 'text-yellow-400 underline'
                  : 'text-white hover:underline'
                  }`}
              >
                Home
              </Link>

              <Link
                href="/overview"
                className={`text-l font-medium transition-colors ${isActive('/overview')
                  ? 'text-yellow-400 underline'
                  : 'text-white hover:underline'
                  }`}
              >
                Overview
              </Link>
              <Link
                href="/contact"
                className={`text-l font-medium transition-colors ${isActive('/contact')
                  ? 'text-yellow-400 underline'
                  : 'text-white hover:underline'
                  }`}
              >
                Contact
              </Link>
              <Link
                href="/support"
                className={`text-l font-medium transition-colors ${isActive('/support')
                  ? 'text-yellow-400 underline'
                  : 'text-white hover:underline'
                  }`}
              >
                Support
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:inline">
                  {user.name || user.email}
                </span>
                <form action="/api/auth/signout" method="POST">
                  <Button type="submit" variant="outline" size="sm">
                    Uitloggen
                  </Button>
                </form>
              </>
            ) : (
              <Link href="/login">
                <button className="bg-white text-teal-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                  Inloggen
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

