# Amy's notes
- Make case studies shorter. Try to focus on 3 main points
- For case studies that don't suit themselves to a process infographic, show timeline
- Should be able to read the case study by reading the headers *only*
- Put SJL hero image on a laptop. Otherwise feels too repetitive.

# Amy's notes after redesign
- Most notes are included in Copilot case study
- Be sure to paste everything into google docs to spell-check


# Detail Page
x migrate "splash" to canvas
x add "back" transition. Could scroll back to top before putting it back.
x migrate image to canvas
x programmatically get project from detail page
x add scroll up if needed
x remove rightCol component - totally unnecessary
x add prev / next at bottom of page
x move to CSS Modules
x programmatically get image dimensions
x explore new layout options

# General
x cleanup pages>index.js
x keyboard controls
x Alt design for my photo
x Flexible box component for layout
x factor out components in pages > index.js


# CASE STUDIES
x Case study components
x Case study images

x BR Case study mobile image
x Better hero images for Sounds Just Like, Copilot, OpenTable
x Rethink Section "Soft" attrs for better mobile styling later

x Copilot case study
  x Comment out lingo section
  x Update headlines to be readable as outline
  x Add product development timeline
  x Update movie
  x add cardsort

x OpenTable case study

# STYLING
x Typography styles. Try https://kyleamathews.github.io/typography.js/
- Redesign "Process" graphic on Bad Racket to avoid copying Peter Tait.
- Footer cleanup + home page styling. Watch out for page link visibility breaking pre-loading.
- Change footer text links to icons
x Favicon

# CONTENT
- Contact section
- "Setting redesign goals" in Bad Racket case study
- SJL "coming soon"


# RESPONSIVE
x Mobile layout for home page


# BEHAVIOR
x change "last clicked item" to become an array that pushes & pops for multiple "back" animations
x if no "last clicked item", back button should go to home, not "new tab"
- Add "back to top" control in lower right corner of page


# PERFORMANCE
- global styles are getting imported twice again. Fix.
- Lazy load images https://github.com/sergiodxa/react-lazy-image
  also look at:
      https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
      https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/

# MONITORING
x Add Google Analytics Gatsby plugin https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics


# Post-launch
- Sounds Just Like case study
- Customer360 case study

- Add "more projects" section indicating some can't be shared due to NDA.
  Basically another "contact" section.

- Add "passion projects" section. Include Bad Racket, SJL, Customer360

-  Sync to new mac


# Maybes
- [maybe] custom 'in viewport' controller for displaying home page text
- [maybe] fixed left vertical nav
