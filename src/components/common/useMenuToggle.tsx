import { useState } from 'react';

const useMenuToggle = () => {

  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return {menuActive, handleToggle};

};

export default useMenuToggle;