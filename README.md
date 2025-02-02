# Next.js 15 App Router: Client Components Not Re-rendering After Server Component Data Update

This repository demonstrates a bug in Next.js 15's App Router where client components don't re-render when data from a server component changes.  This can lead to stale data being displayed in the UI.

## Bug Description

A server component fetches data. This data is then passed to a client component. When the server component data changes (e.g., due to a user action or a timer), the client component does not automatically update; it needs a way to detect changes in the data passed by the server component.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the initial data displayed by the client component.
5. Trigger the data change mechanism (if applicable).
6. Notice that the client component does not re-render with the updated data from the server component.

## Solution

The provided `bugSolution.js` demonstrates a solution that forces the client component to re-render.  We use the `useState` hook to track the data changes and trigger a re-render of the client component when changes are detected.

This may involve using techniques like creating a custom hook for data fetching, using Context API for data management and triggering re-renders via state updates.