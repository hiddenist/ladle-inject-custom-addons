import React from "react"
import { useAddonPanelPortal } from "src/utils/useAddonPanelPortal"

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
   * If a number or string is provided, that value will display in the badge.
   *
   * @default false
   */
  badge?: boolean | number | string
  /**
   * Determines the position/priority of the addon button within the existing ladle addons.
   * @default 0
   */
  position?: number
}

export const AddonButton: React.FC<AddonButtonProps> = ({
  icon,
  tooltip,
  children,
  badge = false,
  label = "",
  position,
  ...buttonProps
}) => {
  return useAddonPanelPortal(
    <>
      <button
        aria-label={tooltip}
        title={tooltip}
        type="button"
        {...buttonProps}
      >
        {icon}
        <span className="ladle-addon-tooltip">{tooltip}</span>
        {label && <label>{label}</label>}
        {badge && <div className="ladle-badge">{badge}</div>}
      </button>
      {children}
    </>,
    { position }
  )
}
