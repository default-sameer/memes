import React from "react"
import { GetStaticProps } from 'next'
import axios from 'axios'
import { Data, Meme } from "../utils/types"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


export default function Home({ memes }: Data) : JSX.Element {  
  return (
   <>
   <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap">
        {memes.map((meme: Meme) => 
        <div key={meme.id} className="lg:w-1/4 md:w-1/2 p-6 w-full">
          <Link href={`/${meme.id}`}>
            <a className="block relative h-auto shadow-xl rounded-2xl border border-gray-300">
              <motion.div layoutId={meme.id} animate={{ scale: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}>
              <Image alt={meme.name} className="object-center object-contain block" src={`${meme.url}`} width={450} height={280} />
              </motion.div>
            </a>
          </Link>
          <div className="mt-2 text-center">
            <h2 className="title-font text-lg font-medium">
              <Link href={`/${meme.id}`}>
              <a>{meme.name}</a>
              </Link>
            </h2>
          </div>
        </div>
        )}
      </div>
    </div>
  </section>
  </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get('https://api.imgflip.com/get_memes')
  const  data  = await res.data.data.memes

  return {
    props: {memes: data}
  }
}

