import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];

  return (
    <section>
      <div>
        <Logo title="STK" className="text-black" />
        <div>
          {navigation.map((item) => (
            <Link key={item?.title} href={item?.href}>
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
