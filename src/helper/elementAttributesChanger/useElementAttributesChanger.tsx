//To do: Naming for sub functions should be changed

export const useElementAttributesChanger = () => {
  const setStyleAttribute = (level: string, target: string) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    targetElement.setAttribute("style", `filter: brightness(${level})`);
  };

  const removeStyleAttribute = (target: string) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    targetElement.removeAttribute("style");
  };

  return {
    setStyleAttribute,
    removeStyleAttribute,
  };
};
