'use client'

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Logo from "./logo"

const components: { title: string; description: string }[] = [
  {
    title: "Our Mission",
    description:
      "Empowering communities with clean, affordable solar for a brighter, sustainable future.",
  },
  {
    title: "Our Solutions",
    description:
      "From residential to commercial installations, we deliver custom solar systems backed by reliable service and top-tier technology.",
  },
  {
    title: "Why Solar",
    description:
      "Harnessing the power of the sun is not just smart—it’s essential. Solar is clean, renewable, and the most abundant energy source on Earth.",
  },
  {
    title: "Co-Branding Opportunities",
    description:
      "Partner with us to bring solar to your audience. We offer co-branded solutions that help grow your impact and strengthen your brand.",
  },
  {
    title: "How It Works",
    description:
      "We make solar simple—consultation, design, installation, and support, all under one roof. Clear steps, no surprises.",
  },
  {
    title: "Our Impact",
    description:
      "Thousands of panels installed. Tons of carbon offset. We’re proud to power change—and we’re just getting started.",
  },
]

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className="font-normal text-white hover:text-primary transition duration-300">
  Home
</NavigationMenuLink>

          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/business" legacyBehavior passHref>
            <NavigationMenuLink className="font-normal text-white hover:text-primary transition duration-300">
              For Business
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-semibold  transition-all duration-300 hover:text-primary hover:scale-105">
            More
          </NavigationMenuTrigger>
          <NavigationMenuContent className="animate-fade-in">
            <ul className="grid gap-4 p-6 rounded-lg bg-white shadow-xl md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] transition-all duration-300">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-lg focus:shadow-md transition-all"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-semibold">
                      SolarNaija
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Grow your solar brand with SolarNaija’s white-label platform — showcase your own products and services under your brand while we power the tech behind it.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="For Utilities">
                Why that solar does not go on your roof.
              </ListItem>
              <ListItem title="For Landowners">
                Every project begins with you
              </ListItem>
              <ListItem title="Our Project">
                Generating energy across Nigeria.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm  font-semibold transition-all duration-300 hover:text-primary hover:scale-105">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent className="animate-fade-in">
            <ul className="grid w-[400px] gap-4 p-4 rounded-lg bg-white shadow-xl md:w-[500px] md:grid-cols-2 lg:w-[600px] transition-all duration-300">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*<NavigationMenuItem>
  <Link href="/shop" legacyBehavior passHref>
    <NavigationMenuLink
      className="font-bold bg-white-500 text-white rounded px-4 py-2 transition duration-300 hover:bg-white hover:text-green-500"
    >
      Shop
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>*/}

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-4 shadow-sm bg-white/90 backdrop-blur-md border border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-white hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold text-primary">{title}</div>
          <p className="line-clamp-2 text-sm text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
