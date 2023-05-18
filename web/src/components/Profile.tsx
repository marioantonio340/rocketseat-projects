import { User } from 'lucide-react'
import { getUser } from '@/lib/auth'
import Image from 'next/image'


export function Profile(){
    const { name , avatarUrl } = getUser()

    return(
        <div className="flex items-center gap-3 text-left ">
        <Image src={avatarUrl} alt={name} width={40} height={40} className="h10 w-10 rounded-full"  />

        <p className="text-sm leading-snug max-w-[140px]">
            {name}
            <a href="/api/auth/signout" className='block text-red-400 hover:text-red-300'>Sair</a>
        </p>

      </div>
    )
}