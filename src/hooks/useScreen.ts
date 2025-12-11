const useScreen = () => {
  const handleScroll = (): string | null => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const viewportCenter = window.scrollY + window.innerHeight / 2;

    for (const section of Array.from(sections)) {
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;

      if (viewportCenter >= offsetTop && viewportCenter < offsetBottom) {
        return section.id || null;
      }
    }

    return null;
  };

  return {
    handleScroll,
  };
};

export default useScreen;
