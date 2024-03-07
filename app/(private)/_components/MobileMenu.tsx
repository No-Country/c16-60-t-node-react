"use client";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS_PRIVATE } from "@/constants";
import { useSheetState } from "@/store/sheet-state";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MobileMenu = () => {
  // Zustand
  const onOpen = useSheetState((state) => state.onOpen);
  const onClose = useSheetState((state) => state.onClose);
  const isOpen = useSheetState((state) => state.isOpen);

  const { user } = useUser();
  console.log();

  //React
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={onOpen}>
        <Menu />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left">
          <SheetHeader className="flex justify-center items-center">
            <SheetTitle className="my-4">
              <Logo />
            </SheetTitle>
            <div className="gap-4 grid py-4">
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="gap-4 grid py-4">
                  <div className="flex flex-col items-start gap-4">
                    {NAV_LINKS_PRIVATE.map(({ href, key, label, icon: Icon }) => (
                      <Button variant="ghost" key={key}>
                        <Link href={href} className="flex flex-row items-center gap-3 text-base">
                          <Icon color="#421c86" />
                          {label}
                        </Link>
                      </Button>
                    ))}
                    <Button variant="ghost" className="flex flex-row gap-3 py-6 text-base">
                      <UserButton afterSignOutUrl="/" />
                      {user?.firstName} {user?.lastName}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

//updated