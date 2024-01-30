"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Badge,
    Avatar,
} from "@nextui-org/react";
import logo from "@/public/logo-mark.png";
import Image from "next/image";
import Link from "next/link";
import MenuDropdown from "./menu-dropdown";
import gearVector from "@/public/gear-vector.svg";
import bellVector from "@/public/bell-vector.svg";

export default function Navigation() {
    return (
        <>
            <Navbar isBordered>
                <NavbarBrand className=" gap-x-4">
                    <Link href={"/"} className="">
                        <Image src={logo} alt="Todoer" width={40} height={40} />
                    </Link>
                    <h1 className="text-lg font-bold">ToDoer</h1>
                </NavbarBrand>
                <NavbarContent className="md:hidden" justify="end">
                    <MenuDropdown />
                </NavbarContent>
                <NavbarContent
                    className="hidden md:flex md:items-center md:justify-between"
                    justify="end"
                >
                    <NavbarItem>
                        <Link href={"/settings"}>
                            <Image
                                src={gearVector}
                                alt="Settings"
                                aria-label="Settings"
                            />
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={"/notifications"}>
                            <Badge content="5" color="danger" size="sm">
                                <Image
                                    src={bellVector}
                                    alt="notifications"
                                    aria-label="Notifications"
                                />
                            </Badge>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={"/profile"}>
                            <Avatar
                                src="https://i.pravatar.cc/100?img=3"
                                size="md"
                                aria-label="Profile"
                            />
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
