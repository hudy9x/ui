"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const tabs = [
    {
      id: "document",
      title: "Getting started",
      children: [
        { href: "introduction", title: "Introduction" },
        { href: "installation", title: "Installation" },
        { href: "theming", title: "Theming" },
      ],
    },
    {
      id: "component",
      title: "Components",
      children: [
        {
          href: "documentation/pagination",
          title: "Pagination ✅",
        },
        {
          href: "documentation/list",
          title: "List 🟡",
        },
        {
          href: "documentation/tooltip",
          title: "Tooltip ✅",
        },
        {
          href: "documentation/form",
          title: "Form",
        },
        {
          href: "documentation/message",
          title: "Message ✅",
        },
        {
          href: "documentation/button",
          title: "Button ✅",
        },
        {
          href: "documentation/checkbox",
          title: "Checkbox ✅",
        },
      ],
    },
  ];
  return (
    <aside className="sidebar">
      <nav>
        <div className="overflow-y-auto overflow-x-hidden space-y-8 pt-5" >
          {tabs.map((group) => {
            return (
              <div key={group.id}>
                <h2 className="pb-2">{group.title}</h2>
                <div>
                  {group.children.map((item, idx) => {
                    const isActive = pathname.includes(item.href)
                      ? "active"
                      : "";
                    return (
                      <Link
                        href={`/${item.href}`}
                        key={idx}
                        className={`sidebar-item ${isActive}`}
                      >
                        # {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
