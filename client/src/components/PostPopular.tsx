import { IPost } from '@/types/posts.types'
import Link from 'next/link'

export default function PostPopular({ title, _id } : IPost) {
   
   return (
      <Link href={`/home/${_id}`} className='home__popular popular'>
         <button className="popular__btn btn btn_p"><span>{title}</span></button>
      </Link>
   )
}