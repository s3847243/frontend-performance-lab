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