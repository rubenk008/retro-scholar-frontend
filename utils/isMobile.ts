const isMobile = () => {
  if (typeof window !== "undefined" && window.innerWidth <= 550) {
    return true;
  } else {
    return false;
  }
};

export default isMobile;
