---
title: Choose the right component library
date: 2024-01-10
description: Guide to choose the right component library
---

When we start a new project, we need to choose a component library. There are many component libraries, and each has its own characteristics. How to choose the right component library?

From my own experience and the experience of others, I have summarized the following 3 points:
- The component library should be easy to use
- The component library should be easy to customize
- The component library should be easy to maintain

Depends on the project size and the team size, we can choose different component libraries. 

## Easy to use for small projects and small teams

For small projects and small teams or a startup, the time to launch and find the product market fit is essential, so do can choose a component library that contains almost everything we need to start with. For example, [Material UI](https://material-ui.com/) is a good choice. It has a lot of components, and it is easy to use.  [Bootstrap](https://getbootstrap.com/) and [Ant Design](https://ant.design/) are also good choices.

## Customization matters for large projects and large teams
For larger projects and team, we may want more control over the components, so we can choose a component library that is easy to customize. For example, [Chakra UI](https://chakra-ui.com/), which share the similar idea with [Tailwind CSS](https://tailwindcss.com/) to make the customization easier. If you have enough time and resources, you can build your own component library as well. If you already have a design system, you can build your own component library based on it, both the base component and the business component that can be shared across the different projects.

## Thinking in components
The components are actually the small building blocks of the UI. It has its own display, style, and behavior, just like the html/css/js dose. So can we separate the focus and make it easy to compose? Of course, we can! 

### Unstyled components
We can use the [Headless UI](https://headlessui.dev/) to build our own component library. It is a set of completely unstyled, fully accessible UI components for React, Vue, and Alpine.js. It is a good choice for large projects and large teams. An alternative (for react) is [shadcn/ui](https://ui.shadcn.com/), which is a collection of accessible, reusable, and composable React components for faster and accessible web development. 

### Utility first css
We can use the [Tailwind CSS](https://tailwindcss.com/) to build our own component library. It is a utility-first CSS framework for rapidly building custom designs. You can easily customize the style of the components by adding the utility classes. It's quite simple to use once you get the naming idea behind it.

Another choice is CSS-in-JS, such as [styled-components](https://styled-components.com/) and [emotion](https://emotion.sh/docs/introduction). They are both good choices. 

### JS Frameworks

We can use the [React](https://reactjs.org/), [Vue](https://vuejs.org/), [Svelte](https://svelte.dev/) or [Alpine.js](https://alpinejs.dev/) to build our own component library, it depends on the project and the team decision.

Once we combine them together, we have our own component library. Enjoy your construction!
