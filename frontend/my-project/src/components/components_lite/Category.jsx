import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {Button} from "../ui/button"

const Categories= [
      "Frontend-developer",
      "Backend-developer",
      "AI-ML Enginer",
      "Cloud-Computing",
      "Full-Stack-Developer",
      "Data-Scientist",
      "Data-Analyast",
      "Prompt-Enginere",
  ]
  const Category = () => {
  return (
      <div>
        <div>
            <h1 className="text-2xl font-bold text-center text-blue-500 p-5">Categories of our Job</h1>
         </div>
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent>
            {
                Categories.map((Categories,index)=>{
                    return(
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Button>{Categories}</Button>
                        </CarouselItem>
                        );
                })
            }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default Category
