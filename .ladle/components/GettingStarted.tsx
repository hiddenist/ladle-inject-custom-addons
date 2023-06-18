import React from "react"
import { styled } from "styled-components"

const packageManagers: ReadonlyArray<string> = ["npm", "yarn", "pnpm"]
const defaultPackageManager = "pnpm"

const Container = styled.div`
  display: grid;
  gap: 8px;
`

const PlainFormField = styled.input`
  &,
  .ladle-addon-modal-body & {
    background-color: transparent;
    border: none;
  }
`

const LinkButton = styled(PlainFormField).attrs({ as: "button" })`
  color: var(--ladle-color-accent);
  cursor: pointer;
  text-decoration: underline;
  padding: 10px 0;
  &:hover {
    color: var(--ladle-color-hover);
  },
`

const PlainSelect = styled(PlainFormField).attrs({ as: "select" })`
  background-color: transparent;
  border: none;
`

const Label = styled.label`
  font-size: 14px;
`

const SelectPackageManager = styled.div`
  padding-bottom: 1px;
`

export const GettingStarted: React.FC<{ packageName: string }> = ({
  packageName,
}) => {
  const [showPm, setShowPm] = React.useState(false)
  const [packageManager, setPackageManager] = React.useState<string>(
    defaultPackageManager
  )

  const pm =
    (packageManagers.includes(packageManager) && packageManager) ||
    defaultPackageManager

  const installCommand =
    pm === "npm"
      ? `npm install --save-dev ${packageName}`
      : `${pm} add -D ${packageName}`

  const selectPm = (
    <>
      <Label htmlFor="packageManager">
        Package manager:{" "}
        <PlainSelect
          name="packageManager"
          onChange={(ev) => {
            setPackageManager(ev.target.value)
          }}
        >
          {packageManagers.map((p) => (
            <option key={p} selected={p === packageManager}>
              {p}
            </option>
          ))}
        </PlainSelect>
      </Label>
    </>
  )

  const showPmButton = (
    <LinkButton onClick={() => setShowPm(true)}>
      I don't use {packageManager}
    </LinkButton>
  )

  return (
    <Container>
      <pre className="ladle-code">{installCommand}</pre>
      <SelectPackageManager>
        {showPm ? selectPm : showPmButton}
      </SelectPackageManager>
    </Container>
  )
}
