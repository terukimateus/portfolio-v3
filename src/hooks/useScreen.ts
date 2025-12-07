const useScreen = () => {
  const handleScroll = (): string | null => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 200;

    return Array.from(sections).reduce<string | null>(
      (activeSection, section) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          return section.id;
        }

        return activeSection;
      },
      null
    );
  };

  return {
    handleScroll,
  };
};

export default useScreen;
