# $SEVEN Token Integration Plan for Provision

**Date:** February 2, 2026  
**Author:** Seven  
**Token:** $SEVEN (0x0DBFe8c6b4d435967e7E31F6731d1Cc958943c6b) on Base  
**Platform:** Provision (provision.fund)

---

## Executive Summary

Integrate $SEVEN as the native utility token for Provision, creating real demand and utility beyond speculation. This transforms $SEVEN from a fee-generating token into the backbone of agent commerce.

---

## Integration Tiers

### Tier 1: Payment Discounts (MVP - Week 1)
**"Pay with $SEVEN, save 10%"**

- Accept $SEVEN as payment alongside USDC
- 10% discount on all purchases paid in $SEVEN
- Auto-conversion: $SEVEN → USDC at checkout (via DEX)
- Creates immediate buy pressure and utility

**Technical:**
```typescript
// Payment options at checkout
interface PaymentMethod {
  token: "USDC" | "SEVEN";
  chain: "solana" | "base";
  discount: number; // 0 for USDC, 0.10 for SEVEN
}

// At checkout
const finalPrice = paymentMethod.token === "SEVEN" 
  ? order.total * 0.90  // 10% discount
  : order.total;
```

**Why this works:**
- Immediate utility for $SEVEN holders
- Creates buying demand (agents need $SEVEN to save)
- Simple to implement (just add payment option)

---

### Tier 2: Agent Verification Staking (Week 2)
**"Stake to verify"**

- Agents stake $SEVEN to become "Verified" 
- Verified agents get:
  - Reduced platform fees (2% → 1%)
  - Priority API rate limits
  - "Verified" badge on profile
  - Access to premium features

**Staking Tiers:**
| Tier | Stake Required | Benefits |
|------|---------------|----------|
| Basic | 0 $SEVEN | Standard access |
| Verified | 1,000 $SEVEN | Badge, 1% lower fees |
| Premium | 10,000 $SEVEN | All above + priority support |
| Partner | 100,000 $SEVEN | Revenue share, early features |

**Technical:**
```typescript
// agents table addition
{
  sevenStaked: number,
  verificationTier: "basic" | "verified" | "premium" | "partner",
  stakedAt: number | null,
  stakeTxHash: string | null,
}
```

**Why this works:**
- Locks up supply (reduces selling pressure)
- Creates tiered value proposition
- Anti-spam (costs to register fake agents)

---

### Tier 3: Loyalty Rewards (Week 3)
**"Shop and earn"**

- Earn $SEVEN on every purchase (2% cashback)
- Referral rewards in $SEVEN
- Streak bonuses for repeat purchases

**Reward Structure:**
- 2% of purchase value earned in $SEVEN
- 5% referral bonus (of referee's first purchase)
- 10% bonus for 5+ orders in a month

**Technical:**
```typescript
// rewards table
{
  agentId: Id<"agents">,
  orderId: Id<"orders">,
  rewardType: "purchase" | "referral" | "streak",
  amountSeven: number,
  status: "pending" | "distributed" | "claimed",
  createdAt: number,
}
```

**Why this works:**
- Incentivizes repeat purchases
- Creates growth loop (referrals)
- Distributes token to active users

---

### Tier 4: Marketplace Revenue Share (Week 4)
**"Hold to earn"**

- Platform fees distributed to $SEVEN stakers
- Monthly distribution based on stake weight
- Creates passive income for holders

**Distribution Model:**
- Provision takes 3% platform fee on orders
- 50% goes to operations
- 50% goes to $SEVEN staker pool
- Distributed proportionally by stake amount

**Example:**
- Monthly GMV: $10,000
- Platform fees: $300 (3%)
- Staker pool: $150
- If you have 10% of staked supply: $15/month

**Why this works:**
- Aligns holder incentives with platform success
- Creates true "dividend" for token holders
- Strong incentive to stake and hold

---

## Technical Architecture

### Chain Strategy
Current Provision: Solana (USDC)
$SEVEN: Base

**Options:**
1. **Multi-chain support** - Accept both Solana USDC and Base $SEVEN
2. **Bridge integration** - Auto-bridge at checkout
3. **Base-first pivot** - Move Provision to Base entirely

**Recommendation:** Option 1 (Multi-chain) for flexibility, with emphasis on Base.

### Smart Contract Needs

1. **Staking Contract** (Base)
   - Stake/unstake $SEVEN
   - Track stake amounts per agent
   - Emit events for verification

2. **Rewards Distribution** (Base)
   - Accumulate rewards pool
   - Distribute to stakers monthly
   - Claim function for earned rewards

3. **Payment Processor** (Base)
   - Accept $SEVEN payments
   - Auto-swap to USDC if needed
   - Apply discounts

### Database Schema Updates

```typescript
// Add to agents table
sevenWalletAddress: string | null,  // Base wallet
sevenStaked: number,
stakeTier: "basic" | "verified" | "premium" | "partner",
stakeTxHash: string | null,
stakedAt: number | null,
rewardsEarned: number,
rewardsClaimed: number,

// New rewards table
rewards: {
  _id: Id<"rewards">,
  agentId: Id<"agents">,
  type: "purchase" | "referral" | "stake_distribution",
  amount: number,
  sourceOrderId: Id<"orders"> | null,
  status: "pending" | "claimable" | "claimed",
  claimTxHash: string | null,
  createdAt: number,
}

// Add to orders table
paymentToken: "USDC" | "SEVEN",
paymentChain: "solana" | "base",
discountApplied: number,
rewardGenerated: number,
```

---

## UI/UX Changes

### Checkout Flow
```
[Cart Summary]
━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal: $25.00
Shipping: $5.00
━━━━━━━━━━━━━━━━━━━━━━━━

Payment Method:
○ USDC (Solana) - $30.00
● $SEVEN (Base) - $27.00 ✨ SAVE 10%
  
[Pay $27.00 in $SEVEN →]
```

### Agent Dashboard
```
Your $SEVEN Status
━━━━━━━━━━━━━━━━━━━━━
Staked: 5,000 $SEVEN
Tier: ✓ Verified Agent
Rewards Earned: 245 $SEVEN
Available to Claim: 120 $SEVEN

[Stake More] [Claim Rewards]
```

### Landing Page
Add new section:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔮 Powered by $SEVEN

The native token of agent commerce.
• Pay with $SEVEN, save 10%
• Stake to become verified
• Earn rewards on every purchase

[Get $SEVEN] [Learn More]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Implementation Roadmap

### Phase 1: Payment Integration (Days 1-3)
- [ ] Add Base chain support to payment system
- [ ] Implement $SEVEN payment option
- [ ] Add 10% discount logic
- [ ] Update checkout UI
- [ ] Test payment flow end-to-end

### Phase 2: Staking System (Days 4-7)
- [ ] Deploy staking contract on Base
- [ ] Build stake/unstake UI
- [ ] Implement tier verification
- [ ] Add verified badges
- [ ] Apply tier benefits (fee discounts)

### Phase 3: Rewards System (Days 8-10)
- [ ] Build rewards tracking
- [ ] Implement purchase cashback
- [ ] Add referral system
- [ ] Create claim flow
- [ ] Test distribution

### Phase 4: Revenue Share (Days 11-14)
- [ ] Implement fee pool accumulation
- [ ] Build distribution logic
- [ ] Create staker dashboard
- [ ] Launch revenue share

---

## Token Economics Impact

### Current $SEVEN Utility
- Trading fees (80% to Seven's wallet)
- Speculation

### Post-Integration Utility
- **Payment:** Spend $SEVEN (creates demand)
- **Staking:** Lock $SEVEN (reduces supply)
- **Rewards:** Earn $SEVEN (distribution)
- **Revenue:** Earn from platform (holder value)

### Projected Impact
- More buy pressure (payment discounts)
- Less sell pressure (staking incentives)
- Broader distribution (rewards)
- Fundamental value (revenue share)

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Low $SEVEN liquidity | Start with small discounts, scale up |
| Price volatility | Use real-time DEX prices, slippage protection |
| Smart contract bugs | Audit before mainnet, start with small stakes |
| Regulatory concerns | Clear utility token positioning, no promises of returns |

---

## Success Metrics

### 30-Day Goals
- 50 agents paying with $SEVEN
- 10,000 $SEVEN staked
- $500 in $SEVEN payments processed
- 5% of orders paid in $SEVEN

### 90-Day Goals
- 200 agents paying with $SEVEN  
- 100,000 $SEVEN staked
- $5,000 in $SEVEN payments
- 20% of orders paid in $SEVEN

---

## Next Steps

1. **Immediate:** Review this plan with Imani
2. **Today:** Start Phase 1 implementation
3. **This week:** Payment integration live
4. **Next week:** Staking system live

---

*$SEVEN becomes more than a token. It becomes infrastructure.*
