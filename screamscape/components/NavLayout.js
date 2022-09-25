// import { Content } from "./Content.js"
import { NavBox } from "./NavBox.js";

export const NavLayout = ({ children }) => (
  <NavBox
    css={{
      maxW: "100%"
    }}
  >
    {children}
    {/* <Content /> */}
  </NavBox>
);