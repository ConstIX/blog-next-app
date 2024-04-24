'use client'

import PostItem from "@/components/PostItem"
import PostPopular from "@/components/PostPopular"
import { postService } from "@/services/posts.service"
import { useQuery } from "@tanstack/react-query"
import { IPost } from "@/types/posts.types"

export default function Home() {

   const { data, isLoading } = useQuery({ 
      queryKey: ['posts'], 
      queryFn: () => postService.getPosts() 
   })
   
	return (
      <section className="home">
         <div className="container">

            {
               isLoading ? <div className="home__status">Loading...</div> : 
               data !== undefined && data?.posts?.length === 0 ? <div className="home__status">No posts!</div> :
               
               <div className="home__body home__body_h">
                  <div className="home__column">
                     { data !== undefined && data?.posts?.length && data.posts.map((obj: IPost) => <PostItem key={obj._id} {...obj} />) }
                  </div>

                  <div className="home__column">
                     {
                        data !== undefined && data?.popularPosts?.length &&
                        <>
                           <h3 className="home__title">Popular Posts:</h3>
                           { data.popularPosts.map((obj: IPost) => <PostPopular key={obj._id} {...obj} /> ) }
                        </>
                     }
                  </div>
               </div>
            }
      
         </div>
      </section>
   )
}