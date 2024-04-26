'use client'

import PostItem from "@/components/PostItem"
import { postService } from "@/services/posts.service"
import { IPost } from "@/types/posts.types"
import { useQuery } from "@tanstack/react-query"


export default function MyPosts() {

   const { data, isLoading, isError } = useQuery({ 
      queryKey: ['posts'], 
      queryFn: () => postService.getMyPosts() 
   })
   
   if(isError) window.location.reload()

	return (
      <section className='home'>
         <div className="container">

            {
               isLoading ? <div className="home__status">Loading...</div> : 
               isError ? <div className="home__status">Something went wrong!</div> : 
               data !== undefined && (data[0] === null && data?.length === 1) || data?.length === 0 ? <div className="home__status">No posts!</div> :

               <div className="home__body home__body_m">
                  { data !== undefined && data?.length && data.filter(i => i !== null).map((obj: IPost) => <PostItem key={obj._id} {...obj} />) }
               </div>
            }

         </div>
      </section>
   )
}