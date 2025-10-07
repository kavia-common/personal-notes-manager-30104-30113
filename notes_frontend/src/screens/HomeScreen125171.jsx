import React, { useEffect } from 'react';
import './home-screen-125-171.css';

/**
 * PUBLIC_INTERFACE
 * HomeScreen125171
 * This component renders the Figma-accurate Home Screen layout for the Notes app.
 * It mirrors the DOM structure from assets/home-screen-125-171.html and relies on
 * absolute positioning and generated CSS for pixel-perfect fidelity.
 * Image paths intentionally use /figmaimages/... to serve from the public directory.
 */
const HomeScreen125171 = () => {
  useEffect(() => {
    // If the original assets/home-screen-125-171.js has any interactions, port them here.
    // For now, only logging as per the provided stub.
    // eslint-disable-next-line no-console
    console.log('Home Screen 125:171 loaded');
  }, []);

  return (
    <div id="screen-root" className="screen" role="main" aria-label="Home Screen">
      {/* Rectangle 8 */}
      <div id="el-125-175" className="rectangle style-1" style={{ left: 24, top: 143, width: 365, height: 157 }} />

      {/* Book Review text */}
      <p id="el-125-176" className="text style-2 typo-13" style={{ left: 69, top: 168, width: 270, height: 103 }}>
        Book Review : The Design of Everyday Things by Don Norman
      </p>

      {/* Text placeholder (empty) */}
      <p id="el-125-177" className="text style-2 typo-13" style={{ left: 69, top: 190, width: 0, height: 32 }} />

      {/* Rectangle 11 */}
      <div id="el-125-178" className="rectangle style-3" style={{ left: 24, top: 298, width: 365, height: 123 }} />

      {/* Animes produced by Ufotable */}
      <p id="el-125-179" className="text style-2 typo-13" style={{ left: 69, top: 327, width: 254, height: 64 }}>
        Animes produced by Ufotable
      </p>

      {/* Rectangle 10 */}
      <div id="el-125-180" className="rectangle style-4" style={{ left: 24, top: 446, width: 365, height: 110 }} />

      {/* Mangas planned to read */}
      <p id="el-125-181" className="text style-2 typo-13" style={{ left: 69, top: 469, width: 259, height: 67 }}>
        Mangas planned to read
      </p>

      {/* Hero Text */}
      <p id="el-125-186" className="text style-5 typo-14" style={{ left: 24, top: 47, width: 115, height: 59 }}>
        Notes
      </p>

      {/* Button 1 (background button) */}
      <div id="el-125-187" className="button style-6" style={{ left: 339, top: 51, width: 50, height: 50 }}>
        <img src="/figmaimages/figma_image_125_187.png" alt="Button 1" width="50" height="50" />
      </div>

      {/* info_outline component (icon image as provided) */}
      <div id="el-125-188" className="component info-outline" style={{ left: 352, top: 64, width: 24, height: 24 }}>
        <img src="/figmaimages/figma_image_125_188_8_9.png" alt="info_outline" width="24" height="24" />
      </div>

      {/* Button 4 (background button) */}
      <div id="el-125-189" className="button style-6" style={{ left: 268, top: 51, width: 50, height: 50 }} />

      {/* search component (icon image as provided) */}
      <div id="el-125-190" className="component search" style={{ left: 281, top: 64, width: 24, height: 24 }}>
        <img src="/figmaimages/figma_image_125_190_8_12.png" alt="search" width="24" height="24" />
      </div>

      {/* Rectangle 13 */}
      <div id="el-136-37" className="rectangle style-7" style={{ left: 24, top: 581, width: 365, height: 120 }} />

      {/* Rectangle 9 */}
      <div id="el-136-38" className="rectangle style-8" style={{ left: 24, top: 726, width: 365, height: 100 }} />

      {/* Awesome tweets collection */}
      <p id="el-136-39" className="text style-2 typo-13" style={{ left: 69, top: 607, width: 287, height: 68 }}>
        Awesome tweets collection
      </p>

      {/* List of free & open source apps */}
      <p id="el-136-40" className="text style-2 typo-13" style={{ left: 69, top: 743, width: 297, height: 66 }}>
        List of free & open source apps
      </p>

      {/* Ellipse 1 (FAB background) */}
      <div id="el-125-191" className="ellipse style-39" style={{ left: 309, top: 777, width: 70, height: 70 }}>
        <img src="/figmaimages/figma_image_125_191.png" alt="Ellipse 1" width="70" height="70" />
      </div>

      {/* add component (plus icon) */}
      <div id="el-125-192" className="component add" style={{ left: 320, top: 788, width: 48, height: 48 }}>
        <img src="/figmaimages/figma_image_125_192_115_19.png" alt="add" width="48" height="48" />
      </div>
    </div>
  );
};

export default HomeScreen125171;
