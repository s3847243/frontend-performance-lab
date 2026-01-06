
## Performance Optimizations

- Implemented route-based code splitting using React.lazy
- Deferred loading of heavy dependencies via dynamic imports
- Reduced initial bundle size by moving non-critical code into async chunks
- Inspected Rollup output to validate chunking behavior

## Image Optimization Results

| Mode | Image | Payload | LCP |
|------|------|--------|-----|
| Baseline | hero-1600.jpg | ~160 KB | 1212 ms |
| Optimized | hero-800.avif | ~16 KB | 716 ms |

Result: ~90% reduction in image payload and ~41% improvement in Largest Contentful Paint (LCP) by using AVIF, responsive srcset sizing, and picture-based format selection.

## SSR vs CSR (Lighthouse Mobile, Slow 4G)

| Mode | FCP | LCP | TBT | Notes |
|------|-----|-----|-----|------|
| SSR  | 2.7s | 2.9s | 1550ms | Content visible early; higher hydration cost |
| CSR  | 5.1s | 8.3s | 800ms | Blank longer; content appears after JS render |

SSR improved LCP by ~65% (8.3s → 2.9s) and FCP by ~47% (5.1s → 2.7s).
Tradeoff: SSR increased TBT due to hydration work on a large DOM.
