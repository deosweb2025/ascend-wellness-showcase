import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { X, ChevronLeft, ChevronRight, Maximize2, Download, Heart } from "lucide-react";
import heroImage from "@/assets/hero-gallery.jpg";

// Interior Gallery Images
import singleBed from "@/assets/gallery/single-bed.png";
import doubleBed from "@/assets/gallery/double-bed2.png";
import doubleBed2 from "@/assets/gallery/double-bed.png";
import fiveSharing from "@/assets/gallery/fivesharing.jpg";
import fiveSharing2 from "@/assets/gallery/fivesharing2.png";
import dormitory from "@/assets/gallery/dormitory.png";
import dormitory2 from "@/assets/gallery/dormatory2.png";
import dining from "@/assets/gallery/dining.jpg";
import classroom from "@/assets/gallery/classroom.jpg";
import kitchen from "@/assets/gallery/kitchen.jpg";

// Food Gallery Images
import breakfast from "@/assets/gallery/breakfast.jpeg";
import breakfast2 from "@/assets/gallery/breakfast2.jpg";
import lunch from "@/assets/gallery/lunch.jpeg";
import salad from "@/assets/gallery/salad.jpeg";
import dinner1 from "@/assets/gallery/dinner1.jpg";
import dinner2 from "@/assets/gallery/dinner2.jpg";
import dinner3 from "@/assets/gallery/dinner3.jpg";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
  description?: string;
  featured?: boolean;
};

type Tab = "all" | "interior" | "food" | "accommodation" | "common";

const interiorImages: GalleryImage[] = [
  { 
    src: singleBed, 
    title: "Single Bed Room", 
    category: "Accommodation",
    description: "Private single rooms designed for personal healing journey",
    featured: true
  },
  { 
    src: doubleBed, 
    title: "Double Bed Room", 
    category: "Accommodation",
    description: "Comfortable double occupancy rooms with premium amenities"
  },
  { 
    src: doubleBed2, 
    title: "Double Bed Room (Alternative)", 
    category: "Accommodation"
  },
  { 
    src: fiveSharing, 
    title: "Five Sharing Room", 
    category: "Accommodation",
    description: "Group accommodation fostering community healing"
  },
  { 
    src: fiveSharing2, 
    title: "Five Sharing Room", 
    category: "Accommodation",
    featured: true
  },
  { 
    src: dormitory, 
    title: "Dormitory", 
    category: "Accommodation",
    description: "Shared living spaces promoting peer support"
  },
  { 
    src: dormitory2, 
    title: "Dormitory", 
    category: "Accommodation"
  },
  { 
    src: dining, 
    title: "Dining Area", 
    category: "Common Areas",
    description: "Spacious dining hall serving nutritious meals",
    featured: true
  },
  { 
    src: classroom, 
    title: "Therapy Room", 
    category: "Common Areas",
    description: "Dedicated spaces for individual and group therapy sessions"
  },
  { 
    src: kitchen, 
    title: "Kitchen Facilities", 
    category: "Common Areas",
    description: "Professional kitchen preparing healthy, balanced meals"
  },
];

const foodImages: GalleryImage[] = [
  { 
    src: breakfast, 
    title: "Nutritious Breakfast", 
    category: "Food",
    description: "Balanced morning meals to start the day right",
    featured: true
  },
  { 
    src: breakfast2, 
    title: "Alternative Breakfast", 
    category: "Food"
  },
  { 
    src: lunch, 
    title: "Balanced Lunch", 
    category: "Food",
    description: "Wholesome midday meals designed by nutritionists",
    featured: true
  },
  { 
    src: salad, 
    title: "Fresh Salad Bar", 
    category: "Food",
    description: "Daily fresh salads with organic ingredients"
  },
  { 
    src: dinner1, 
    title: "Traditional Dinner", 
    category: "Food"
  },
  { 
    src: dinner2, 
    title: "Evening Meal", 
    category: "Food"
  },
  { 
    src: dinner3, 
    title: "Evening Meal", 
    category: "Food"
  },
];

const allImages = [...interiorImages, ...foodImages];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const categories = [
    { id: "all", label: "All Photos", count: allImages.length },
    { id: "interior", label: "Interior", count: interiorImages.length },
    { id: "food", label: "Food", count: foodImages.length },
    { id: "accommodation", label: "Accommodation", count: interiorImages.filter(img => img.category === "Accommodation").length },
    { id: "common", label: "Common Areas", count: interiorImages.filter(img => img.category === "Common Areas").length },
  ];

  const filteredImages = activeTab === "all" 
    ? allImages 
    : activeTab === "interior" 
      ? interiorImages 
      : activeTab === "food" 
        ? foodImages 
        : activeTab === "accommodation"
          ? interiorImages.filter(img => img.category === "Accommodation")
          : interiorImages.filter(img => img.category === "Common Areas");

  const featuredImages = allImages.filter(img => img.featured);

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setLightboxIndex(filteredImages.findIndex(img => img.src === image.src));
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
    setLightboxIndex(newIndex);
  };

  const toggleFavorite = (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(imageSrc) 
        ? prev.filter(src => src !== imageSrc)
        : [...prev, imageSrc]
    );
  };

  const downloadImage = (imageSrc: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `ascend-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch(e.key) {
        case 'Escape':
          setSelectedImage(null);
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <PageLayout>
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
          <motion.img
            src={heroImage}
            alt="ASCEND Gallery"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-24"
        >
          <div className="text-reveal">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 tracking-tight">
              Our Gallery
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary-foreground/90 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Experience our world-class facilities and healing environment through our visual journey
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex gap-3 bg-foreground/10 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <span className="text-primary-foreground font-medium">
              {allImages.length} Photos
            </span>
            <span className="text-primary-foreground/70">•</span>
            <span className="text-primary-foreground/80">
              Updated regularly
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Images Carousel */}
      <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Featured Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most cherished spaces and experiences
            </p>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide scroll-smooth">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-primary-foreground font-display text-lg font-medium">
                        {image.title}
                      </p>
                      <p className="text-primary-foreground/80 text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Enhanced Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id as Tab)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-foreground hover:bg-secondary hover:shadow"
                }`}
              >
                {category.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === category.id 
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-foreground/10 text-foreground"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Masonry Grid Layout */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-6"
              >
                <div 
                  className="gallery-item group rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick(image, index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(image.src, e)}
                      className="absolute top-4 right-4 w-10 h-10 bg-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-foreground/30"
                      aria-label="Add to favorites"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.includes(image.src) ? 'fill-red-500 text-red-500' : 'text-primary-foreground'}`}
                      />
                    </button>
                    
                    {/* Image Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-display text-xl text-primary-foreground font-medium mb-2">
                          {image.title}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm mb-3">
                          {image.category}
                        </p>
                        {image.description && (
                          <p className="text-primary-foreground/90 text-sm leading-relaxed">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Lightbox Controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="w-12 h-12 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all hover:scale-110"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 text-background text-sm">
                  {lightboxIndex + 1} / {filteredImages.length}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => toggleFavorite(selectedImage.src, e)}
                  className="w-12 h-12 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all hover:scale-110"
                  aria-label="Toggle favorite"
                >
                  <Heart 
                    className={`w-6 h-6 ${favorites.includes(selectedImage.src) ? 'fill-red-500 text-red-500' : ''}`}
                  />
                </button>
                <button
                  onClick={(e) => downloadImage(selectedImage.src, selectedImage.title, e)}
                  className="w-12 h-12 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all hover:scale-110"
                  aria-label="Download image"
                >
                  <Download className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFullscreen(!isFullscreen);
                  }}
                  className="w-12 h-12 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all hover:scale-110"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-background/20 hover:bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative ${isFullscreen ? 'w-screen h-screen' : 'max-w-[90vw] max-h-[80vh]'} transition-all duration-300`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className={`${isFullscreen ? 'w-full h-full' : 'w-auto h-auto'} object-contain rounded-2xl shadow-2xl`}
              />
              
              {/* Image Info */}
              {!isFullscreen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6 rounded-b-2xl"
                >
                  <div className="max-w-4xl mx-auto">
                    <h3 className="font-display text-2xl text-background mb-2">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-background text-sm">
                        {selectedImage.category}
                      </span>
                      <span className="text-background/70 text-sm">
                        {filteredImages.length} photos in collection
                      </span>
                    </div>
                    {selectedImage.description && (
                      <p className="text-background/90 leading-relaxed">
                        {selectedImage.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helper Text */}
      <div className="fixed bottom-6 right-6 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-foreground/70 shadow-lg z-40">
        Use ← → arrows to navigate • Click image to close
      </div>
    </PageLayout>
  );
};

export default Gallery;