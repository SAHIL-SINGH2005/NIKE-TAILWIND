import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard"; 
import  arrow  from "../assets/images/arrow.png";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import { shoes } from "../constants"; 

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  
      max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-500'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] 
        font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-red-500 inline-block mt-5'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        
        <div>
        <Button label='Shop now'  />
        <i class="fa-solid fa-arrow-right"></i>
        </div>

        <div className="flex justify-starts items-start flex-wrap
        w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}  >
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

      </div >

      <div className="relative flex-1 flex justify-center items-center
           xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center bg-gray-100 " >
        <img src={bigShoeImg} alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10" />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 bg-gray-100 '>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Hero