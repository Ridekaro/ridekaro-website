import React from 'react';

const Gallery = () => {
    return <section id='gallery' className="text-gray-600 body-font font-secondary">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
                <div className="lg:w-1/3 lg:mb-0 mb-4"><h2 className='text-gradient text-[35px]'>RIDEKARO </h2><span className='text-white text-[25px]'>Gallery</span></div>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                    {/* Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom. */}
                    </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                        <div className='group relative overflow-hidden border-2 border-white/50  '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> place</span></div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3x1 text-white'> content </span></div>
                        </div>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <div className='group relative overflow-hidden border-2 border-white/50  '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> place</span></div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3x1 text-white'> content </span></div>
                        </div>
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <div className='group relative overflow-hidden border-2 border-white/50  '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> place</span></div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3x1 text-white'> content </span></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                        <div className='group relative overflow-hidden border-2 border-white/50  '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> place</span></div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3x1 text-white'> content </span></div>
                        </div>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <div className='group relative overflow-hidden border-2 border-white/50  '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> place</span></div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3x1 text-white'> content </span></div>
                        </div>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <div className='group relative overflow-hidden border-2 border-white/50  '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> place</span></div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3x1 text-white'> content </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Gallery;
