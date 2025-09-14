# Overview

This is a modern minimal landing page built with Next.js 15, featuring a clean design inspired by Figma designs. The project implements a single-page application showcasing a design tool called "Logora.design" with sections for hero content, features, how it works, and a call-to-action footer. The landing page is designed to be responsive and uses a component-based architecture with modern React patterns.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 15 with App Router architecture using TypeScript
- **Component Structure**: Modular component-based design with separate components for each landing page section (Header, Hero, FeaturesGrid, HowItWorks, CTAFooter)
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **UI Components**: shadcn/ui component library providing a comprehensive set of accessible, customizable components built on Radix UI primitives

## Design System
- **Component Library**: Built on shadcn/ui with extensive UI components including buttons, cards, dialogs, forms, navigation, and data display components
- **Theming**: CSS custom properties for colors, spacing, and typography with support for light/dark themes via next-themes
- **Responsive Design**: Mobile-first approach using Tailwind CSS utilities
- **Typography**: Inter font family for consistent typography across the application

## Development Tools
- **Build System**: Next.js with TypeScript for type safety
- **Styling**: Tailwind CSS with PostCSS processing
- **Code Quality**: ESLint configuration for Next.js projects
- **Asset Handling**: Next.js Image component with support for external image sources (Unsplash)

## Component Architecture
- **Atomic Design**: Components are organized from basic UI elements (buttons, inputs) to complex page sections
- **Composition**: Uses React composition patterns with Slot components from Radix UI for flexible component APIs
- **Accessibility**: Built-in accessibility features through Radix UI primitives
- **State Management**: Client-side state management using React hooks and context where needed

# External Dependencies

## UI Framework Dependencies
- **@radix-ui/***: Complete suite of accessible UI primitives for building the component library
- **class-variance-authority**: Utility for creating component variants with consistent styling
- **clsx & tailwind-merge**: Class name utilities for conditional styling and Tailwind class merging

## Styling and Design
- **@tailwindcss/postcss**: PostCSS plugin for Tailwind CSS processing
- **autoprefixer**: CSS vendor prefixing for browser compatibility
- **next-themes**: Theme switching functionality for light/dark mode support

## Interactive Components
- **embla-carousel-react**: Carousel/slider functionality for image galleries
- **cmdk**: Command palette and search interface components
- **lucide-react**: Icon library providing consistent iconography
- **sonner**: Toast notification system for user feedback

## Form and Input Handling
- **react-hook-form**: Form state management and validation
- **react-day-picker**: Date picker component for date inputs
- **input-otp**: One-time password input component

## Data Visualization
- **recharts**: Chart and data visualization library for analytics and metrics display

## Development and Layout
- **react-resizable-panels**: Resizable panel components for flexible layouts
- **react-dom**: React DOM rendering library

## External Services
- **Unsplash**: External image service for high-quality photography (configured in next.config.js)
- **Figma**: Design source referenced in documentation and attributions