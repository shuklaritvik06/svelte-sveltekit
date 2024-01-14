export const clickOutside = function (node: Node, params: () => void) {
  const handleClick = (event: Event) => {
    if (!node.contains(event.target as HTMLElement)) {
      params();
    }
  };

  document.addEventListener("click", handleClick, true);
  return {
    update() {
      console.log("Updated");
    },
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
};
