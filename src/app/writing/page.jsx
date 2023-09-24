import React from 'react'
import {hiragana} from '../../../data/hiragana.json'
import {dakuten_hiragana} from '../../../data/hiragana.json'
import {yoon_hiragana} from '../../../data/hiragana.json'
import Char from '@/components/char' 

const Page = () => {
  const sound = ['','k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'n']
  return (
    <div className='section my-20'>
      <h1 className='font-bold text-5xl text-center'>Introduction to Hiragana</h1>
      <p className='mt-4'>Hiragana (ひらがな) is one of the two essential Japanese syllabaries, the other being Katakana. It is a phonetic script consisting of <b>46</b> basic characters, each representing a unique sound in the Japanese language. Unlike Kanji, which are complex logographic characters borrowed from Chinese, Hiragana characters are relatively simple and are used primarily for native Japanese words, verb endings, and grammatical functions.</p>
      <p className='mt-2'>Hiragana is an essential component of Japanese writing and reading, making it a fundamental skill for anyone learning the language. Whether you're a beginner or an advanced learner, mastering Hiragana is crucial for understanding and communicating effectively in Japanese.</p>
      <p className='mt-2'>On this page, we'll provide you with comprehensive resources and exercises to help you learn and write Hiragana characters step by step. Let's embark on this exciting journey to unravel the beauty of the Japanese language!</p>

     <section className=''>
      <h3 className='font-bold text-3xl text-center mb-5'>Hiragana</h3>
     <div className='grid grid-cols-5 gap-7 lg:grid-cols-10'>
        {hiragana.map((char) => {
          return (
           <Char char={char} bg={'bg-blue-200'}/>
          )
        })}
      </div>
      <h3 className='font-bold text-3xl text-center mb-5 mt-5'>Diacritics</h3>
     <div className='grid grid-cols-10 gap-7 mt-5'>
        {dakuten_hiragana.map((char) => {
          return (
           <Char char={char} bg={'bg-red-200'}/>
          )
        })}
      </div>
      <h3 className='font-bold text-3xl text-center mb-5 mt-5'>Diagraphs</h3>
     <div className='grid grid-cols-10 gap-7 mt-5'>
        {yoon_hiragana.map((char) => {
          return (
           <Char char={char} bg={'bg-yellow-200'}/>
          )
        })}
      </div>
      
      
     </section>  
    </div>
  )
}
export default Page

