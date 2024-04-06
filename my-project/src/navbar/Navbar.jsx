import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-slate-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 flex-col">
                    <div className="flex flex-col items-center">
                        <h1 className='text-baby-powder text-2xl'>Elegant Food Catering</h1>
                        <div className="flex flex-row">
                            <div className="flex items-baseline space-x-4 ml-6">
                                <a href="/" className="text-baby-powder hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Home</a>
                                <a href="#" className="text-baby-powder hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Menu</a>
                                <a href="/gallery" className="text-baby-powder hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Gallery</a>
                                <a href="#" className="text-baby-powder hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
