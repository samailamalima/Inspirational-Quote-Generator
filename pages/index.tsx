import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElement'

// Assets
import cloud1 from '../assets/cloud-weather.png'
import cloud2 from '../assets/cloudy-thunder.png'

export default function Home() {
   const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { /* Background image */}
      
      <GradientBackgroundCon>

      {/* Quote Generator Model Pop-Up */}
      {/* <QuoteGeneratorModel 
      /> */}

      {/* Quote Generator */}
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
            Daily Inspiration Generator
          </QuoteGeneratorTitle>

          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a 
            random inspirational quote provided by <FooterLink 
            href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer"> Zenquotes API</FooterLink>
          </QuoteGeneratorSubTitle>

          <GenerateQuoteButton>
            <GenerateQuoteButtonText onClick={null}>
              Daily Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 
          src={cloud1}
          height="300"
          alt="Cloudybackground1"
        />

        <BackgroundImage2 
          src={cloud2}
          height="300"
          alt="Cloudybackground1"
        />
        {/* Footer */}
        <FooterCon>
          <>
          Quote Generated: {numberOfQuotes}
          <br />
          Developed by <FooterLink href="https://www.linkedin.com/in/samailaanthonym/" target="_blank" rel="noopener noreferrer"> @Malima</FooterLink>
          </>
        </FooterCon>
        
      </GradientBackgroundCon>
    </>
  )
}