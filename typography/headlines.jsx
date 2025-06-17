// components/Headings.js
import React from "react";

/**
 * H1: 36px on mobile, 72px on large screens, always Antonio
 */
export const H1 = React.forwardRef(({ children, klasse = "" }, ref) => (
    <h1
        ref={ref}
        className={`
      font-headline 
      text-[40px] md:text-[64px] lg:text-[56px] 2xl:text-[72px] 
       leading-tight 
      mb-4 ${klasse}
    `}
    >
        {children}
    </h1>
));
H1.displayName = "H1";

/**
 * H2: 24px on mobile, 40px on large screens, always Antonio
 */
export const H2 = React.forwardRef(({ children, klasse = "" }, ref) => (
    <h2
        ref={ref}
        className={`
      font-headline 
      text-[24px] lg:text-[40px] 
      mb-3 ${klasse}
    `}
    >
        {children}
    </h2>
));
H2.displayName = "H2";

/**
 * H3: 20px on mobile, 32px on large screens
 */
export const H3 = React.forwardRef(({ children, klasse = "" }, ref) => (
    <h3
        ref={ref}
        className={`
      font-body 
      text-[20px] lg:text-[28px]/8 
      font-semibold
      leading-tight
      mb-2 ${klasse}
    `}
    >
        {children}
    </h3>
));
H3.displayName = "H3";

/**
 * H4: 18px on mobile, 28px on large screens
 */
export const H4 = React.forwardRef(({ children, klasse = "" }, ref) => (
    <h4
        ref={ref}
        className={`
      font-headline 
      text-[18px] lg:text-[28px] 
      mb-2 ${klasse}
    `}
    >
        {children}
    </h4>
));
H4.displayName = "H4";

/**
 * H5: 16px on mobile, 24px on large screens
 */
export const H5 = React.forwardRef(({ children, klasse = "" }, ref) => (
    <h5
        ref={ref}
        className={`
      font-headline 
      text-[16px] lg:text-[24px] 
      mb-1 ${klasse}
    `}
    >
        {children}
    </h5>
));
H5.displayName = "H5";
