"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css"; // Import the vanilla CSS file
import heroImg from "/src/assets/images/hero.jpg";
import hairImg from "/src/assets/images/services/haircut.jpg";
import color from "/src/assets/images/services/haircolor.jpg";
import treatment from "/src/assets/images/services/treatment.jpg";
import chems from "/src/assets/images/services/chems.jpg";
import manicure from "/src/assets/images/services/manicure.png";
import peds from "/src/assets/images/services/ped.jpg";
import lash from "/src/assets/images/services/lash.jpg";
import bridal from "/src/assets/images/services/bridal.png";
import brows from "/src/assets/images/services/brows.jpg";
import perm from "/src/assets/images/services/perm.jpg";

const servicesData = [
  {
    id: "hair",
    name: "Hair ",
    inTitle: "Hair services",
    description:
      "Transform your look with our expert hair styling, coloring, and treatments.",
    subCategories: [
      {
        id: "haircuts",
        name: "Haircuts & Styling",
        bgImage: hairImg,
        items: [
          {
            id: "womens-haircut-blowdry",
            name: "Women's Haircut & Blow-Dry",
            price: "40–60",
          },
          { id: "blowout", name: "Blowout", price: 30 },
          {
            id: "curls-waves",
            name: "Curls/Waves (Flat or Curling Iron)",
            price: "40–70",
          },
          {
            id: "evening-updo",
            name: "Evening / Bridal Updo",
            price: "90–150",
          },
          { id: "mens-haircut", name: "Men’s Haircut", price: "30–40" },
          {
            id: "clipper-cut",
            name: "Clipper Cut (Fade, Buzz)",
            price: "25–35",
          },
          {
            id: "kids-haircut",
            name: "Kids’ Haircut (Up to 10 Years)",
            price: "20–30",
          },
        ],
      },
      {
        id: "coloring",
        bgImage: color,
        name: "Color Services",
        items: [
          { id: "root-touch-up", name: "Root Touch-Up", price: "70–90" },
          { id: "full-color", name: "Full Color", price: "100–150" },
          {
            id: "partial-highlights",
            name: "Partial Highlights",
            price: "120–160",
          },
          { id: "full-highlights", name: "Full Highlights", price: "150–200" },
          { id: "balayage-ombre", name: "Balayage / Ombre", price: "180–250" },
          { id: "airtouch", name: "AirTouch", price: "From 250" },
          { id: "lowlights", name: "Lowlights", price: "120–160" },
          {
            id: "toner-gloss",
            name: "Toner / Gloss (Shades EQ)",
            price: "40–70",
          },
        ],
      },
      {
        id: "treatments",
        bgImage: treatment,
        name: "Hair Care & Treatments",
        items: [
          {
            id: "hair-mask",
            name: "Hair Mask + Scalp Massage",
            price: "15–25",
          },
          {
            id: "repair-treatment",
            name: "Repair Treatment (Olaplex, K18)",
            price: "25–50",
          },
          { id: "hair-spa", name: "Hair SPA Treatment", price: "40–70" },
        ],
      },
      {
        id: "chemical-services",
        bgImage: chems,
        name: "Chemical Services",
        items: [
          {
            id: "keratin-alternative",
            name: "Keratin Alternative (Formaldehyde-Free)",
            price: "180–250",
          },
          { id: "perm", name: "Perm", price: "120–200" },
        ],
      },
    ],
  },
  {
    id: "nails",
    bgImage: heroImg,
    name: "Manicure ",
    inTitle: `Our Pedicure Expereince`,
    description: `Pamper your hands and feet with our expert nail and pedicure services.
`,
    subCategories: [
      {
        id: "manicures",
        bgImage: manicure,
        name: "Manicures",
        items: [
          { id: "regular-mani", name: "Regular Manicure (Dry)", price: 50 },
          {
            id: "regular-manipolish",
            name: "Regular Manicure + polish",
            price: 65,
          },
          {
            id: "shellac-short",
            name: "Shellac + Dry Manicure - Short",
            price: 85,
          },
          {
            id: "shellac-medium",
            name: "Shellac + Dry Manicure - Medium",
            price: 90,
          },
          {
            id: "shellac-long",
            name: "Shellac + Dry Manicure - Long",
            price: 95,
          },
          {
            id: "hard-gel-overlay-short",
            name: "Hard Gel Overlay (Short)",
            price: 90,
          },
          {
            id: "hard-gel-overlay-medium",
            name: "Hard Gel Overlay (Medium)",
            price: 100,
          },
          {
            id: "hard-gel-overlay-long",
            name: "Hard Gel Overlay (Long)",
            price: 110,
          },
          {
            id: "nail-extensions-short",
            name: "Short Nail Extensions",
            price: 120,
          },
          {
            id: "nail-extensions-medium",
            name: "Medium Nail Extensions",
            price: 130,
          },
          {
            id: "nail-extensions-long",
            name: "Long Nail Extensions",
            price: 140,
          },
          {
            id: "nail-removal-no-coating",
            name: "Removing Nails Without Any Coating",
            price: 20,
          },
        ],
      },

      {
        id: "pedicures",
        bgImage: peds,
        name: "Pedicures",
        items: [
          {
            id: "pedi-regular",
            name: "Pedicure with Regular Polish",
            price: 85,
          },
          {
            id: "pedi-shellac-toes",
            name: "Pedicure with Shellac (Toes Only)",
            price: 85,
          },
          {
            id: "pedi-shellac-feet",
            name: "Pedicure with Shellac + Feet",
            price: 100,
          },
          {
            id: "pedi-classic",
            name: "Classic Pedicure (Cleaning Only)",
            price: 80,
          },
          { id: "nail-repair-single", name: "Repair One Nail", price: 10 },
          {
            id: "nail-art-chrome-french",
            name: "Chrome / French / Simple Design",
            price: 10,
          },
        ],
      },

      {
        id: "pedicure-podology",
        bgImage: peds,
        name: "Pedicure with Podology Elements",
        items: [
          {
            id: "pedi-professional",
            name: "Professional Pedicure",
            price: 100,
          },
          {
            id: "ingrown-nail-treatment-single",
            name: "Involuted & Ingrown Nail Treatment (1 Toe)",
            price: 50,
          },
          {
            id: "titanium-unibrace",
            name: "Titanium Nail Brace / UniBrace",
            price: 100,
          },
          {
            id: "corn-treatment-pressure-relief",
            name: "Corn Treatment + Pressure Relief",
            price: 30,
          },
          {
            id: "nail-fungus-single",
            name: "Nail Fungus Treatment (1 Nail)",
            price: 50,
          },
          {
            id: "nail-fungus-all",
            name: "Nail Fungus Treatment (10 Nails)",
            price: 150,
          },
          { id: "podorepair-nail", name: "Podorepair Nail", price: 50 },
        ],
      },
    ],
  },

  {
    id: "facial",
    bgImage: heroImg,
    inTitle: `Makeup `,
    name: "  Makeup",
    description:
      "Enhance your natural beauty with our brow, lash, and permanent makeup services.",
    subCategories: [
      {
        id: "makeup-services",
        bgImage: bridal, // replace with your actual image import
        name: "Bridal makeup ",
        items: [
          { id: "bridal-trial", name: "Bridal Trial", price: 110 }, // avg of 100–120
          {
            id: "wedding-makeup-bride",
            name: "Bridal Makeup (Bride)",
            price: 180,
          }, // avg of 150–180
          {
            id: "glam",
            name: "glam Makeup",
            price: 120,
          }, // avg of 100–120
          { id: "groom-makeup", name: "Groom Makeup", price: 60 }, // avg of 100–120
          { id: "photoshoot-makeup", name: "Photoshoot Makeup", price: 120 }, // avg of 90–100
          { id: "strip-lashes", name: "strip Lashes  ", price: 10 }, // avg of 10–15

          { id: "travel-fee", name: "Travel Fee (Outside Salon)", price: 20 }, // starting price
        ],
      },
    ],
  },

  {
    id: "Lashes",
    bgImage: heroImg,
    inTitle: `Lashes / brows `,
    name: "Lashe/Brows",
    description:
      "Enhance your natural beauty with our brow, lash, and permanent makeup services.",
    subCategories: [
      {
        id: "brows",
        bgImage: brows,
        name: "Brows & Lamination",
        items: [
          { id: "brow-shaping", name: "Brow Shaping & Tinting", price: 40 },
          {
            id: "brow-lash-tint",
            name: "Brow Shaping & Tinting + Lash Tint",
            price: 50,
          },
          {
            id: "brow-lamination",
            name: "Brow Lamination with Tint",
            price: 80,
          },
          {
            id: "lash-lamination",
            name: "Lash Lamination with Tint",
            price: 80,
          },
        ],
      },

      // {
      //   id: "lashes",
      //   bgImage: lash,
      //   name: "Lash Extensions",
      //   items: [
      //     { id: "classic-full", name: "Classic Full Set", price: 110 },
      //     { id: "classic-fill-2w", name: "Classic Fill (2 Weeks)", price: 55 },
      //     { id: "classic-fill-3w", name: "Classic Fill (3 Weeks)", price: 65 },
      //     { id: "hybrid-full", name: "Hybrid Full Set", price: 130 },
      //     { id: "hybrid-fill-2w", name: "Hybrid Fill (2 Weeks)", price: 60 },
      //     { id: "hybrid-fill-3w", name: "Hybrid Fill (3 Weeks)", price: 70 },
      //     { id: "volume-full", name: "Volume Full Set", price: 150 },
      //     { id: "volume-fill-2w", name: "Volume Fill (2 Weeks)", price: 70 },
      //     { id: "volume-fill-3w", name: "Volume Fill (3 Weeks)", price: 80 },
      //     { id: "mega-full", name: "Mega Volume Full Set", price: 170 },
      //     { id: "mega-fill-2w", name: "Mega Volume Fill (2 Weeks)", price: 85 },
      //     { id: "mega-fill-3w", name: "Mega Volume Fill (3 Weeks)", price: 95 },
      //     { id: "lash-removal", name: "Removal", price: 30 },
      //     { id: "foreign-fill", name: "Foreign Fill", price: 15 },
      //   ],
      // },
    ],
  },

  {
    id: "Lashesx",
    bgImage: heroImg,
    inTitle: `Permanent Makeup`,
    name: "Permanent Makeup",
    description:
      "Enhance your natural beauty with our brow, lash, and permanent makeup services.",
    subCategories: [
      {
        id: "pmu",
        bgImage: perm,
        name: "Permanent Makeup & Removal",
        items: [
          { id: "pmu-eyebrow", name: "Permanent Eyebrow Makeup", price: 300 },
          { id: "pmu-lip", name: "Permanent Lip Makeup", price: 300 },
          {
            id: "pmu-eyeliner",
            name: "Permanent Eyeliner (Classic)",
            price: 250,
          },
          {
            id: "lash-enhancement",
            name: "Lash Enhancement (Thin Eyeliner)",
            price: 200,
          },
          {
            id: "dark-lip-neutralization",
            name: "Dark Lip Neutralization",
            price: 300,
          },
          { id: "pmu-removal", name: "PMU & Mini Tattoo Removal", price: 70 },
        ],
      },
    ],
  },
];

const Services = () => {
  const [activeTabId, setActiveTabId] = useState(servicesData[0].id);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(
    null,
  );
  // const isActive = activeSubCategoryId === subCategory.id;

  const activeService = servicesData.find(
    (service) => service.id === activeTabId,
  );

  const toggleSubCategory = (subCategoryId: string) => {
    setActiveSubCategoryId((prevId) =>
      prevId === subCategoryId ? null : subCategoryId,
    );
  };
  const tabsNavRef = useRef<HTMLElement>(null); // Ref for the navigation element

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = servicesData.findIndex(
        (service) => service.id === activeTabId,
      );
      let nextIndex = currentIndex;

      if (event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % servicesData.length;
        event.preventDefault(); // Prevent page scrolling
      } else if (event.key === "ArrowLeft") {
        nextIndex =
          (currentIndex - 1 + servicesData.length) % servicesData.length;
        event.preventDefault(); // Prevent page scrolling
      }

      if (nextIndex !== currentIndex) {
        setActiveTabId(servicesData[nextIndex].id);
      }
    };

    const navElement = tabsNavRef.current;
    if (navElement) {
      navElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [activeTabId, servicesData]); // Re-run effect if activeTabId or servicesData changes

  return (
    <div className="services-container" id="services">
      <div className="container">
        <nav
          className="tabs-nav"
          ref={tabsNavRef}
          tabIndex={0}
          aria-label="Service Categories"
        >
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`tab-button ${activeTabId === tab.id ? "active" : ""}`}
              role="tab"
              aria-selected={activeTabId === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              style={{
                position: "relative",
                fontFamily: "CustomFont",
              }}
            >
              {activeTabId === tab.id && (
                <motion.span
                  layoutId="slider-rect"
                  className="slider-rect"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div
                className="tab-button-content"
                style={{
                  left: 0,
                  top: 0,
                  width: "max-content",
                  zIndex: 9990,
                  position: "relative",
                }}
              >
                {tab.name}
              </div>
            </button>
          ))}
        </nav>

        <motion.div className="tab-content-wrapper">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="tab-content"
                role="tabpanel"
                style={{ width: "100%" }}
                id={`panel-${activeService.id}`}
                aria-labelledby={`tab-${activeService.id}`}
              >
                <div className="tabHeader">
                  <h2 className="service-title">{activeService.inTitle}</h2>
                  <p className="service-description">
                    {activeService.description}
                  </p>
                </div>

                <div className="sub-categories-container">
                  <div className=" services-list">
                    {activeService.subCategories.map((subCategory) => {
                      const isActive = activeSubCategoryId === subCategory.id; // ✅ inside the map, subCategory exists

                      return (
                        <div
                          style={{
                            backgroundImage: `url(${subCategory.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          className="service-card"
                          key={subCategory.id}
                        >
                          <h3 className="sub-category-title"></h3>

                          {/* <img src={subCategory.bgImage} alt="" /> */}
                          <div
                            className="shapeCont shapePrice"
                            style={{
                              backgroundColor: "var(--primary-color)",
                              paddingLeft: "1rem",
                              padding: ".2rem",
                              width: "120px",
                            }}
                          >
                            <button
                              className="secondary-button"
                              style={{
                                width: "96%",
                                background: "var(--secondary-color)",
                                padding: "0.5rem",
                                display: "flex",
                                justifyContent: "center",
                              }}
                              onClick={() => toggleSubCategory(subCategory.id)}
                            >
                              {isActive ? "Close" : "Show me"}
                            </button>
                            <div
                              className="shape1"
                              style={{
                                boxShadow: "-25px 25px var(--primary-color)",
                              }}
                            ></div>

                            <div
                              className="shape2"
                              style={{
                                boxShadow: "-25px 24px var(--primary-color)",
                              }}
                            ></div>
                          </div>

                          <div className="detCont">{subCategory.name}</div>

                          <div
                            className={`service-items ${
                              isActive ? "activeItem" : ""
                            }`}
                          >
                            {subCategory.items.map((item) => {
                              const itemActive = isActive; // ✅ linked to subCategory
                              return (
                                <div
                                  key={item.id}
                                  className={`service-item ${
                                    itemActive ? " " : ""
                                  }`}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "space-between",
                                    gap: "1rem",
                                    padding: "0.5rem 0",
                                  }}
                                >
                                  <div className="item-name">{item.name}</div>
                                  <div className="item-price">
                                    $
                                    {isNaN(Number(item.price)) ||
                                    item.price === ""
                                      ? item.price
                                      : `${item.price}`}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

// import services from "../data/services"; // your list of services
// import type { Service } from "../types/service";

// import "./Services.css"; // optional CSS styling

// const Services = () => {
//   return (
//     <section className="services-section">
//       <div className="container">
//         <h2 className="services-title">Our Services</h2>
//         <div className="services-list">
//           {services.map((service: Service) => (
//             <div className="service-card" key={service.id}>
//               <p className="service-description">{service.description}</p>
//               <div className="shapeCont shapePrice" style={{backgroundColor: 'var(--secondary-color)', paddingLeft: '1rem', padding:'.2rem', width: '150px'}}>

//                 <button className="primary-button" style={{width: '96%'}}  > show me </button>
//               <div className="shape1" style={{boxShadow: '-25px 25px var(--secondary-color)'}}></div>

//               <div className="shape2" style={{boxShadow: '-25px 24px var(--secondary-color)'}}></div>

//               </div>

//               <div className="detCont">
//                 {service.title}
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
