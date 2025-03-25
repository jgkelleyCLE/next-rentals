'use client';
import React, { useState } from 'react';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FlexColumn } from '../UI';

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const mobileMenuLinks = [
    {
      title: 'Tents',
      image:
        'https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/7B487F91B0923473A0EC997E5C904F1F.jpg?alt=media&token=3f343ef4-d389-46ea-9b63-6623589502d5',
    },
    {
      title: 'Tables',
      image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/648178/1143315935.jpg',
    },
    {
      title: 'Chairs',
      image:
        'https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_0059.jpg?alt=media&token=91cb8946-1828-4f36-9775-dc5d49574d4a',
    },
  ];

  const list = mobileMenuLinks.map((item, index) => (
    <div key={index} className="relative w-full" onClick={() => navigationHandler(item)}>
      <div className="bg-black/40 inset-0 absolute z-20 top-0 left-0 w-full"></div>
      <Image
        width={200}
        height={150}
        alt={item.title}
        src={item.image}
        priority
        className="w-full h-[100px] object-cover z-10 rounded-md"
      />
      <h1 className="text-white text-2xl font-bold absolute left-2 bottom-0 z-30">{item.title}</h1>
    </div>
  ));

  const navigationHandler = (item) => {
    router.push(`/category/${item.title}`);
    setOpen(false);
  };

  return (
    <DrawerRoot placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IoMenu className="cursor-pointer text-white w-6 h-6 md:hidden ml-3" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <FlexColumn>
            <Image
              width={100}
              height={75}
              alt="Tentlify Rentals"
              src="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/Tenlify_Logo_Thin_Small.png?alt=media&token=59587449-7b7c-439f-a434-5b4059035b11"
              className="w-[150px]"
            />
          </FlexColumn>
        </DrawerHeader>
        <DrawerBody>
          <FlexColumn>
            {list}
            <div
              className="relative w-full"
              onClick={() => {
                router.push('/location');
                setOpen(false);
              }}
            >
              <div className="bg-black/30 inset-0 absolute z-20 top-0 left-0 w-full"></div>
              <Image
                width={300}
                height={200}
                alt="Location"
                src="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/Screenshot%202024-09-18%20at%205.35.50%E2%80%AFPM.png?alt=media&token=fa1d7420-d9e9-4189-9597-015c43fc5159"
                className="w-full h-[100px] object-cover z-10 rounded-md"
              />
              <h1 className="text-white text-2xl font-bold absolute left-2 bottom-0 z-30">Location</h1>
            </div>

            <div
              className="relative w-full"
              onClick={() => {
                router.push('/gallery');
                setOpen(false);
              }}
            >
              <div className="bg-black/30 inset-0 absolute z-20 top-0 left-0 w-full"></div>
              <Image
                width={300}
                height={200}
                alt="Gallery"
                src="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/View%20recent%20photos.jpg?alt=media&token=ad5e25d9-63f9-43fb-8539-4c2a92004bd0"
                className="w-full h-[100px] object-cover z-10 rounded-md"
              />
              <h1 className="text-white text-2xl font-bold absolute left-2 bottom-0 z-30">Gallery</h1>
            </div>
          </FlexColumn>
        </DrawerBody>

        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MenuDrawer;
