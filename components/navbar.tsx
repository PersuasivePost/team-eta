"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shell Eco Marathon", href: "/shell-eco-marathon" },
  { label: "Our Garage", href: "/our-garage" },
  { label: "Blog", href: "/blog" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Fuel Our Mission", href: "/fuel-our-mission" },
  { label: "Pit Crew", href: "/pit-crew" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

interface UserInfo {
  id: string;
  email: string;
  name: string;
  picture?: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fetch current user
    const fetchUser = async () => {
      try {
        const res = await fetch("/auth/me");
        const data = await res.json();
        if (data?.user) {
          setUser(data.user);
        }
      } catch (e) {
        // Not logged in
      } finally {
        setUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const isActive = (href: string) => {
    if (!mounted || !pathname) return false;
    return pathname === href;
  };

  const handleLogout = async () => {
    try {
      await fetch("/auth/logout", { method: "POST" });
      setUser(null);
      window.location.href = "/";
    } catch (e) {
      // Fallback: clear cookie manually
      document.cookie = "session=; Max-Age=0; path=/";
      setUser(null);
      window.location.href = "/";
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            TEAM ETA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* User Info / Auth */}
            {!userLoading &&
              (user ? (
                <>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      false
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Logout
                  </Link>
                  <span
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      false
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Welcome {user.name?.split(" ")[0] || "User"}
                  </span>
                </>
              ) : (
                <Link
                  href="/auth"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    false
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Login
                </Link>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile User Info / Auth */}
            {!userLoading && (
              <>
                {user ? (
                  <>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                      className={`block px-3 py-2 text-sm font-medium transition-colors ${
                        false
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      Logout
                    </Link>
                    <span
                      className={`block px-3 py-2 text-sm font-medium transition-colors ${
                        false
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      Welcome {user.name?.split(" ")[0] || "User"}
                    </span>
                  </>
                ) : (
                  <Link
                    href="/auth"
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      false
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
