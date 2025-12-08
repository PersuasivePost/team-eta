"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { ChevronRight, Heart, Zap, Users, Target } from "lucide-react";

interface BudgetItem {
  label: string;
  percentage: number;
  amount: string;
  description: string;
  color: string;
}

const budgetData: BudgetItem[] = [
  {
    label: "Research & Development",
    percentage: 35,
    amount: "$35,000",
    description: "Advanced aerodynamics and efficiency optimization",
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "Manufacturing & Materials",
    percentage: 30,
    amount: "$30,000",
    description: "Lightweight composites and precision components",
    color: "from-blue-500 to-purple-500",
  },
  {
    label: "Logistics & Transportation",
    percentage: 20,
    amount: "$20,000",
    description: "Competition travel and equipment transport",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Testing & Validation",
    percentage: 15,
    amount: "$15,000",
    description: "Track testing and performance validation",
    color: "from-pink-500 to-red-500",
  },
];

export default function FuelOurMission() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const totalBudget = 100000;

  const router = useRouter();
  const handleContribute = () => {
    // simple client-side auth flag used for frontend-only flow
    const isLoggedIn =
      typeof window !== "undefined" &&
      Boolean(window.localStorage.getItem("zoogle:user"));
    if (!isLoggedIn) {
      // redirect to auth page; include return path
      router?.push("/auth?next=/fuel-our-mission");
      return;
    }

    // Placeholder for Razorpay popup integration which will be added later
    // For now, show a simple confirmation
    window.alert("User is logged in — open Razorpay popup (placeholder)");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-teal-600">FUEL OUR MISSION</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              Help Us Cross the Finish Line
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-teal-600" size={32} />
                So Good, So Far!
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Team Eta, a dedicated group of students from KJSCE, Mumbai, is
                embarking on an ambitious endeavor to design and construct a
                high-efficiency vehicle for the prestigious Shell Eco-Marathon
                competition. With a proven track record in sustainable
                automotive development, including notable achievements such as
                Mahil in 2019 and Arya in 2015, the team is poised to excel once
                again.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Recognizing the importance of securing funding for their
                project, Team Eta has outlined specific areas where support is
                needed, ranging from logistics to research and development. To
                achieve our goals, we propose launching a crowdfunding campaign
                to engage with our community and wider audience, aiming not only
                to raise necessary funds but also to raise awareness about our
                project's significance. With a clear plan and unwavering
                determination, Team Eta is optimistic about the potential of
                crowdfunding to propel our project forward and make a meaningful
                impact in the Shell Eco-Marathon 2024.
              </p>
            </div>
          </div>

          {/* Interactive Budget Breakdown */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
              <Target className="text-teal-600" size={32} />
              Thinking, Where Your Money Goes?
            </h2>

            {/* Visual Breakdown */}
            <div className="mb-12">
              <div className="flex h-20 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                {budgetData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative group transition-all duration-300 cursor-pointer ${
                      hoveredIndex === null || hoveredIndex === index
                        ? "opacity-100"
                        : "opacity-60"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`w-full h-full bg-linear-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />
                    {item.percentage >= 15 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {item.percentage}%
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {budgetData.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    hoveredIndex === index
                      ? "bg-white border-teal-600 shadow-lg shadow-teal-600/20"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.label}
                    </h3>
                    <span
                      className={`text-2xl font-bold bg-linear-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.amount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center shadow-md">
              <Heart className="text-red-500 mx-auto mb-3" size={28} />
              <p className="text-4xl font-bold text-teal-600 mb-2">1000+</p>
              <p className="text-gray-600">Supporters</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center shadow-md">
              <Users className="text-blue-500 mx-auto mb-3" size={28} />
              <p className="text-4xl font-bold text-teal-600 mb-2">50+</p>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center shadow-md">
              <Zap className="text-yellow-500 mx-auto mb-3" size={28} />
              <p className="text-4xl font-bold text-teal-600 mb-2">6</p>
              <p className="text-gray-600">Prototypes Built</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Ready to Make Impact?
              </h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Every contribution brings us closer to victory at the Shell
                Eco-Marathon. Join our mission to build the future of
                sustainable mobility.
              </p>
              <button
                onClick={handleContribute}
                className="inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/50 group"
              >
                CONTRIBUTE NOW
                <ChevronRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
