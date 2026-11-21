import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function DropDown({
  options = [],
  defaultOption = options[0],
  mainClassName = "",
  boxClassName = "",
  itemsClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultOption ?? "");
  const containerRef = useRef(null);

  // Close the list when the user clicks or taps anywhere outside of it.
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    // Cleanup: remove the listener when the list closes or the component unmounts.
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div ref={containerRef} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${mainClassName} flex items-center justify-between cursor-pointer`}
        >
          {selected}
          <ChevronDown
            className={`duration-150 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className={`${boxClassName} absolute z-10`}>
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`${itemsClassName} block w-full text-left px-3 py-2 cursor-pointer`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
