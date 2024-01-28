"use client";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    User,
    DropdownSection,
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
                <DropdownItem key={"Profile"} href="/profile">
                    <User
                        name="James Elton"
                        description="@jameselton"
                        avatarProps={{
                            src: "https://i.pravatar.cc/100?img=3",
                        }}
                    />
                </DropdownItem>
                <DropdownItem key={"Notifications"} href="/notifications">
                    Notifications
                </DropdownItem>
                <DropdownItem key="Settings" href="/settings">
                    Settings
                </DropdownItem>
                <DropdownItem key="Logout">Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
