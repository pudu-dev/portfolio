export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      /* custom breakpoints*/
      screens: {
        /* Teléfonos */
        'phone-little': '360px',
        'phone-middle': '390px',
        'phone-large': '430px',
            
        /* Tablets */
        'tablet-little': '768px',
        'tablet-middle': { min: '767px', max: '1023px' },
        'tablet-large': '1024px',
            
        /* Notebooks */
        'laptop-little': '1280px',
        'laptop-middle': '1440px',
            
        /* PCs */
        'desktop-little': '1536px',
        'desktop-large': '1920px',
            
        /* TVs */
        'tv': '2560px',
      },

      
      keyframes: {

        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

       
      },
      animation: {
        shine: 'shine linear infinite',
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
}
