import React from 'react';

const Services = () => {
    return <section className="text-gray-600 body-font" id="available">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gradient">Available vehicles</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-sn">Currently the available rate of booking vehicle is ₹600 per 24hr and fuel is upto you.</p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th
                                className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100 rounded-tl rounded-bl">
                                2 Wheelers</th>
                            <th
                                className="px-4 py-3 title-font tracking-wider font-medium  text-sm bg-gray-100">
                                Discount</th>
                            <th
                                className="w-10 title-font tracking-wider font-medium  text-sm bg-gray-100 rounded-tr rounded-br">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-3 text-white">Ntorq-125</td>
                            <td className="px-4 py-3 text-lg text-white">15%</td>
                        </tr>
                        {/* <tr>
                            <td className="border-t-2 border-gray-200 px-4 py-3 text-white">Activa-125</td>
                            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-white">20%</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    </section>
};

export default Services;
