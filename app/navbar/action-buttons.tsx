'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import PopupForm from "../../components/pop-form/page"; // Update path based on actual location

const ActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  {/*<Link href="/">Sign in</Link>*/}
                  <button onClick={() => setIsOpen(true)}>Get Started</button>
                                     
                    <Link href="/">Home</Link>
                    <Link href="/">Partner</Link>
                     {/* <Link href="/">About</Link> 
                    */}

                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex md:space-x-4 text-white">
        {/*<Button variant="ghost" className="text-md">
          Sign in
        </Button>*/}
        <Button
          className="text-md bg-green-500 hover:bg-green-500"
          onClick={() => setIsOpen(true)}
        >
          Get Started
        </Button>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ActionButtons;
