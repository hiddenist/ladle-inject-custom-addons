import React from "react";

interface IconSvgProps extends React.ComponentProps<"svg"> {
  /**
   * @default 24
   */
  size?: number
}

const IconSvg: React.FC<IconSvgProps> = ({ size = 24, ...props }) => <svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke="currentColor"
  fill="none"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  {...props}
/>

export interface IconProps extends Omit<IconSvgProps, "children"> {}

export const CloseIcon: React.FC<IconProps> = ({
  size = 18,
  ...props
}) => {
  return (
    <IconSvg size={size} {...props}>
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M18 6L6 18M6 6l12 12" />
    </IconSvg>
  )
}

export const ExampleIcon: React.FC<IconProps> = (props) => {
  return (
    <IconSvg {...props}>
      <path d="M 21.609 10.914 C 18.931 17.502 12.002 22.249 12.002 22.249 C 12.002 22.249 4.872 17.177 2.394 10.914 C -0.669 3.172 8.281 -0.396 12.002 6.99 C 15.722 -0.396 24.744 3.201 21.609 10.914 Z" />
    </IconSvg>
  )
}
