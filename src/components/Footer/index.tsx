"use client"
import { getDeviceToken } from "@/redux/authSlice"
import type { AppDispatch } from "@/redux/store"
import Image from "next/image"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function Footer() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getDeviceToken())
  }, [dispatch])

  return (
    <footer className="border-t-4 text-[#E3E3E3] border-[#000000] bg-[#000000]">
      <div className="container w-full mx-auto">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col mt-8 xl:mt-14">
          <div className="flex justify-between mb-8 2xl:mb-[20px]">
            {/* Company Logo */}
            <div>
              <Image
                src={"/new-assets/logos/Kaabil logo white.png"}
                width={194}
                height={88}
                alt="company logo"
                className="mb-8 xl:mb-12 w-[100px] 2xl:w-[194px]"
              />
              <strong className="font-semibold uppercase text-sm mb-4 block">Connect with us</strong>
              <div className="flex gap-2">
                <a href="/" target="_blank" rel="noreferrer">
                  <Image width={24} height={24} alt="" src="/new-assets/icons/fb.svg" />
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <Image width={24} height={24} alt="" src="/new-assets/icons/x.svg" />
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <Image width={24} height={24} alt="" src="/new-assets/icons/linkedIn.svg" />
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <Image width={24} height={24} alt="" src="/new-assets/icons/insta.svg" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <strong className="uppercase font-semibold text-sm mb-4 block">COMPANY</strong>
              <ul className="space-y-2">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Resume Builder</li>
                <li className="cursor-pointer">Career Advisor</li>
                <li className="cursor-pointer">Mock Interviews</li>
                <li className="cursor-pointer">Skill Center</li>
                <li className="cursor-pointer">Blogs</li>
              </ul>
            </div>
            <div>
              <strong className="uppercase font-semibold text-sm mb-4 block">LEGAL</strong>
              <ul className="space-y-2">
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Terms of Use</li>
                <li className="cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
            <div>
              <strong className="uppercase font-semibold text-sm mb-4 block">RESOURCES</strong>
              <ul className="space-y-2">
                <li className="cursor-pointer">Help Center</li>
                <li className="cursor-pointer">FAQs</li>
              </ul>
            </div>
            <div>
              <strong className="uppercase font-semibold text-sm mb-4 block">CONTACT US</strong>
              <p className="w-[190px]">
                K. C. Mahindra Education Trust Cecil Court, Near Regal Cinema, Mahakavi Bhushan Marg, Mumbai 400001.
              </p>
            </div>

            {/* Mahindra Logo */}
            <div>
              <Image
                src={"/new-assets/logos/mahindra logo white.png"}
                width={182}
                height={83}
                alt="company logo"
                className="mb-8 xl:mb-12 w-[122px] 2xl:w-[182px]"
              />
            </div>
          </div>
        </div>

        {/* Mobile View - Updated to match the provided design */}
        <div className="flex md:hidden flex-col p-5 bg-[#000000]">
          {/* Logos Header */}
          <div className="flex justify-between items-center mb-8">
            <Image src={"/new-assets/logos/Kaabil logo white.png"} width={120} height={55} alt="company logo" />
            <div className="text-right">
              <div className="text-sm mb-1">Empowered by</div>
              <Image src={"/new-assets/logos/mahindra logo white.png"} width={100} height={45} alt="Mahindra logo" />
            </div>
          </div>

          {/* Two Column Navigation Links */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-5">COMPANY</h3>
              <ul className="space-y-5">
                <li className="cursor-pointer text-lg">Home</li>
                <li className="cursor-pointer text-lg">About Us</li>
                <li className="cursor-pointer text-lg">Resume Builder</li>
                <li className="cursor-pointer text-lg">Career advisor</li>
                <li className="cursor-pointer text-lg">Mock Interviews</li>
                <li className="cursor-pointer text-lg">Skill Centre</li>
                <li className="cursor-pointer text-lg">Blogs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-5">LEGAL</h3>
              <ul className="space-y-5">
                <li className="cursor-pointer text-lg">Privacy Policy</li>
                <li className="cursor-pointer text-lg">Terms of Use</li>
                <li className="cursor-pointer text-lg">Cookie Policy</li>
              </ul>

              <h3 className="text-xl font-bold mt-10 mb-5">RESROUCES</h3>
              <ul className="space-y-5">
                <li className="cursor-pointer text-lg">Help centre</li>
                <li className="cursor-pointer text-lg">FAQs</li>
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-5">CONTACT US</h3>
            <p className="text-lg">
              K. C. Mahindra Education Trust Cecil Court, Near Regal Cinema, Mahakavi Bhushan Marg, Mumbai 400001.
            </p>
          </div>

          {/* Divider Line */}
          <div className="h-px bg-white/30 w-full my-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <p>© Copyright 2024 App. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

