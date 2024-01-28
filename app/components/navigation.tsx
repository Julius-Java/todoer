"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import logo from "@/public/logo-mark.png";
import Image from "next/image";
import Link from "next/link";
import MenuDropdown from "./menu-dropdown";

export default function Navigation() {
    return (
        <>
            <Navbar isBordered>
                <NavbarBrand className="justify-between">
                    <Link href={"/"}>
                        <Image src={logo} alt="Todoer" width={40} height={40} />
                    </Link>
                    <h1 className="text-lg font-bold">ToDoer</h1>
                </NavbarBrand>
                <NavbarContent className="md:hidden" justify="end">
                    <MenuDropdown />
                </NavbarContent>
                <NavbarContent
                    className="hidden md:block"
                    justify="end"
                ></NavbarContent>
            </Navbar>
        </>
    );
}
