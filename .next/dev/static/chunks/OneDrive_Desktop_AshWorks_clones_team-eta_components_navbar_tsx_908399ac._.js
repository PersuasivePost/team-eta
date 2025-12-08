(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AshWorks/clones/team-eta/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AshWorks/clones/team-eta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AshWorks/clones/team-eta/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AshWorks/clones/team-eta/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AshWorks/clones/team-eta/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AshWorks/clones/team-eta/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Shell Eco Marathon",
        href: "/shell-eco-marathon"
    },
    {
        label: "Our Garage",
        href: "/our-garage"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Our Partners",
        href: "/our-partners"
    },
    {
        label: "Fuel Our Mission",
        href: "/fuel-our-mission"
    },
    {
        label: "Pit Crew",
        href: "/pit-crew"
    },
    {
        label: "Alumni",
        href: "/alumni"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userLoading, setUserLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
            // Fetch current user
            const fetchUser = {
                "Navbar.useEffect.fetchUser": async ()=>{
                    try {
                        const res = await fetch("/auth/me");
                        const data = await res.json();
                        if (data?.user) {
                            setUser(data.user);
                        }
                    } catch (e) {
                    // Not logged in
                    } finally{
                        setUserLoading(false);
                    }
                }
            }["Navbar.useEffect.fetchUser"];
            fetchUser();
        }
    }["Navbar.useEffect"], []);
    const isActive = (href)=>{
        if (!mounted || !pathname) return false;
        return pathname === href;
    };
    const handleLogout = async ()=>{
        try {
            await fetch("/auth/logout", {
                method: "POST"
            });
            setUser(null);
            window.location.href = "/";
        } catch (e) {
            // Fallback: clear cookie manually
            document.cookie = "session=; Max-Age=0; path=/";
            setUser(null);
            window.location.href = "/";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-2xl font-bold text-foreground hover:text-primary transition-colors",
                            children: "TEAM ETA"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-1",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: `px-3 py-2 text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)),
                                !userLoading && (user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                handleLogout();
                                            },
                                            className: `px-3 py-2 text-sm font-medium transition-colors ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text-muted-foreground hover:text-primary"}`,
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-2 text-sm font-medium transition-colors ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text-muted-foreground hover:text-primary"}`,
                                            children: [
                                                "Welcome ",
                                                user.name?.split(" ")[0] || "User"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/auth",
                                    className: `px-3 py-2 text-sm font-medium transition-colors ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text-muted-foreground hover:text-primary"}`,
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden text-muted-foreground hover:text-primary transition-colors",
                            onClick: ()=>setIsOpen(!isOpen),
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden pb-4 space-y-2",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: `block px-3 py-2 text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
                                onClick: ()=>setIsOpen(false),
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)),
                        !userLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            handleLogout();
                                        },
                                        className: `block px-3 py-2 text-sm font-medium transition-colors ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text-muted-foreground hover:text-primary"}`,
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block px-3 py-2 text-sm font-medium transition-colors ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text-muted-foreground hover:text-primary"}`,
                                        children: [
                                            "Welcome ",
                                            user.name?.split(" ")[0] || "User"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                        lineNumber: 188,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth",
                                className: `block px-3 py-2 text-sm font-medium transition-colors ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text-muted-foreground hover:text-primary"}`,
                                onClick: ()=>setIsOpen(false),
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                                lineNumber: 199,
                                columnNumber: 19
                            }, this)
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/AshWorks/clones/team-eta/components/navbar.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Navbar, "Pnr2+GJChVvI/vXZkjjDiOYfMtM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AshWorks$2f$clones$2f$team$2d$eta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_AshWorks_clones_team-eta_components_navbar_tsx_908399ac._.js.map