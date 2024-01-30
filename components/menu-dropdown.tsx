"use client";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    User,
    DropdownSection,
    Badge,
} from "@nextui-org/react";
import Image from "next/image";
import menuVector from "@/public/menu-vector.svg";
import Link from "next/link";

export default function MenuDropdown() {
    return (
        <Dropdown placement="bottom" backdrop="blur">
            <DropdownTrigger>
                <Image
                    src={menuVector}
                    alt="Mobile Menu"
                    width={20}
                    height={20}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
                <DropdownItem key={"Profile"}>
                    <Link href={"/profile"}>
                        <User
                            name="James Elton"
                            description="@jameselton"
                            avatarProps={{
                                src: "https://i.pravatar.cc/100?img=3",
                            }}
                        />
                    </Link>
                </DropdownItem>
                <DropdownItem key={"Notifications"}>
                    <Link href={"/notifications"}>Notifications</Link>
                </DropdownItem>
                <DropdownItem key="Settings">
                    <Link href={"/settings"}>Settings</Link>
                </DropdownItem>
                <DropdownItem key="Logout">Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
