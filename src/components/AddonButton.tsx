import React from "react"

export interface AddonButtonProps extends React.ComponentProps<"button"> {
  icon: React.ReactNode
  /**
   * Displayed in a tooltip on button hover. Also used as the button's default aria-label value.
   */
  tooltip: string
}

export const AddonButton: React.FC<AddonButtonProps> = ({
  icon,
  tooltip,
  children,
  ...buttonProps
}) => (
  <li>
    <button aria-label={tooltip} type="button" {...buttonProps}>
      {icon}
      <span className="ladle-addon-tooltip">{tooltip}</span>
    </button>
      {children}
  </li>
)
