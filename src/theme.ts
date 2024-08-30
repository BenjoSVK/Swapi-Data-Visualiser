import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  colors: {
    light: {
      primary: "#ffffff",
      secondary: "#f0f0f0",
      text: "#000000",
      button: "#191b1d",
    },
    dark: {
      primary: "#1a202c",
      secondary: "#2d3748",
      text: "#ffffff",
      button: "#191b1d",
    },
  },
  fonts: {
    heading: "Georgia, serif",
    body: "Arial, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "light.primary" : "dark.primary",
        color: props.colorMode === "light" ? "light.text" : "dark.text",
      },
      container: {
        m: "0 auto",
        p: "0 auto",
      },
    }),
  },
  components: {
    Container: {
      baseStyle: {
        m: "0",
        p: "0",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "lg",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === "light" ? "gray.100" : "gray.900",
          color: props.colorMode === "light" ? "light.button" : "dark.text",
        }),
        navbarButton: (props: any) => ({
          mx: 1,
          borderRadius: 50,
          bg: "none",
          fontWeight: 500,
          letterSpacing: 0.5,
          color: props.colorMode === "light" ? "gray.500" : "gray.300",
          _hover: {
            transform: "scale(1.1)",
            color: props.colorMode === "light" ? "light.button" : "gray.100",
          },
          _active: {
            transform: "scale(0.9)",
          },
        }),
        pagination: (props: any) => ({
          bg: "none",
          textDecoration: "none",
          color: "gray.500",
          _hover: {
            transform: "scale(1.1)",
            color:
              props.colorMode === "light" ? "light.button" : "light.primary",
          },
          _active: {
            transform: "scale(0.9)",
          },
        }),
        DrawerBtn: (props: any) => ({
          fontWeight: 500,
          _hover: { transform: "scale(1.1)" },
        }),
        HamburgerBtn: (props: any) => ({
          bg: "none",
          mr: 2,
          color: props.colorMode === "light" ? "gray.600" : "gray.200",
          _hover: {
            transform: "scale(1.1)",
            transition: "transform 0.3s",
            color: props.colorMode === "light" ? "light.button" : "gray.100",
          },
          _active: {
            transform: "scale(0.9)",
            transition: "transform 0.2s",
          },
        }),
      },
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === "light" ? "light.primary" : "dark.primary",
        },
        header: {
          color:
            props.colorMode === "light" ? "dark.secondary" : "light.secondary",
        },
        body: {
          color:
            props.colorMode === "light" ? "dark.secondary" : "light.secondary",
        },
        footer: {
          bg: props.colorMode === "light" ? "gray.50" : "dark.primary",
          color:
            props.colorMode === "light" ? "dark.secondary" : "light.secondary",
        },
      }),
      variants: {
        main: (props: any) => ({
          container: {
            bg: props.colorMode === "light" ? "gray.50" : "gray.800",
            minH: "100%",
            maxH: "100%",
          },
          body: {
            py: 3,
            px: 4,
          },
          footer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 5,
            pt: 2,
            textAlign: "center",
          },
        }),
        funky: (props: any) => ({
          container: {
            bg: props.colorMode === "light" ? "gray.100" : "blue.800",
            boxShadow: "xl",
            maxwidth: "xs",
            borderRadius: "lg",
            transform: "0.4s ease-in-out",
            transition: "transform 0.4s",
            _hover: {
              bg: props.colorMode === "light" ? "gray.100" : "blue.700",
              transform: "scale(1.05)",
              boxShadow: "2xl",
            },
          },
          body: {
            p: 3,
          },
          header: {
            pt: 2,
            p: 0,
          },
        }),
      },
    },
    Drawer: {
      sizes: {
        sm: {
          dialog: {
            maxW: "23vw",
          },
        },
        md: {
          dialog: {
            maxW: "md",
          },
        },
        lg: {
          dialog: {
            maxW: "lg",
          },
        },
        xl: {
          dialog: {
            maxW: "100vw",
          },
        },
      },
    },
    DrawerCloseButton: {
      customVariant: {
        borderRadius: "3xl",
      },
    },
  },
});

export default customTheme;
