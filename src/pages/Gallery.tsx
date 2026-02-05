import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-gallery.jpg";

// Interior Gallery Images
import singleBed from "@/assets/gallery/single-bed.jpg";
import doubleBed from "@/assets/gallery/double-bed.jpg";
import fiveSharing from "@/assets/gallery/five-sharing.jpg";
import dormitory from "@/assets/gallery/dormitory.png";
import dining from "@/assets/gallery/dining.jpg";
import classroom from "@/assets/gallery/classroom.jpg";
import kitchen from "@/assets/gallery/kitchen.jpg";

// Food Gallery Images
import breakfast from "@/assets/gallery/breakfast.jpeg";
import lunch from "@/assets/gallery/lunch.jpeg";
import salad from "@/assets/gallery/salad.jpeg";
import dinner1 from "@/assets/gallery/dinner1.jpg";
import dinner2 from "@/assets/gallery/dinner2.jpg";

const interiorImages = [
  { src: singleBed, title: "Single Bed Room", category: "Accommodation" },
  { src: doubleBed, title: "Double Bed Room", category: "Accommodation" },
  { src: fiveSharing, title: "Five Sharing Room", category: "Accommodation" },
  { src: dormitory, title: "Dormitory", category: "Accommodation" },
  { src: dining, title: "Dining Area", category: "Common Areas" },
  { src: classroom, title: "Therapy Room", category: "Common Areas" },
  { src: kitchen, title: "Kitchen Facilities", category: "Common Areas" },
];

const foodImages = [
  { src: breakfast, title: "Nutritious Breakfast", category: "Breakfast" },
  { src: lunch, title: "Balanced Lunch", category: "Lunch" },
  { src: salad, title: "Fresh Salad", category: "Healthy Options" },
  { src: dinner1, title: "Traditional Dinner", category: "Dinner" },
  { src: dinner2, title: "Evening Meal", category: "Dinner" },
];

type Tab = "interior" | "food";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Tab>("interior");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = activeTab === "interior" ? interiorImages : foodImages;

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ASCEND Gallery"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Gallery
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Take a virtual tour of our premium facilities and experience the
              ASCEND difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("interior")}
              className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === "interior"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Interior Gallery
            </button>
            <button
              onClick={() => setActiveTab("food")}
              className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === "food"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Food Gallery
            </button>
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gallery-item aspect-[4/3]"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-primary-foreground font-display text-lg">
                      {image.title}
                    </p>
                    <p className="text-primary-foreground/70 text-sm">
                      {image.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;
