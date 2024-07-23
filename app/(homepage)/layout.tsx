import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/images/image1.jpeg";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="bg-gray-700
    text-white 
    h-screen
    snap-end
    snap-mandatory
    overflow-y-scroll
    overflow-x-hidden
    lg:overflow-hidden
    z-0
    scrollbar
    scrollbar-track-gray-400/20
    scrollbar-thumb-[pink]/8"
    >
      <Header />
      <div className="">{children}</div>
      <Link href="./">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src={image1}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default AdminLayout;
