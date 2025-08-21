import { useRef } from "react";


export function useIsotop() {
  const isotopContainer = useRef<HTMLDivElement>(null);

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesLoaded = (await import("imagesloaded")).default;

    if (!isotopContainer.current) return;

    // Ensure all grid items are visible and properly styled
    const gridItems = isotopContainer.current.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      const element = item as HTMLElement;
      element.style.display = 'block';
      element.style.visibility = 'visible';
      element.style.opacity = '1';
    });

    // Initialize Isotope with more robust settings
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".grid-item",
      percentPosition: true,
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".grid-item",
      },
      filter: '*', // Show all items by default
    });

    // Immediate layout and show all items
    isotope.arrange({ filter: '*' });
    isotope.layout();

    // Ensure images are loaded before final layout
    imagesLoaded(isotopContainer.current, () => {
      isotope.arrange({ filter: '*' });
      isotope.layout();
      
      // Additional layout refresh
      setTimeout(() => {
        isotope.arrange({ filter: '*' });
        isotope.layout();
      }, 200);
    });

    // Force multiple layout calls to ensure visibility
    setTimeout(() => {
      isotope.arrange({ filter: '*' });
      isotope.layout();
    }, 100);
    
    setTimeout(() => {
      isotope.arrange({ filter: '*' });
      isotope.layout();
    }, 500);

    // Filter items on button click
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('.masonary-menu button');
    
    const eventListeners: Array<{ button: HTMLButtonElement; handler: (event: MouseEvent) => void }> = [];
    
    filterButtons.forEach(button => {
      const handleClick = (event: MouseEvent) => {
        const filterValue = button.getAttribute('data-filter') || '*';
        
        // First, reset all items to be visible
        const allItems = isotopContainer.current?.querySelectorAll('.grid-item');
        allItems?.forEach(item => {
          const element = item as HTMLElement;
          element.style.display = 'block';
          element.style.visibility = 'visible';
          element.style.opacity = '1';
          element.style.position = 'relative';
          element.style.transform = 'none';
        });
        
        // Apply the filter
        isotope.arrange({ filter: filterValue });
        
        // After filtering, properly hide non-matching items
        setTimeout(() => {
          allItems?.forEach(item => {
            const element = item as HTMLElement;
            const isVisible = filterValue === '*' || element.classList.contains(filterValue.replace('.', ''));
            
            // Remove any existing isotope classes
            element.classList.remove('isotope-hidden');
            
            if (!isVisible) {
              element.style.display = 'none';
              element.style.visibility = 'hidden';
              element.style.opacity = '0';
              element.style.position = 'absolute';
              element.style.left = '-9999px';
              element.classList.add('isotope-hidden');
            } else {
              element.style.display = 'block';
              element.style.visibility = 'visible';
              element.style.opacity = '1';
              element.style.position = 'relative';
              element.style.left = 'auto';
              element.style.transform = 'none';
            }
          });
          
          isotope.layout();
        }, 50);

        // For menu active class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        event.preventDefault();
      };

      button.addEventListener('click', handleClick);
      eventListeners.push({ button, handler: handleClick });
    });

    // Return cleanup function
    return () => {
      eventListeners.forEach(({ button, handler }) => {
        button.removeEventListener('click', handler);
      });
    };
  }

  return {
    isotopContainer,
    initIsotop,
  };
}
