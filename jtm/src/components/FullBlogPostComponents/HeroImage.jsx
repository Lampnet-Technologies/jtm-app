import React from 'react'


const HeroImage = () => {
  const image = "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598017/vpemfioyrvcluwml0eln.png"
  return (
    <section className="w-full">
            <div className="w-10/12 mx-auto">
                <img src={image} alt="" className='w-full'/>
            </div>
    </section>
  )
}

export default HeroImage
