---
title: Say It. Own It.
subtitle: Read it. Believe it.
---

<div class="grid grid-min-320 grid-gap-lg">
  <div class="card card-elevated" >
    <h3 class="card-title">Elevated Card</h3>
    <div class="card-body">
      <p class="card-text">This card has a more prominent shadow, giving it an elevated appearance.</p>
    </div>
  </div>
  <div class="card card-outlined" s>
    <h3 class="card-title">Outlined Card</h3>
    <div class="card-body">
      <p class="card-text">This card features a distinct border and transparent background.</p>
    </div>
  </div>
  <div class="card card-filled" >
    <h3 class="card-title">Filled Card</h3>
    <div class="card-body">
      <p class="card-text">This card has a muted background color, providing a subtle visual distinction.</p>
    </div>
  </div>
  <div class="card card-interactive" >
    <h3 class="card-title">Interactive Card</h3>
    <div class="card-body">
      <p class="card-text">This card responds to hover and active states, indicating interactivity.</p>
    </div>
  </div>
</div>


# Style Guide

This document serves as a comprehensive visual guide and test bed for the project's CSS framework. It showcases all available design tokens, utility classes, and components.

## 1. Colors

The project utilizes a comprehensive color system defined by CSS custom properties, supporting both light and dark themes.

### 1.1. Primary Brand Colors

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="background-color: var(--color-primary-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-primary-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#eff6ff</div>
  </div>
  <div style="background-color: var(--color-primary-100); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-primary-100</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#dbeafe</div>
  </div>
  <div style="background-color: var(--color-primary-200); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-primary-200</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#bfdbfe</div>
  </div>
  <div style="background-color: var(--color-primary-300); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-primary-300</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#93c5fd</div>
  </div>
  <div style="background-color: var(--color-primary-400); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-primary-400</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#60a5fa</div>
  </div>
  <div style="background-color: var(--color-primary-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-primary-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#3b82f6</div>
  </div>
  <div style="background-color: var(--color-primary-600); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-primary-600</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#2563eb</div>
  </div>
  <div style="background-color: var(--color-primary-700); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-primary-700</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#1d4ed8</div>
  </div>
  <div style="background-color: var(--color-primary-800); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-primary-800</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#1e40af</div>
  </div>
  <div style="background-color: var(--color-primary-900); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-primary-900</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#1e3a8a</div>
  </div>
  <div style="background-color: var(--color-primary-950); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-primary-950</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#172554</div>
  </div>
</div>

### 1.2. Secondary Colors

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="background-color: var(--color-secondary-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-secondary-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f0f9ff</div>
  </div>
  <div style="background-color: var(--color-secondary-100); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-secondary-100</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#e0f2fe</div>
  </div>
  <div style="background-color: var(--color-secondary-200); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-secondary-200</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#bae6fd</div>
  </div>
  <div style="background-color: var(--color-secondary-300); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-secondary-300</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#7dd3fc</div>
  </div>
  <div style="background-color: var(--color-secondary-400); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-secondary-400</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#38bdf8</div>
  </div>
  <div style="background-color: var(--color-secondary-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-secondary-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#0ea5e9</div>
  </div>
  <div style="background-color: var(--color-secondary-600); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-secondary-600</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#0284c7</div>
  </div>
  <div style="background-color: var(--color-secondary-700); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-secondary-700</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#0369a1</div>
  </div>
  <div style="background-color: var(--color-secondary-800); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-secondary-800</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#075985</div>
  </div>
  <div style="background-color: var(--color-secondary-900); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-secondary-900</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#0c4a6e</div>
  </div>
  <div style="background-color: var(--color-secondary-950); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-secondary-950</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#082f49</div>
  </div>
</div>

### 1.3. Accent Colors

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="background-color: var(--color-accent-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-accent-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#fdf4ff</div>
  </div>
  <div style="background-color: var(--color-accent-100); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-accent-100</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#fae8ff</div>
  </div>
  <div style="background-color: var(--color-accent-200); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-accent-200</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f5d0fe</div>
  </div>
  <div style="background-color: var(--color-accent-300); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-accent-300</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f0abfc</div>
  </div>
  <div style="background-color: var(--color-accent-400); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-accent-400</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#e879f9</div>
  </div>
  <div style="background-color: var(--color-accent-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-accent-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#d946ef</div>
  </div>
  <div style="background-color: var(--color-accent-600); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-accent-600</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#c026d3</div>
  </div>
  <div style="background-color: var(--color-accent-700); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-accent-700</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#a21caf</div>
  </div>
  <div style="background-color: var(--color-accent-800); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-accent-800</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#86198f</div>
  </div>
  <div style="background-color: var(--color-accent-900); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-accent-900</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#701a75</div>
  </div>
  <div style="background-color: var(--color-accent-950); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-accent-950</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#4a044e</div>
  </div>
</div>

### 1.4. Neutral Colors

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="background-color: var(--color-neutral-0); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-neutral-0</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#ffffff</div>
  </div>
  <div style="background-color: var(--color-neutral-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-neutral-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f9fafb</div>
  </div>
  <div style="background-color: var(--color-neutral-100); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-neutral-100</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f3f4f6</div>
  </div>
  <div style="background-color: var(--color-neutral-200); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-neutral-200</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#e5e7eb</div>
  </div>
  <div style="background-color: var(--color-neutral-300); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-neutral-300</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#d1d5db</div>
  </div>
  <div style="background-color: var(--color-neutral-400); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-neutral-400</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#9ca3af</div>
  </div>
  <div style="background-color: var(--color-neutral-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-neutral-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#6b7280</div>
  </div>
  <div style="background-color: var(--color-neutral-600); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-neutral-600</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#4b5563</div>
  </div>
  <div style="background-color: var(--color-neutral-700); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-neutral-700</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#374151</div>
  </div>
  <div style="background-color: var(--color-neutral-800); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-neutral-800</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#1f2937</div>
  </div>
  <div style="background-color: var(--color-neutral-900); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-neutral-900</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#111827</div>
  </div>
  <div style="background-color: var(--color-neutral-950); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-neutral-950</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#030712</div>
  </div>
</div>

### 1.5. Semantic Colors

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="background-color: var(--color-success-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-success-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f0fdf4</div>
  </div>
  <div style="background-color: var(--color-success-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-success-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#22c55e</div>
  </div>
  <div style="background-color: var(--color-warning-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-warning-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#fffbeb</div>
  </div>
  <div style="background-color: var(--color-warning-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-warning-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#f59e0b</div>
  </div>
  <div style="background-color: var(--color-error-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-error-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#fef2f2</div>
  </div>
  <div style="background-color: var(--color-error-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-error-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#ef4444</div>
  </div>
  <div style="background-color: var(--color-info-50); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-info-50</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">#f0f9ff</div>
  </div>
  <div style="background-color: var(--color-info-500); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 120px;">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-info-500</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-inverse);">#06b6d4</div>
  </div>
</div>

### 1.6. Theme Color Assignments

These variables define the semantic usage of colors for text, backgrounds, and borders, adapting automatically to light and dark themes.

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-text-primary</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Primary text color</div>
  </div>
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">--color-text-secondary</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Secondary text color</div>
  </div>
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">--color-text-muted</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Muted text color</div>
  </div>
  <div style="background-color: var(--color-bg-inverse); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-text-inverse</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Inverse text color</div>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-bg-primary</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Primary background</div>
  </div>
  <div style="background-color: var(--color-bg-secondary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-bg-secondary</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Secondary background</div>
  </div>
  <div style="background-color: var(--color-bg-muted); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-bg-muted</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Muted background</div>
  </div>
  <div style="background-color: var(--color-bg-inverse); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-inverse);">--color-bg-inverse</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Inverse background</div>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-border-primary</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Primary border</div>
  </div>
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-secondary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-border-secondary</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Secondary border</div>
  </div>
  <div style="background-color: var(--color-bg-primary); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 2px solid var(--color-border-focus);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-border-focus</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Focus border</div>
  </div>
</div>

### 1.7. Surface Colors

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <div style="background-color: var(--color-surface-raised); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-surface-raised</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Raised surface color (e.g., cards)</div>
  </div>
  <div style="background-color: var(--color-surface-sunken); padding: var(--space-4); border-radius: var(--radius-md); text-align: center; flex: 1 1 180px; border: 1px solid var(--color-border-primary);">
    <div style="font-size: var(--font-size-sm); color: var(--color-text-primary);">--color-surface-sunken</div>
    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Sunken surface color (e.g., input fields)</div>
  </div>
</div>

## 2. Typography

The typography system uses `clamp()` for fluid font sizing, ensuring responsiveness across devices.

### 2.1. Font Families

<p style="font-family: var(--font-family-sans); font-size: var(--font-size-base);">
  <strong>Sans-serif:</strong> <code>--font-family-sans</code> (ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")
</p>
<p style="font-family: var(--font-family-serif); font-size: var(--font-size-base);">
  <strong>Serif:</strong> <code>--font-family-serif</code> (ui-serif, Georgia, Cambria, "Times New Roman", Times, serif)
</p>
<p style="font-family: var(--font-family-mono); font-size: var(--font-size-base);">
  <strong>Monospace:</strong> <code>--font-family-mono</code> (ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace)
</p>

### 2.2. Font Weights

<p style="font-weight: var(--font-weight-thin);">Thin (<code>--font-weight-thin</code>)</p>
<p style="font-weight: var(--font-weight-light);">Light (<code>--font-weight-light</code>)</p>
<p style="font-weight: var(--font-weight-normal);">Normal (<code>--font-weight-normal</code>)</p>
<p style="font-weight: var(--font-weight-medium);">Medium (<code>--font-weight-medium</code>)</p>
<p style="font-weight: var(--font-weight-semibold);">Semibold (<code>--font-weight-semibold</code>)</p>
<p style="font-weight: var(--font-weight-bold);">Bold (<code>--font-weight-bold</code>)</p>
<p style="font-weight: var(--font-weight-extrabold);">Extrabold (<code>--font-weight-extrabold</code>)</p>
<p style="font-weight: var(--font-weight-black);">Black (<code>--font-weight-black</code>)</p>

### 2.3. Responsive Font Sizes (Conservative Scale)

<p style="font-size: var(--font-size-xs);"><code>--font-size-xs</code> (12-14px)</p>
<p style="font-size: var(--font-size-sm);"><code>--font-size-sm</code> (14-16px)</p>
<p style="font-size: var(--font-size-base);"><code>--font-size-base</code> (16-18px)</p>
<p style="font-size: var(--font-size-lg);"><code>--font-size-lg</code> (18-20px)</p>
<p style="font-size: var(--font-size-xl);"><code>--font-size-xl</code> (20-24px)</p>
<p style="font-size: var(--font-size-2xl);"><code>--font-size-2xl</code> (24-30px)</p>
<p style="font-size: var(--font-size-3xl);"><code>--font-size-3xl</code> (30-36px)</p>
<p style="font-size: var(--font-size-4xl);"><code>--font-size-4xl</code> (36-48px)</p>
<p style="font-size: var(--font-size-5xl);"><code>--font-size-5xl</code> (48-64px)</p>
<p style="font-size: var(--font-size-6xl);"><code>--font-size-6xl</code> (60-80px)</p>

### 2.4. Responsive Font Sizes (Bold Scale for Headings)

<h6 style="font-size: var(--font-size-heading-xs);">Heading XS (<code>--font-size-heading-xs</code>)</h6>
<h5 style="font-size: var(--font-size-heading-sm);">Heading SM (<code>--font-size-heading-sm</code>)</h5>
<h4 style="font-size: var(--font-size-heading-base);">Heading Base (<code>--font-size-heading-base</code>)</h4>
<h3 style="font-size: var(--font-size-heading-lg);">Heading LG (<code>--font-size-heading-lg</code>)</h3>
<h2 style="font-size: var(--font-size-heading-xl);">Heading XL (<code>--font-size-heading-xl</code>)</h2>
<h1 style="font-size: var(--font-size-heading-2xl);">Heading 2XL (<code>--font-size-heading-2xl</code>)</h1>
<h1 style="font-size: var(--font-size-heading-3xl);">Heading 3XL (<code>--font-size-heading-3xl</code>)</h1>
<h1 style="font-size: var(--font-size-heading-4xl);">Heading 4XL (<code>--font-size-heading-4xl</code>)</h1>
<h1 style="font-size: var(--font-size-heading-5xl);">Heading 5XL (<code>--font-size-heading-5xl</code>)</h1>
<h1 style="font-size: var(--font-size-heading-6xl);">Heading 6XL (<code>--font-size-heading-6xl</code>)</h1>

### 2.5. Line Heights

<p style="line-height: var(--line-height-none);">Line height none (<code>--line-height-none</code>)</p>
<p style="line-height: var(--line-height-tight);">Line height tight (<code>--line-height-tight</code>)</p>
<p style="line-height: var(--line-height-snug);">Line height snug (<code>--line-height-snug</code>)</p>
<p style="line-height: var(--line-height-normal);">Line height normal (<code>--line-height-normal</code>)</p>
<p style="line-height: var(--line-height-relaxed);">Line height relaxed (<code>--line-height-relaxed</code>)</p>
<p style="line-height: var(--line-height-loose);">Line height loose (<code>--line-height-loose</code>)</p>

### 2.6. Letter Spacing

<p style="letter-spacing: var(--letter-spacing-tighter);">Letter spacing tighter (<code>--letter-spacing-tighter</code>)</p>
<p style="letter-spacing: var(--letter-spacing-tight);">Letter spacing tight (<code>--letter-spacing-tight</code>)</p>
<p style="letter-spacing: var(--letter-spacing-normal);">Letter spacing normal (<code>--letter-spacing-normal</code>)</p>
<p style="letter-spacing: var(--letter-spacing-wide);">Letter spacing wide (<code>--letter-spacing-wide</code>)</p>
<p style="letter-spacing: var(--letter-spacing-wider);">Letter spacing wider (<code>--letter-spacing-wider</code>)</p>
<p style="letter-spacing: var(--letter-spacing-widest);">Letter spacing widest (<code>--letter-spacing-widest</code>)</p>

## 3. Spacing System

The spacing system provides consistent vertical and horizontal rhythm using a predefined scale.

### 3.1. Base Spacing Scale

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-0); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-0</code> (0)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-px); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-px</code> (1px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-0-5); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-0-5</code> (2px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-1); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-1</code> (4px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-1-5); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-1-5</code> (6px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-2); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-2</code> (8px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-2-5); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-2-5</code> (10px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-3); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-3</code> (12px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-3-5); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-3-5</code> (14px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-4); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-4</code> (16px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-5); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-5</code> (20px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-6); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-6</code> (24px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-7); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-7</code> (28px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-8); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-8</code> (32px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-9); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-9</code> (36px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-10); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-10</code> (40px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-11); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-11</code> (44px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-12); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-12</code> (48px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-14); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-14</code> (56px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-16); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-16</code> (64px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-20); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-20</code> (80px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-24); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-24</code> (96px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-28); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-28</code> (112px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-32); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-32</code> (128px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-36); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-36</code> (144px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-40); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-40</code> (160px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-44); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-44</code> (176px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-48); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-48</code> (192px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-52); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-52</code> (208px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-56); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-56</code> (224px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-60); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-60</code> (240px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-64); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-64</code> (256px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-72); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-72</code> (288px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-80); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-80</code> (320px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-96); height: var(--space-8); background-color: var(--color-primary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-96</code> (384px)</div>
</div>

### 3.2. Semantic Spacing Aliases

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-xs); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-xs</code> (4px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-sm); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-sm</code> (8px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-md); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-md</code> (16px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-lg); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-lg</code> (24px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-xl); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-xl</code> (32px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-2xl); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-2xl</code> (48px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-3xl); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-3xl</code> (64px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-4xl); height: var(--space-8); background-color: var(--color-secondary-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-4xl</code> (96px)</div>
</div>

### 3.3. Component Pattern Spacing

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-component-padding); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-component-padding</code> (16px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-component-padding-sm); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-component-padding-sm</code> (12px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-component-padding-lg); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-component-padding-lg</code> (24px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-component-margin); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-component-margin</code> (24px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-section-gap); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-section-gap</code> (48px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-section-gap-sm); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-section-gap-sm</code> (32px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-section-gap-lg); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-section-gap-lg</code> (64px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-card-padding); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-card-padding</code> (24px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-card-gap); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-card-gap</code> (16px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-form-gap); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-form-gap</code> (16px)</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <div style="width: var(--space-nav-gap); height: var(--space-8); background-color: var(--color-accent-500);"></div>
  <div style="font-size: var(--font-size-sm);"><code>--space-nav-gap</code> (24px)</div>
</div>

## 4. Buttons

The button system provides a variety of styles, sizes, and modifiers for interactive elements.

### 4.1. Base Button

<button class="btn">Base Button</button>
<button class="btn" disabled>Disabled Base Button</button>

### 4.2. Button Variants

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  <button class="btn btn-outline">Outline Button</button>
  <button class="btn btn-ghost">Ghost Button</button>
</div>

### 4.3. Semantic Button Variants

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4);">
  <button class="btn btn-success">Success Button</button>
  <button class="btn btn-warning">Warning Button</button>
  <button class="btn btn-danger">Danger Button</button>
  <button class="btn btn-info">Info Button</button>
</div>

### 4.4. Button Sizes

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center;">
  <button class="btn btn-primary btn-xs">Extra Small</button>
  <button class="btn btn-primary btn-sm">Small</button>
  <button class="btn btn-primary">Base</button>
  <button class="btn btn-primary btn-lg">Large</button>
  <button class="btn btn-primary btn-xl">Extra Large</button>
</div>

### 4.5. Button Modifiers

<div style="display: flex; flex-direction: column; gap: var(--space-4); width: 300px;">
  <button class="btn btn-primary btn-full">Full Width Button</button>
  <button class="btn btn-secondary btn-block">Block Button</button>
</div>

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <button class="btn btn-primary btn-square">SQ</button>
  <button class="btn btn-primary btn-square btn-sm">SQ</button>
  <button class="btn btn-primary btn-square btn-lg">SQ</button>
  <button class="btn btn-primary btn-circle">C</button>
  <button class="btn btn-primary btn-circle btn-sm">C</button>
  <button class="btn btn-primary btn-circle btn-lg">C</button>
</div>

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <button class="btn btn-primary btn-loading">Loading</button>
  <button class="btn btn-secondary btn-loading">Loading</button>
</div>

### 4.6. Button Groups

<div class="btn-group" style="margin-top: var(--space-4);">
  <button class="btn btn-primary">One</button>
  <button class="btn btn-primary">Two</button>
  <button class="btn btn-primary">Three</button>
</div>

<div class="btn-group btn-group-sm" style="margin-top: var(--space-4);">
  <button class="btn btn-secondary">One</button>
  <button class="btn btn-secondary">Two</button>
  <button class="btn btn-secondary">Three</button>
</div>

## 5. Cards

The card component provides flexible containers for content, with various styles and layouts.

### 5.1. Base Card

<div class="card" style="width: 300px;">
  <h3 class="card-title">Base Card Title</h3>
  <div class="card-body">
    <p class="card-text">This is a basic card with some sample text. It demonstrates the default styling and spacing.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>

### 5.2. Card Variants

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <div class="card card-elevated" style="width: 300px;">
    <h3 class="card-title">Elevated Card</h3>
    <div class="card-body">
      <p class="card-text">This card has a more prominent shadow, giving it an elevated appearance.</p>
    </div>
  </div>
  <div class="card card-outlined" style="width: 300px;">
    <h3 class="card-title">Outlined Card</h3>
    <div class="card-body">
      <p class="card-text">This card features a distinct border and transparent background.</p>
    </div>
  </div>
  <div class="card card-filled" style="width: 300px;">
    <h3 class="card-title">Filled Card</h3>
    <div class="card-body">
      <p class="card-text">This card has a muted background color, providing a subtle visual distinction.</p>
    </div>
  </div>
  <div class="card card-interactive" style="width: 300px;">
    <h3 class="card-title">Interactive Card</h3>
    <div class="card-body">
      <p class="card-text">This card responds to hover and active states, indicating interactivity.</p>
    </div>
  </div>
</div>

### 5.3. Semantic Card Variants

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <div class="card card-success" style="width: 300px;">
    <h3 class="card-title">Success Card</h3>
    <div class="card-body">
      <p class="card-text">Indicates a successful operation or positive information.</p>
    </div>
  </div>
  <div class="card card-warning" style="width: 300px;">
    <h3 class="card-title">Warning Card</h3>
    <div class="card-body">
      <p class="card-text">Highlights important warnings or cautions.</p>
    </div>
  </div>
  <div class="card card-danger" style="width: 300px;">
    <h3 class="card-title">Danger Card</h3>
    <div class="card-body">
      <p class="card-text">Used for critical errors or destructive actions.</p>
    </div>
  </div>
  <div class="card card-info" style="width: 300px;">
    <h3 class="card-title">Info Card</h3>
    <div class="card-body">
      <p class="card-text">Provides general informational messages.</p>
    </div>
  </div>
</div>

### 5.4. Card Sizes

<div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
  <div class="card card-compact" style="width: 250px;">
    <h3 class="card-title">Compact Card</h3>
    <div class="card-body">
      <p class="card-text">A smaller card with reduced padding and spacing.</p>
    </div>
  </div>
  <div class="card card-spacious" style="width: 350px;">
    <h3 class="card-title">Spacious Card</h3>
    <div class="card-body">
      <p class="card-text">A larger card with increased padding and spacing for more content.</p>
    </div>
  </div>
</div>

### 5.5. Hugo-Specific Card Layouts

#### 5.5.1. Blog Post Card (`.card-post`)

<div class="card card-post" style="width: 350px;">
  <img src="https://res.cloudinary.com/dklongley/image/upload/w_300/girlsonly.webp" alt="Placeholder Image" class="card-image">
  <header class="card-header">
    <h3 class="card-title">Example Blog Post</h3>
  </header>
  <div class="card-body">
    <p class="card-text">A brief excerpt from the blog post, demonstrating the layout for a typical article summary.</p>
  </div>
  <div class="card-footer">
    <span>Read More</span>
  </div>
</div>

#### 5.5.2. Feature Card (`.card-feature`)

<div class="card card-feature" style="width: 280px;">
  <div class="card-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg>
  </div>
  <h3 class="card-title">Amazing Feature</h3>
  <div class="card-body">
    <p class="card-text">This card highlights a key feature with an icon and descriptive text.</p>
  </div>
</div>

#### 5.5.3. Team Member Card (`.card-team`)

<div class="card card-team" style="width: 250px;">
  <img src="https://res.cloudinary.com/dklongley/image/upload/w_100/sq-dind.jpg" alt="Team Member Photo" class="card-avatar">
  <h3 class="card-title">Doe Joe</h3>
  <div class="card-body">
    <p class="card-text card-role">Lead Developer</p>
    <p class="card-text">Joe is passionate about clean code and innovative solutions.</p>
  </div>
</div>

#### 5.5.4. Testimonial Card (`.card-testimonial`)

<div class="card card-testimonial" style="width: 350px;">
  <div class="card-body">
    <p class="card-text">"This product has transformed our workflow. Highly recommend it to everyone!"</p>
  </div>
  <div class="card-footer card-author">
    <img src="https://res.cloudinary.com/dklongley/image/upload/w_50/borrego.jpg" alt="Author Photo" class="card-avatar">
    <div>
      <h4 class="card-title" style="font-size: var(--font-size-base);">John Smith</h4>
      <p class="card-text" style="font-size: var(--font-size-sm);">CEO, Example Corp.</p>
    </div>
  </div>
</div>

#### 5.5.5. Product Card (`.card-product`)

<div class="card card-product" style="width: 280px;">
  <img src="https://res.cloudinary.com/dklongley/image/upload/w_200/green-is-winning/0_HpH5TppSillznQny.webp" alt="Product Image" class="card-image">
  <h3 class="card-title">Awesome Product</h3>
  <div class="card-body">
    <p class="card-text card-price">$49.99 <span class="card-price-original">$79.99</span></p>
    <p class="card-text">A brief description of the product, highlighting its key features.</p>
  </div>
  <div class="card-actions card-actions-full">
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</div>

## 6. Grid System

The utility-first grid system provides flexible and responsive layouts using CSS Grid.

### 6.1. Core Grid Container

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4);">
  <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-4);">
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Grid Item 1</div>
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Grid Item 2</div>
  </div>
</div>

### 6.2. Auto-Fit Responsive Grid Columns

These grids automatically adjust the number of columns based on available space and a minimum column width.

#### 6.2.1. `grid-cols-auto-fit` with Semantic Min-Widths

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-cols-auto-fit-xs</code> (min 200px)</h4>
  <div class="grid grid-cols-auto-fit-xs grid-gap-md">
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
  </div>
</div>

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-cols-auto-fit-md</code> (min 300px)</h4>
  <div class="grid grid-cols-auto-fit-md grid-gap-md">
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
  </div>
</div>

#### 6.2.2. Custom `grid-min-*`

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-min-320</code> (min 320px)</h4>
  <div class="grid grid-min-320 grid-gap-md">
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-secondary-100); padding: var(--space-4); text-align: center;">Item</div>
  </div>
</div>

### 6.3. Explicit Column Counts

For fixed column layouts, regardless of screen size.

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-cols-3</code></h4>
  <div class="grid grid-cols-3 grid-gap-md">
    <div style="background-color: var(--color-accent-100); padding: var(--space-4); text-align: center;">Item 1</div>
    <div style="background-color: var(--color-accent-100); padding: var(--space-4); text-align: center;">Item 2</div>
    <div style="background-color: var(--color-accent-100); padding: var(--space-4); text-align: center;">Item 3</div>
  </div>
</div>

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-cols-2</code></h4>
  <div class="grid grid-cols-2 grid-gap-md">
    <div style="background-color: var(--color-accent-100); padding: var(--space-4); text-align: center;">Item 1</div>
    <div style="background-color: var(--color-accent-100); padding: var(--space-4); text-align: center;">Item 2</div>
  </div>
</div>

### 6.4. Grid Gaps

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-gap-lg</code> (24px)</h4>
  <div class="grid grid-cols-2 grid-gap-lg">
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Item</div>
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Item</div>
  </div>
</div>

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.grid-gap-x-8</code> (32px column gap) and <code>.grid-gap-y-4</code> (16px row gap)</h4>
  <div class="grid grid-cols-2 grid-gap-x-8 grid-gap-y-4">
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Item 1</div>
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Item 2</div>
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Item 3</div>
    <div style="background-color: var(--color-primary-100); padding: var(--space-4); text-align: center;">Item 4</div>
  </div>
</div>

### 6.5. Grid Item Spanning

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.col-span-2</code> in a 3-column grid</h4>
  <div class="grid grid-cols-3 grid-gap-md">
    <div style="background-color: var(--color-success-100); padding: var(--space-4); text-align: center; grid-column: span 2;">Item spanning 2 columns</div>
    <div style="background-color: var(--color-success-100); padding: var(--space-4); text-align: center;">Item 3</div>
    <div style="background-color: var(--color-success-100); padding: var(--space-4); text-align: center;">Item 4</div>
    <div style="background-color: var(--color-success-100); padding: var(--space-4); text-align: center;">Item 5</div>
  </div>
</div>

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.col-span-full</code></h4>
  <div class="grid grid-cols-3 grid-gap-md">
    <div style="background-color: var(--color-warning-100); padding: var(--space-4); text-align: center; grid-column: 1 / -1;">Item spanning full width</div>
    <div style="background-color: var(--color-warning-100); padding: var(--space-4); text-align: center;">Item 2</div>
    <div style="background-color: var(--color-warning-100); padding: var(--space-4); text-align: center;">Item 3</div>
  </div>
</div>

### 6.6. Grid Alignment Utilities

<div style="border: 1px dashed var(--color-border-primary); padding: var(--space-4); margin-top: var(--space-4);">
  <h4 style="margin-top: 0;"><code>.justify-items-center</code> and <code>.align-items-center</code></h4>
  <div class="grid grid-cols-2 grid-gap-md justify-items-center align-items-center" style="height: 150px;">
    <div style="background-color: var(--color-info-100); padding: var(--space-4); text-align: center;">Center</div>
    <div style="background-color: var(--color-info-100); padding: var(--space-4); text-align: center;">Center</div>
  </div>
</div>

## 7. Dark Mode Demonstration

To test dark mode, you can either:
1.  Change your system's color scheme preference to dark.
2.  Add `data-theme="dark"` to the `<html>` tag, or add the class `dark` to any parent element.

<div style="background-color: var(--color-bg-primary); padding: var(--space-8); border-radius: var(--radius-lg); margin-top: var(--space-8); border: 1px solid var(--color-border-primary);">
  <h3 style="color: var(--color-text-primary);">Dark Mode Example</h3>
  <p style="color: var(--color-text-secondary);">This section demonstrates how components adapt to the dark theme.</p>
  <div style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-4);">
    <button class="btn btn-primary">Primary Button</button>
    <button class="btn btn-outline">Outline Button</button>
    <button class="btn btn-ghost">Ghost Button</button>
  </div>
  <div class="card" style="width: 300px; margin-top: var(--space-4);">
    <h3 class="card-title">Dark Mode Card</h3>
    <div class="card-body">
      <p class="card-text">This card should reflect the dark theme styling.</p>
    </div>
  </div>
</div>
