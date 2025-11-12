"use client";

import { useState } from "react";

const MenuButton = ({
  isOpen = false,
  onToggle = () => {},
  className = "",
  ariaLabel = "Menu",
  size = "default",
}) => {
  // Size variants
  const sizeClasses = {
    small: "w-6 h-6",
    default: "w-8 h-8",
    large: "w-10 h-10",
  };

  const lineClasses = {
    small: "h-0.5",
    default: "h-0.5",
    large: "h-0.75",
  };

  const gapClasses = {
    small: "space-y-1",
    default: "space-y-1.5",
    large: "space-y-2",
  };

  return (
    <button
      type="button"
      className={`relative flex flex-col justify-center ${sizeClasses.default} ${gapClasses.default} ${className}`}
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      role="button"
    >
      {/* Top line */}
      <span className={`bg-current rounded-full ${lineClasses.default}`} />

      {/* Bottom line */}
      <span
        className={`bg-current w-2/3 ml-auto rounded-full ${lineClasses.default} `}
      />
    </button>
  );
};

export default MenuButton;
