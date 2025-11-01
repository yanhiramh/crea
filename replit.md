# CREA - Interactive Learning Platform

## Overview
CREA is a static educational website that offers interactive learning experiences for Mathematics and English. The platform combines structured courses, weekly challenges, and study tools to create an engaging learning environment.

## Project Architecture
- **Type**: Static HTML/CSS/JavaScript website
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Structure**: 
  - `index.html` - Main landing page
  - `assets/css/indexstyles.css` - Styling
  - `main.js` - JavaScript functionality (currently empty)
  - `images/` - Image assets including icons and hero images

## Features
- Responsive design (mobile-first approach)
- Navigation menu with submenus for courses and tools
- Three main sections:
  1. **Structured Courses**: Mathematics and English with theoretical content, explanatory videos, and practical exercises
  2. **Weekly Challenges**: Level assessments and subject-specific challenges
  3. **Study Tools**: Study cards and AI assistant

## Development
- Server: Python HTTP server on port 5000
- Host: 0.0.0.0 for Replit compatibility
- The site is mobile-responsive with breakpoints at 768px and 1024px

## Recent Changes
- October 20, 2025: Made Mathematics page fully responsive
  - Redesigned mate-container to match main-container layout (mobile-first approach)
  - Changed article height from fixed (640px) to dynamic (grows with content)
  - Responsive breakpoint at 944px: stacked cards on mobile, 3 columns on desktop
  - Improved spacing: compact when closed, expands when buttons are opened
- October 20, 2025: Improved Mathematics page spacing
  - Reduced excessive margins in grade/area/topic lists (5th grade section)
  - Removed debug borders (green, blue, red)
  - Adjusted spacing: margins reduced from 8-50px to 4-8px for cleaner appearance
- October 20, 2025: Successfully completed project import to Replit environment
  - Installed Python 3.11 module
  - Created missing directories: `assets/css/` and `images/`
  - Created CSS stylesheet with responsive design
  - Fixed server.py to handle port reuse with SO_REUSEADDR and SO_REUSEPORT
  - Verified all resources load successfully (no 404 errors except favicon)
  - Confirmed website displays correctly with all sections visible
- October 16, 2025: Initial project import and Replit setup
