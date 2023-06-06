import React from "react"

export interface AddonButtonProps extends React.ComponentProps<"button"> {
  icon: React.ReactNode
  /**
   * Displayed in a tooltip on button hover. Also used as the button's default aria-label value.
   */
  tooltip: string
  /**
   * Adds a label to the button for accessibility purposes.
   */
  label?: string
  /**
   * Shows a badge on the button.
   * If a number is provided, that number will display in the badge.
   *
   * @default false
   */
  badge?: boolean | number
}

export const AddonButton: React.FC<AddonButtonProps> = ({
  icon,
  tooltip,
  children,
  badge = false,
  label = "",
  ...buttonProps
}) => (
  <li>
    <button aria-label={tooltip} type="button" {...buttonProps}>
      {icon}
      <span className="ladle-addon-tooltip">{tooltip}</span>
      {label && <label>{label}</label>}
      {badge && <div className="ladle-badge">{badge}</div>}
    </button>
    {children}
  </li>
)
