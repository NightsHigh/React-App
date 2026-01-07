type ButtonSize = "small" | "medium" | "large"
type ButtonTheme = "light" | "dark"

interface DynamicButtonProps {
  action: () => void
  size: ButtonSize
  theme: ButtonTheme
  text: string
}

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-8 py-5 text-base",
  large: "px-12 py-8 text-lg",
}

const themeClasses: Record<ButtonTheme, string> = {
  light: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  dark: "bg-gray-900 text-white hover:bg-gray-800",
}

export function DynamicButton({
  action,
  size,
  theme,
  text,
}: DynamicButtonProps) {
  return (
    <button
      onClick={action}
      className={`
        ${sizeClasses[size]}
        ${themeClasses[theme]}
        font-semibold
        rounded-lg
        cursor-pointer
      `}
    >
      {text}
    </button>
  )
}
