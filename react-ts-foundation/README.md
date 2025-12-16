## React + TypeScript Foundation

A minimal React app built from scratch using Vite and strict TypeScript
to understand modern frontend tooling and type safety.

### Key Concepts
- Strict TypeScript configuration
- Typed React components and hooks
- Custom hook abstraction
- Vite dev vs build behavior

### What I Learned
- How TypeScript is compiled before bundling
- How Vite uses ES modules in dev and Rollup in production
- How strong typing reduces runtime bugs

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
