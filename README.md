#### ***Task 1: Implement a UI Component***

*Deployment link: [https://telgea-code-task-tzvt.vercel.app/company-account](https://telgea-code-task-tzvt.vercel.app/company-account)*

I chose the 'Whitelist domains' component. Although the 'Top-up for Users' component offered more complex user interactions (like error states and calendar components), the estimated 20-minute timeframe seemed insufficient to deliver work at the standard I believe you expect.

While working on the task, I focused on keeping everything as modular as possible. I created a base 'Modal' component that accepts props to display both the 'Add domains' and 'Remove domains' components. This avoids code duplication and keeps the project more maintainable as it grows.

In addition to ensuring the adding and removal of domains worked correctly, I focused on making the modal as robust as possible:

- Closing via outside click or Escape key.
- Preventing background scroll when open.
- Domain validation using regex with error messages.
- Preventing duplicate domain entries.

Regarding the styling, I adhered as closely as possible to the Figma file, given the time constraint. Given more time, I would ensure the styling matches the Figma file exactly.

**Next Steps I would take to bring the functionality closer to a production release:**

- General style adjustments to match the Figma file exactly (including fonts, colors, button styling, sizing, margins, and icons).
- Backend integration.
- More polished hover states and animations.
- Improved responsive states and mobile view enhancements.
- Loading states and improved user feedback (e.g., 'Domain removed/added successfully' messages).
- Increased component modularity
- Enhanced error state handling.
- Unit tests.

---

#### Task 2: Refactor and Document

**The improved button component can be found here:** `src/components/BetterButton.tsx`

Improvements made:

- Replaced inline styling with Tailwind CSS.
- Renamed `click` prop to `onClick` for consistency with standard naming conventions.
- Added a default value for the text prop.
- Added a `className` prop for easier styling customization.
- Ensured consistent code spacing and formatting.
- Implemented a hover effect.
- Set the cursor to 'pointer' on hover.
- Added a TypeScript interface for props validation.

---

#### Task 3: Written Response

While I'm always careful not to step on anyone's toes, it's been made very clear that Telgea prioritizes speed and results. With that in mind, I would make minor adjustments (like margins and font sizes) according to the existing design system or styling found elsewhere in the app while implementing the feature.

While working on the feature, I would contact the designer to inquire about the mobile views, as they represent a more substantial unit of work. I would also confirm whether I could proceed with making the minor adjustments proactively. I can build the features with responsiveness in mind and implement the specific mobile design details once the designer provides them.

My intention is to work as closely with the designer as possible without letting minor details stand in the way of making progress. Clear communication while taking initiative when needed.
