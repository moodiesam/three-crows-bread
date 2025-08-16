import React from 'react';
import Image from 'next/image';

// Photos are hardcoded in for now but switch to fetch from an API when available
const photos = [
    'breadPhoto1.jpg',
    'breadPhoto2.jpg',
    'breadPhoto3.jpg',
    'breadPhoto4.jpg',
    'breadPhoto5.jpg',
    'breadPhoto6.jpg',
    'breadPhoto7.jpg'
    // Add more filenames as needed
];

export default function PhotoGallery() {
    return (
        <section className="min-h-screen bg-black flex flex-col items-center py-12">
            <h1 className="text-white text-3xl mb-8 text-center">Photo Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
                {photos.map((photo, idx) => (
                    <div key={idx} className="flex justify-center">
                        <Image
                            src={`/breadPhotos/${photo}`}
                            alt={`Bread photo ${idx + 1}`}
                            width={400}
                            height={300}
                            className="rounded shadow-lg object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}