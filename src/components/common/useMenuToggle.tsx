import { useState } from 'react';

const useMenuToggle = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return { menuActive, handleToggle };
};

const getScrollbarWidth = (): number => {
  // Create a temporary div container and append it into the body
  const container = document.createElement('div');
  // Append the container to the body
  document.body.appendChild(container);

  // Force scrollbar on the container
  container.style.overflow = 'scroll';

  // Add ad fake div inside the container
  const inner = document.createElement('div');
  container.appendChild(inner);

  // Calculate the width based on the container width minus its child width
  const scrollbarWidth = container.offsetWidth - inner.offsetWidth;

  // Remove the container from the body
  document.body.removeChild(container);

  return scrollbarWidth;
};

export { useMenuToggle, getScrollbarWidth };