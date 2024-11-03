import React from 'react';

const Gallery = () => {
    const designs = [
        { name: "Arabic", description: "Inspired by traditional Arabic architecture, featuring ornate designs, rich colors, and intricate patterns.", image: require('../../assets/images/arabic.jpg') },
        { name: "Chinese", description: "Elegant and balanced, focusing on harmony, with elements like bamboo, jade, and red accents.", image: require('../../assets/images/chinese.jpg') },
        { name: "Coastal", description: "Relaxed and breezy, with neutral colors and beach-inspired decor to create a seaside ambiance.", image: require('../../assets/images/coastle.jpg') },
        { name: "Girls", description: "Soft and playful designs, often incorporating pastel colors, floral patterns, and cozy elements.", image: require('../../assets/images/girls.jpg') },
        { name: "Indian", description: "Vibrant and bold, featuring colorful fabrics, intricate patterns, and cultural artifacts.", image: require('../../assets/images/indian_interior_design.jpg') },
        { name: "Japanese", description: "Minimalist and tranquil, emphasizing natural materials, simplicity, and Zen-inspired decor.", image: require('../../assets/images/japanese_interior_design.jpg') },
        { name: "Minimalistic", description: "Clean and uncluttered, focusing on functionality, neutral colors, and sleek, simple lines.", image: require('../../assets/images/minimilist.jpg') },
        { name: "Roman", description: "Luxurious and elegant, inspired by ancient Rome with columns, sculptures, and grand decor.", image: require('../../assets/images/roman.jpg') },
        { name: "Rustic", description: "Warm and cozy, featuring natural materials like wood and stone, with a rugged aesthetic.", image: require('../../assets/images/african_interior_design.jpg') },
        { name: "Tech", description: "Modern and innovative, incorporating smart technology, sleek lines, and futuristic elements.", image: require('../../assets/images/high_tect_interior_design.jpg') },
    ];

    return (
        <div className="px-8 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Interior Design Gallery</h1>
            <div className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {designs.map((design, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={design.image}
                            alt={design.name}
                            className="w-full h-64 object-cover rounded-lg transition-transform transform"
                        />
                        <div className="absolute inset-0 bg-purpleColor bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col justify-end p-4 text-white">
                            <h2 className="text-lg font-semibold">{design.name}</h2>
                            <p className="text-sm mt-1 line-clamp-3">{design.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
