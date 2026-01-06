## SSR vs CSR (Lighthouse Mobile, Slow 4G)

| Mode | FCP | LCP | TBT | Notes |
|------|-----|-----|-----|------|
| SSR  | 2.7s | 2.9s | 1550ms | Content visible early; higher hydration cost |
| CSR  | 5.1s | 8.3s | 800ms | Blank longer; content appears after JS render |

SSR improved LCP by ~65% (8.3s → 2.9s) and FCP by ~47% (5.1s → 2.7s).
Tradeoff: SSR increased TBT due to hydration work on a large DOM.
