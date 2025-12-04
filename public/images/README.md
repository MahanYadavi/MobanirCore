# Image Management

This folder structure is designed for you to easily manage your website's images.

## Folders:
- **projects**: Place project images here (e.g., `project-1.jpg`).
- **certificates**: Place certificate scans here.
- **partners**: Place partner logos here.
- **news**: Place news/blog images here.
- **team**: Place team member photos here.

## How to use:
1. Add your image file to the respective folder (e.g., `public/images/projects/my-new-project.jpg`).
2. In the code (specifically `src/data/mockData.ts`), update the image path to reference your new file:
   ```typescript
   image: "/images/projects/my-new-project.jpg"
   ```
