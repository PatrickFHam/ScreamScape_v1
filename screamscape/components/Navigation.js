
import { Navbar, Dropdown, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

import { NavLayout } from "./NavLayout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { icons } from "./Icons.js";

import style from "../styles/Navigation.module.css";

export default function Navigation() {

  const { isDark } = useTheme();

  const router = useRouter();

  return (
    <NavLayout>
      <Navbar>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            SCREAMSCAPE
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor={ isDark ? "secondary" : "primary" }
          hideIn="xs"
          variant="underline"
        >
        <Navbar.Link
          href="/"
          isActive={router.asPath === "/" ? "true" : "false"}
          >
            Front Gate
        </Navbar.Link>
        <Navbar.Link
          href="/thelatest"
          isActive={router.asPath === "/thelatest" ? "true" : "false"}
          >
            The Latest
        </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Sorted News
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "45px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="six_flags_parks"
                icon={icons.yellow}
              >
                Six Flags Parks
              </Dropdown.Item>
              <Dropdown.Item
                key="cedar_fair_parks"
                icon={icons.blue}
              >
                Cedar Fair Parks
              </Dropdown.Item>
              <Dropdown.Item
                key="disney_parks"
                icon={icons.purple}
              >
                Disney Parks
              </Dropdown.Item>
              <Dropdown.Item
                key="universal_parks"
                icon={icons.red}
              >
                Universal Parks
              </Dropdown.Item>
              <Dropdown.Item
                key="busch_parks"
                icon={icons.green}
              >
                Busch Parks
              </Dropdown.Item>
              <Dropdown.Item
                key="other_parks"
                icon={icons.grey}
              >
                Others
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link
            href="/contact"
            isActive={router.asPath === "/contact" ? "true" : "false"}>
              About/Contact</Navbar.Link>
          <Navbar.Link
            href="/search"
            isActive={router.asPath === "/search" ? "true" : "false"}>
              Search</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <ThemeButton />
        </Navbar.Content>
      </Navbar>
    </NavLayout>
  );
}