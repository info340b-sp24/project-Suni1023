Check lists

Content and HTML Structure

    Includes HTML content for all parts of the app
    Includes index.html file (named correctly, in the root folder)
    index.html file is the "main page"
    Includes multiple pages, with hyperlinks between them (in both directions!)
    All pages link in a single CSS file
    Includes meta elements in html head: author (index only), description (index only), favicon, title
    Includes header element (with app name) and footer (with copyright) elements
    Includes sufficient content (e.g., multiple views of the data)
    Includes 3+ images or media content
    Includes a form element

Site Style and CSS Structure
    Loads an external CSS style sheet
    Stylesheet includes sufficient number of rules (20+)
    CSS changes:
        colors
        fonts/sizes
        margins/padding
    Uses flexbox or grid for non-standard layout (via Bootstrap is fine)
    Has a polished appearance
        readable & navigable
        consistent
        clean

Accessibility
    Uses elements semantically (no <i>; <a> for links; etc)
    Correctly uses sectioning elements (<main>, <section>, etc); not needed if no sections
    Uses Hierarchical headings; doesn't skip levels
    Includes alt attributes on all images
    Form includes <label> elements (with for attribute)
    Includes aria-label and role attributes when necessary (and only when necessary!)
    Colors have sufficient contrast

Responsive Design
    Specifies a viewport meta
    Includes media queries to handle 2+ sizes (at least small screens and large screens)
    Mobile-first CSS: media queries at the bottom (modify the small-size default)
    Styling changes on media and large screens
    Layout is noticeably and meaningfully different on different screen sizes
    Page content is polished on all screen sizes

Clean Coding Style (HTML/CSS)
    Organized files in repo
    Valid HTML
        No invalid usage
        No redundant elements
        Clean and consistent indentation
    Well-designed CSS
        Informative class names
        Effective selectors (e.g., no id selectors)
        No inappropriate duplication of rules
        Organized in file, with comments to "group" sets of rules
    Follows all the guidelines in the course text style https://info340.github.io/code-style-guide.html 
