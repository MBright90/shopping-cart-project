/* eslint-disable prettier/prettier */
import { object } from 'prop-types'
import React, { createContext, useState } from 'react'

import ampImages from '@assets/images/products/amps'
import guitarImages from '@assets/images/products/guitars'
import pedalImages from '@assets/images/products/pedals'

export const productContext = createContext()

const productDatabase = {
  guitars: [
    {
      name: 'MA-2',
      image: guitarImages.maTwo,
      price: 949,
      description: 'The Manson MA-2 is a versatile and affordable electric guitar that\'s perfect for players of all levels. Its lightweight body and comfortable neck make it easy to play for hours on end, while its high-output pickups deliver a wide range of tones. Whether you\'re playing blues, rock, or metal, the MA-2 can handle it all with ease.'
    },
    {
      name: 'NEBULA-X',
      image: guitarImages.nebula,
      price: 1050,
      description: 'The Manson NEBULA-X is a sleek and futuristic electric guitar that\'s perfect for players who want a modern and innovative instrument. Its unique design and custom pickups deliver a wide range of tones, from crisp and clean to heavy and distorted. Whether you\'re playing on stage or in the studio, the NEBULA-X is sure to turn heads and deliver an unforgettable sound.'
    },
    {
      name: 'DLR-02',
      image: guitarImages.dlr,
      price: 5699,
      description: 'The Manson DLR-02 is a high-end electric guitar that\'s designed for professional players who demand the very best. Its hand-crafted construction, premium materials, and custom pickups deliver a tone that\'s rich, complex, and full of character. Whether you\'re playing jazz, fusion, or experimental music, the DLR-02 is sure to inspire and elevate your playing to new heights.'
    },
    {
      name: 'ORYX VII',
      image: guitarImages.oryx,
      price: 3349,
      description: 'The Manson ORYX VII is a bold and powerful electric guitar that\'s perfect for heavy rock and metal. Its aggressive styling and custom pickups deliver a tone that\'s thick, aggressive, and full of attitude. Whether you\'re playing crushing riffs or blistering solos, the ORYX VII is sure to make a statement and deliver a sound that\'s truly unforgettable.'
    },
    {
      name: 'META MBM-1',
      image: guitarImages.mbmOne,
      price: 499,
      description: 'The Manson META MBM-1 is a signature electric guitar designed in collaboration with Matt Bellamy of the band Muse. Its unique shape, custom pickups, and versatile switching options make it perfect for players who want to replicate Matt\'s iconic sound. Whether you\'re a fan of Muse or just looking for a great guitar that\'s full of character, the META MBM-1 is sure to deliver.'
    },
    {
      name: 'DL-2',
      image: guitarImages.dlTwo,
      price: 1099,
      description: 'The Manson DL-2 is a versatile and high-quality electric guitar that\'s perfect for players who demand the very best. Its lightweight body and custom pickups deliver a wide range of tones, from clean and mellow to heavy and distorted. Whether you\'re playing in a band, recording in the studio, or just jamming at home, the DL-2 is sure to inspire and impress.' 
    }
  ],
  pedals: [
    {
      name: 'Boss DS-1 Distortion Pedal',
      image: pedalImages.bossDs,
      price: 49.99,
      description:
        'The Boss DS-1 Distortion Pedal is a classic distortion pedal used by countless guitarists across the world. With its simple controls and versatile sound, this pedal can deliver anything from a mild overdrive to a heavy metal distortion. It\'s perfect for players who want a reliable, affordable, and easy-to-use distortion pedal.'
    },
    {
      name: 'Electro-Harmonix Big Muff Pi Fuzz Pedal',
      image: pedalImages.bigMuff,
      price: 79.99,
      description:
        'The Electro-Harmonix Big Muff Pi Fuzz Pedal is a legendary fuzz pedal that\'s been used by guitarists for decades. Its unique sound is characterized by a thick, creamy fuzz that\'s perfect for heavy riffs and solos. This pedal features simple controls and is easy to use, making it a great choice for players who want a classic fuzz sound without a lot of tweaking.'
    },
    {
      name: 'TC Electronic Ditto Looper Pedal',
      image: pedalImages.dittoLoop,
      price: 99.99,
      description:
        'The TC Electronic Ditto Looper Pedal is a compact and powerful looper pedal that\'s perfect for guitarists who want to add layers to their playing. With up to five minutes of loop time and unlimited overdubs, this pedal is perfect for solo performers or songwriters who want to build complex arrangements. The Ditto Looper also features intuitive controls and is easy to use, making it a great choice for players of all levels.'
    },
    {
      name: 'MXR M169 Carbon Copy Analog Delay Pedal',
      image: pedalImages.carbonCopy,
      price: 149.99,
      description:
        'The MXR M169 Carbon Copy Analog Delay Pedal is a classic delay pedal that delivers warm, organic delay tones. Its analog circuitry creates a natural, vintage sound that\'s perfect for anything from subtle slapback echoes to long, atmospheric delays. This pedal also features modulation controls that add a unique character to your sound, making it a great choice for players who want a versatile and expressive delay pedal.'
    },
    {
      name: 'Strymon Timeline Delay Pedal',
      image: pedalImages.timelineDelay,
      price: 449.99,
      description:
        'The Strymon Timeline Delay Pedal is a high-end delay pedal that features a wide range of delay sounds and advanced features. With 12 delay machines, 200 presets, and deep editing capabilities, this pedal is perfect for players who want complete control over their delay sound. It also features stereo inputs and outputs, MIDI connectivity, and a powerful looper, making it a versatile and powerful tool for live performance and recording.'
    }
  ],
  amps: [
    {
      name: 'Mesa Boogie Mark V',
      image: ampImages.mesaBoogie,
      price: 2499,
      description: 'The Mesa Boogie Mark V is a versatile and powerful guitar amp that can handle any style of music. With three channels and multiple modes, this amp delivers everything from sparkling cleans to bone-crushing distortion. Whether you\'re playing in a small club or a large arena, the Mark V is sure to provide the tone and power you need to stand out.'
    },
    {
      name: 'Marshall JVM410H',
      image: ampImages.marshallJVM,
      price: 1999,
      description: 'The Marshall JVM410H is a high-end guitar amp that\'s perfect for players who demand the very best. With four channels and multiple modes, this amp delivers a wide range of tones, from classic rock to modern metal. Whether you\'re playing in the studio or on stage, the JVM410H is sure to inspire and impress.'
    },
    {
      name: 'Fender Blues Junior',
      image: ampImages.fenderBlues,
      price: 599,
      description: 'The Fender Blues Junior is a classic and affordable guitar amp that\'s perfect for blues and rock players. With its simple controls and 15 watts of power, this amp delivers a warm and punchy tone that\'s perfect for small gigs and rehearsals. Whether you\'re playing at home or on stage, the Blues Junior is sure to provide the classic Fender sound you love.'
    },
    {
      name: 'Orange Rockerverb 50 MKIII',
      image: ampImages.rockerVerb,
      price: 2099,
      description: 'The Orange Rockerverb 50 MKIII is a high-quality guitar amp that\'s perfect for players who demand the best tone and performance. With its two channels and multiple modes, this amp delivers a wide range of tones, from vintage clean to modern high-gain. Whether you\'re playing in a band or recording in the studio, the Rockerverb 50 MKIII is sure to provide the power and versatility you need.'
    }
  ]
}

const categoryFilters = ['All', 'Guitars', 'Pedals', 'Amps']

const ProductContextProvider = ({ children }) => {
  const [category, setCategory] = useState('all')

  const contextValue = {
    productDatabase,
    category,
    setCategory,
    categoryFilters
  }
  return <productContext.Provider value={contextValue}>{children}</productContext.Provider>
}

ProductContextProvider.propTypes = {
  children: object.isRequired
}

export default ProductContextProvider
