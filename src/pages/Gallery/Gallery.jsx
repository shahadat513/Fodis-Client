import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Array of image URLs
const images = [
    "https://i.ibb.co.com/Gphp9WT/pexels-ella-olsson-572949-1640772.jpg",
    "https://i.ibb.co.com/M9FHN8M/pexels-robinstickel-70497.jpg",
    "https://i.ibb.co.com/mSzpBTN/pexels-edwardeyer-687824.jpg",
    "https://i.ibb.co.com/3mh6yNX/pexels-chanwalrus-958545.jpg",
    "https://i.ibb.co.com/3mh6yNX/pexels-chanwalrus-958545.jpg",
    "https://i.ibb.co.com/DG4fw61/pexels-elevate-1267320.jpg",
    "https://i.ibb.co.com/MSPBskt/pexels-pixabay-262978.jpg",
    "https://i.ibb.co.com/FBs2CpN/pexels-prabal-9609844.jpg",
    "https://i.ibb.co.com/M1xttPr/pexels-nay-nyo-727253247-27603332.jpg",
    "https://i.ibb.co.com/CHMc3P4/pexels-renestrgar-10068752.jpg",
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle image click
    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <>
            <div
                className="relative md:h-[280px] h-80 bg-cover object-cover bg-center flex items-center justify-start text-center gap-10 mb-10"
                style={{ backgroundImage: "url('https://i.ibb.co.com/Qf7WKDG/pexels-nadin-sh-78971847-19252769.jpg')" }}
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white">
                    <h1 className="text-3xl font-bold">Home | Gallery</h1>
                </div>
            </div>
            <div>
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>Image Gallery</h1>

                {/* Image Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "10px",
                        padding: "10px",
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                                width: "100%", 
                                height: "200px", // Fixed height
                                objectFit: "cover",
                                cursor: "pointer",
                                borderRadius: "5px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>

                {/* Lightbox */}
                {open && (
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={images.map((image) => ({ src: image }))}
                        index={currentIndex}
                    />
                )}
            </div>
        </>
    );
};

export default Gallery;
