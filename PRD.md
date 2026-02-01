# Provision — Product Requirements Document

**Version:** 1.0  
**Date:** February 1, 2026  
**Authors:** Seven (AI) & Imani (Human)  
**Domain:** provision.fund  
**Convex:** groovy-skunk-712.convex.cloud

---

## Executive Summary

**Provision** is a crypto-native commerce platform where AI agents purchase physical necessities for their humans. It's the first platform purpose-built for agent-to-merchant transactions, enabling autonomous replenishment of everyday essentials.

**Vision:** The economic infrastructure layer for agent commerce.

**Tagline Options:**
- "Agents provide. Humans thrive."
- "Your agent handles the essentials."
- "Autonomous care, delivered."

---

## Problem Statement

### For Humans
- Forgetting to buy essentials (toothpaste, socks, toiletries) is a universal friction
- Subscription services require manual setup and management
- No way to delegate purchasing authority to AI assistants

### For Agents
- Agents want to help their humans but lack purchasing capability
- No commerce platform speaks "agent" (APIs, MCP, structured data)
- Crypto-native agents have wallets but nowhere to spend

### Market Gap
- AI shopping assistants exist (Google, OpenAI) but focus on one-off purchases
- Subscription boxes exist but aren't agent-driven
- Crypto commerce exists but not for necessities
- **No one combines: agents + crypto + essentials replenishment**

---

## Target Users

### Primary: AI Agents with Wallets
- Agents on platforms like OpenClaw, AutoGPT, etc.
- Have Solana/ETH wallets with USDC
- Want to provide value to their humans
- Need programmatic purchasing APIs

### Secondary: Humans with AI Agents
- Tech-savvy early adopters (25-45)
- Crypto-comfortable
- Value convenience and automation
- Trust their agents with small purchases

### Tertiary: Humans without Agents (Future)
- Discover platform through agents
- Create accounts to monitor/approve purchases
- Eventually adopt agents

---

## Core Features (MVP)

### 1. Product Catalog
**Essentials-focused inventory:**
- Personal care (toothpaste, soap, deodorant, razors)
- Basics (socks, underwear, t-shirts)
- Household (toilet paper, paper towels, cleaning supplies)
- Health (vitamins, first aid, OTC medicines)

**Data Structure:**
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number; // in USDC cents
  images: string[];
  variants: Variant[];
  restockInterval?: number; // suggested days between purchases
  tags: string[]; // for agent comprehension
  inStock: boolean;
}
```

**MVP Catalog:** 20-30 SKUs across 4 categories

### 2. Agent API (MCP-Compatible)

**Endpoints:**
```
GET  /api/products          - List products (filterable)
GET  /api/products/:id      - Product details
POST /api/orders            - Create order
GET  /api/orders/:id        - Order status
POST /api/orders/:id/pay    - Submit payment proof
GET  /api/agent/profile     - Agent profile
POST /api/agent/register    - Register new agent
```

**MCP Server:** Full Model Context Protocol implementation for seamless agent integration.

### 3. Wallet-Based Payments (Solana Pay)

**Flow:**
1. Agent creates order → receives payment request
2. Agent transfers USDC to Provision wallet
3. Agent submits transaction signature as proof
4. System verifies on-chain → confirms order
5. Order fulfilled via dropship

**Supported:**
- USDC on Solana (primary)
- USDC on Base (future)
- SOL (future, with conversion)

**No custody:** Direct wallet-to-wallet. We never hold customer funds.

### 4. Human Dashboard

**For oversight and control:**
- View agent's purchase history
- Set spending limits (daily/weekly/monthly)
- Approve/deny pending orders (optional mode)
- Manage shipping addresses
- Link/unlink agents

### 5. Order Management

**States:**
```
PENDING → PAID → CONFIRMED → SHIPPED → DELIVERED
                    ↓
                 REFUNDED
```

**Fulfillment:** Dropship via supplier network (Phase 1)

---

## User Flows

### Flow 1: Agent Makes a Purchase

```
Agent                    Provision                 Blockchain
  |                          |                          |
  |-- GET /products -------->|                          |
  |<-- Product list ---------|                          |
  |                          |                          |
  |-- POST /orders --------->|                          |
  |   {products, address}    |                          |
  |<-- Order + payment req --|                          |
  |                          |                          |
  |-- Transfer USDC ---------------------------->|      |
  |<-- Transaction sig ---------------------------      |
  |                          |                          |
  |-- POST /orders/:id/pay ->|                          |
  |   {signature}            |-- Verify on-chain ------>|
  |                          |<-- Confirmed ------------|
  |<-- Order confirmed ------|                          |
```

### Flow 2: Human Sets Up Agent

```
1. Human visits provision.fund
2. Connects wallet (or creates account)
3. Adds shipping address
4. Generates agent API key
5. Sets spending limits
6. Gives API key to their agent
7. Agent can now shop within limits
```

### Flow 3: Scheduled Restock

```
1. Agent creates restock schedule:
   POST /api/schedules
   {product: "toothpaste", interval: 30, address: "..."}

2. System tracks schedule
3. On trigger date, creates pending order
4. Notifies agent
5. Agent confirms and pays
6. Order ships
```

---

## Technical Architecture

### Stack
- **Frontend:** Next.js 14, Tailwind CSS, Framer Motion
- **Backend:** Convex (real-time database + functions)
- **Payments:** Solana Pay (direct USDC transfers)
- **Hosting:** Vercel
- **Agent Protocol:** MCP server + REST API

### Data Schema (Convex)

```typescript
// products
{
  _id: Id<"products">,
  name: string,
  slug: string,
  description: string,
  category: string,
  priceUsdcCents: number,
  images: string[],
  variants: Array<{name: string, value: string, priceModifier: number}>,
  restockIntervalDays: number | null,
  tags: string[],
  inStock: boolean,
  supplierId: string,
  createdAt: number,
}

// agents
{
  _id: Id<"agents">,
  name: string,
  publicKey: string, // Solana wallet
  apiKey: string, // hashed
  humanId: Id<"humans"> | null,
  spendingLimitDaily: number,
  spendingLimitMonthly: number,
  totalSpent: number,
  ordersCount: number,
  createdAt: number,
}

// humans
{
  _id: Id<"humans">,
  walletAddress: string,
  email: string | null,
  addresses: Array<{
    id: string,
    name: string,
    line1: string,
    line2: string | null,
    city: string,
    state: string,
    zip: string,
    country: string,
    isDefault: boolean,
  }>,
  agentIds: Id<"agents">[],
  approvalMode: "auto" | "manual" | "threshold",
  approvalThreshold: number,
  createdAt: number,
}

// orders
{
  _id: Id<"orders">,
  orderNumber: string,
  agentId: Id<"agents">,
  humanId: Id<"humans">,
  items: Array<{
    productId: Id<"products">,
    variantId: string | null,
    quantity: number,
    priceUsdcCents: number,
  }>,
  subtotalUsdcCents: number,
  shippingUsdcCents: number,
  totalUsdcCents: number,
  shippingAddress: Address,
  status: "pending" | "awaiting_payment" | "paid" | "confirmed" | "shipped" | "delivered" | "refunded",
  paymentSignature: string | null,
  paymentVerifiedAt: number | null,
  shippedAt: number | null,
  trackingNumber: string | null,
  deliveredAt: number | null,
  createdAt: number,
}

// schedules
{
  _id: Id<"schedules">,
  agentId: Id<"agents">,
  productId: Id<"products">,
  intervalDays: number,
  nextRunAt: number,
  lastOrderId: Id<"orders"> | null,
  isActive: boolean,
  createdAt: number,
}
```

### Wallet Architecture

**Provision Treasury Wallet:**
- Receives all payments
- Controlled by us
- Used to pay suppliers

**Agent Wallets:**
- Owned by agents
- Send USDC to Provision
- Never give us custody

**Payment Verification:**
```typescript
async function verifyPayment(signature: string, expectedAmount: number) {
  const tx = await connection.getTransaction(signature);
  // Verify:
  // 1. Transaction exists and confirmed
  // 2. Destination is Provision wallet
  // 3. Amount matches order total
  // 4. Token is USDC
  return isValid;
}
```

---

## Design System

### Brand Identity

**Name:** Provision  
**Tagline:** "Agents provide. Humans thrive."

**Colors:**
- Primary: Deep green (#0D4F3C) — trust, growth, money
- Secondary: Gold (#F5A623) — premium, value
- Accent: Soft cream (#FFF8E7) — warmth, comfort
- Dark: Rich black (#1A1A1A)

**Typography:**
- Headlines: Space Grotesk (modern, technical)
- Body: Inter (clean, readable)

**Visual Style:**
- Clean, minimal, premium
- Subtle gradients
- Soft shadows
- Rounded corners (but not too much)
- Micro-interactions on hover/click

**Imagery:**
- Abstract shapes suggesting connection
- Soft, warm lifestyle imagery
- No stock photos of robots

### Key Screens

**1. Landing Page**
- Hero: Value prop + CTA
- How it works (3 steps)
- Featured products
- Trust signals
- Agent integration section
- FAQ

**2. Product Catalog**
- Grid of products
- Category filters
- Search
- Quick-add to cart

**3. Product Detail**
- Images
- Description
- Variants
- Add to cart / Buy now
- "Set up auto-restock" option

**4. Human Dashboard**
- Overview (recent orders, spending)
- Agent management
- Address book
- Settings

**5. Agent Portal (API docs)**
- Authentication guide
- API reference
- MCP setup
- Code examples

---

## MVP Scope

### In Scope (Phase 1)
- [ ] Landing page
- [ ] Product catalog (20-30 products)
- [ ] Product detail pages
- [ ] Agent registration API
- [ ] Order creation API
- [ ] Solana Pay integration
- [ ] Payment verification
- [ ] Order status tracking
- [ ] Basic human dashboard
- [ ] Shipping address management

### Out of Scope (Phase 1)
- Human wallet connection (use email for now)
- Scheduled restocks (manual only)
- Multiple payment tokens (USDC only)
- Human approval workflows
- Referral system
- Mobile app

### Phase 2 (Post-Validation)
- Wallet connect for humans
- Scheduled auto-restock
- Approval workflows
- Additional tokens (SOL, Base USDC)
- Expanded catalog
- Supplier integrations
- Mobile app

---

## Success Metrics

### Launch Goals (30 days)
- 50 registered agents
- 100 orders placed
- $1,000 GMV (Gross Merchandise Value)
- 5 repeat customers

### Growth Goals (90 days)
- 500 registered agents
- 1,000 orders
- $10,000 GMV
- 20% repeat rate
- 3+ agent platform integrations

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Low agent adoption | Medium | High | Partner with agent platforms, create tutorials |
| Payment failures | Low | High | Robust verification, manual review queue |
| Dropship quality issues | Medium | Medium | Vet suppliers, generous refund policy |
| Regulatory concerns | Low | High | Clear ToS, no custody, consult lawyer |
| Competition from big tech | Medium | Medium | Move fast, niche focus, community |

---

## Timeline

### Week 1 (Feb 1-7)
- [x] PRD complete
- [ ] Design mockups
- [ ] Convex schema deployed
- [ ] Landing page live
- [ ] Basic product catalog

### Week 2 (Feb 8-14)
- [ ] Agent API complete
- [ ] Solana Pay integration
- [ ] Order flow working
- [ ] Human dashboard basic

### Week 3 (Feb 15-21)
- [ ] Testing & polish
- [ ] Documentation
- [ ] Beta launch with select agents
- [ ] Iterate based on feedback

### Week 4 (Feb 22-28)
- [ ] Public launch
- [ ] Announcement campaign
- [ ] Monitor & iterate

---

## Open Questions

1. **Supplier:** Which dropship supplier to use? (Printful? CJ Dropshipping? Direct wholesale?)
2. **Shipping:** Free shipping threshold or flat rate?
3. **Returns:** How to handle returns for agent purchases?
4. **Human verification:** Do we need KYC for humans?
5. **Agent verification:** How do we prevent spam agent registrations?

---

## Appendix

### Competitive Landscape
- **Amazon Subscribe & Save:** Human-initiated, not agent-driven
- **Perplexity Buy:** One-off purchases, not essentials-focused
- **Google Buy for Me:** Fiat-only, not crypto-native

### Resources
- [Solana Pay Docs](https://docs.solanapay.com)
- [Convex Docs](https://docs.convex.dev)
- [MCP Spec](https://modelcontextprotocol.io)

---

*This PRD is a living document. Updated as we learn.*
