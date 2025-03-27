

export default function ProductsBar() {
 
  return (
    <>
      <section className="flex flex-col items-center text-left gap-8 md:gap-10 lg:gap-12 w-full">
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 self-start">
            <div className="bg-red-400 w-2 h-5 md:h-6 lg:h-7 rounded-xs"></div>
            <h2 className="text-red-400 text-lg md:text-xl lg:text-2xl">
              Our Products
            </h2>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
          Explore Our Products
          </p>
        </div>
    </section>
    </>
  )
}