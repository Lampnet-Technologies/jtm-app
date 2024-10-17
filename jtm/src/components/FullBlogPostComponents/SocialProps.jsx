import React from 'react'
import { icons } from './SocialObject'

const SocialProps = () => {
  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto flex gap-2">
        {icons.map((item) => (
          <div
            key={item.id}
            className="w-10 h-10 bg-white border border-black dark:border-none dark:bg-gray-800 rounded-full flex justify-center items-center"
            dangerouslySetInnerHTML={{ __html: item.image }}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default SocialProps
