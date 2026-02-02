"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Id } from "../../convex/_generated/dataModel";

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [humanId, setHumanId] = useState<Id<"humans"> | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  
  // Address form
  const [addressForm, setAddressForm] = useState({
    label: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "USA",
  });

  const registerHuman = useMutation(api.humans.register);
  const addAddress = useMutation(api.humans.addAddress);
  
  // Only query if we have a humanId
  const human = useQuery(api.humans.get, humanId ? { id: humanId } : "skip");
  const linkedAgents = useQuery(api.humans.getLinkedAgents, humanId ? { humanId } : "skip");
  const orders = useQuery(api.humans.getOrders, humanId ? { humanId } : "skip");
  const stats = useQuery(api.humans.getDashboardStats, humanId ? { humanId } : "skip");

  // Check localStorage for saved humanId
  useEffect(() => {
    const saved = localStorage.getItem("provision_humanId");
    if (saved) {
      setHumanId(saved as Id<"humans">);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    
    try {
      const result = await registerHuman({ email });
      setHumanId(result.humanId);
      localStorage.setItem("provision_humanId", result.humanId);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!humanId) return;
    
    try {
      await addAddress({
        humanId,
        address: {
          ...addressForm,
          line2: addressForm.line2 || undefined,
          isDefault: human?.addresses.length === 0,
        },
      });
      setShowAddAddress(false);
      setAddressForm({
        label: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        zip: "",
        country: "USA",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("provision_humanId");
    setHumanId(null);
  };

  const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-700";
      case "shipped": return "bg-blue-100 text-blue-700";
      case "confirmed": case "paid": return "bg-yellow-100 text-yellow-700";
      case "cancelled": case "refunded": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Login Screen
  if (!humanId) {
    return (
      <main className="min-h-screen bg-[#FFF8E7]">
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">P</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
            </Link>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#0D4F3C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👤</span>
              </div>
              <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Human Dashboard</h1>
              <p className="text-[#6B7280]">Manage your agents, addresses, and orders</p>
            </div>

            <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0D4F3C] focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isRegistering}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                  isRegistering
                    ? "bg-gray-300 text-gray-500"
                    : "bg-[#0D4F3C] text-white hover:bg-[#1A6B52]"
                }`}
              >
                {isRegistering ? "Loading..." : "Continue"}
              </button>

              <p className="text-xs text-center text-[#6B7280] mt-4">
                New here? We&apos;ll create an account for you automatically.
              </p>
            </form>
          </div>
        </div>
      </main>
    );
  }

  // Dashboard
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">P</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link href="/products" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border border-[#0D4F3C] text-[#0D4F3C] hover:bg-[#0D4F3C] hover:text-white transition-all font-medium">
              Products
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-red-600 hover:bg-red-50 transition-all font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Dashboard</h1>
            <p className="text-[#6B7280]">Welcome back{human?.name ? `, ${human.name}` : ""}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-[#6B7280] mb-1">Total Orders</p>
              <p className="text-2xl font-bold text-[#1A1A1A]">{stats?.totalOrders ?? 0}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-[#6B7280] mb-1">Pending</p>
              <p className="text-2xl font-bold text-[#F5A623]">{stats?.pendingOrders ?? 0}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-[#6B7280] mb-1">Total Spent</p>
              <p className="text-2xl font-bold text-[#0D4F3C]">{formatPrice(stats?.totalSpentUsdcCents ?? 0)}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-[#6B7280] mb-1">Linked Agents</p>
              <p className="text-2xl font-bold text-[#1A1A1A]">{stats?.linkedAgents ?? 0}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Addresses */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#1A1A1A]">Shipping Addresses</h2>
                <button
                  onClick={() => setShowAddAddress(true)}
                  className="text-sm text-[#0D4F3C] font-medium hover:underline"
                >
                  + Add New
                </button>
              </div>

              {showAddAddress && (
                <form onSubmit={handleAddAddress} className="mb-4 p-4 bg-gray-50 rounded-xl">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Label (e.g., Home)"
                      value={addressForm.label}
                      onChange={(e) => setAddressForm({ ...addressForm, label: e.target.value })}
                      className="px-3 py-2 border rounded-lg text-sm"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      value={addressForm.country}
                      onChange={(e) => setAddressForm({ ...addressForm, country: e.target.value })}
                      className="px-3 py-2 border rounded-lg text-sm"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    value={addressForm.line1}
                    onChange={(e) => setAddressForm({ ...addressForm, line1: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2 (optional)"
                    value={addressForm.line2}
                    onChange={(e) => setAddressForm({ ...addressForm, line2: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                  />
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="City"
                      value={addressForm.city}
                      onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                      className="px-3 py-2 border rounded-lg text-sm"
                      required
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={addressForm.state}
                      onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                      className="px-3 py-2 border rounded-lg text-sm"
                      required
                    />
                    <input
                      type="text"
                      placeholder="ZIP"
                      value={addressForm.zip}
                      onChange={(e) => setAddressForm({ ...addressForm, zip: e.target.value })}
                      className="px-3 py-2 border rounded-lg text-sm"
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#0D4F3C] text-white rounded-lg text-sm font-medium"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddAddress(false)}
                      className="px-4 py-2 text-gray-600 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {human?.addresses.length === 0 ? (
                <p className="text-[#6B7280] text-sm">No addresses yet. Add one to receive orders.</p>
              ) : (
                <div className="space-y-3">
                  {human?.addresses.map((addr) => (
                    <div key={addr.id} className="p-3 border rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-[#1A1A1A]">{addr.label}</span>
                        {addr.isDefault && (
                          <span className="text-xs bg-[#0D4F3C]/10 text-[#0D4F3C] px-2 py-0.5 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#6B7280]">
                        {addr.line1}{addr.line2 ? `, ${addr.line2}` : ""}<br />
                        {addr.city}, {addr.state} {addr.zip}<br />
                        {addr.country}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Linked Agents */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Linked Agents</h2>
              
              {linkedAgents?.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-[#6B7280] mb-4">No agents linked yet.</p>
                  <Link
                    href="/agents"
                    className="text-[#0D4F3C] font-medium hover:underline"
                  >
                    Register an agent →
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {linkedAgents?.map((agent) => (
                    <div key={agent._id} className="p-3 border rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-[#1A1A1A]">{agent.name}</span>
                          <p className="text-xs text-[#6B7280] font-mono truncate max-w-[200px]">
                            {agent.publicKey}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-[#0D4F3C]">
                            {formatPrice(agent.totalSpentUsdcCents)} spent
                          </p>
                          <p className="text-xs text-[#6B7280]">
                            {agent.ordersCount} orders
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Recent Orders</h2>
            
            {orders?.length === 0 ? (
              <p className="text-[#6B7280]">No orders yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-[#6B7280] border-b">
                      <th className="pb-3 font-medium">Order</th>
                      <th className="pb-3 font-medium">Items</th>
                      <th className="pb-3 font-medium">Total</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.slice(0, 10).map((order) => (
                      <tr key={order._id} className="border-b last:border-0">
                        <td className="py-3">
                          <span className="font-mono text-sm">{order.orderNumber}</span>
                        </td>
                        <td className="py-3">
                          <span className="text-sm">{order.items.length} items</span>
                        </td>
                        <td className="py-3">
                          <span className="font-medium">{formatPrice(order.totalUsdcCents)}</span>
                        </td>
                        <td className="py-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-[#6B7280]">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-[#0D4F3C] flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold">Provision</span>
          </div>
          <p className="text-white/40 text-sm">
            © 2026 Provision. Agents provide. Humans thrive.
          </p>
        </div>
      </footer>
    </main>
  );
}
