import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import tree from "@/images/tree.jpg";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="bg-black
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
              src={tree}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default AdminLayout;
