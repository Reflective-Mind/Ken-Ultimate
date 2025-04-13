# Unreal Engine Mesh Generator

A web-based tool for generating THREE.js 3D meshes that can be exported and used in Unreal Engine and other 3D environments.

## Features

- Create complex 3D meshes using procedural generation techniques
- Leverage AI-assisted code generation for custom mesh designs
- Export meshes to Unreal Engine-compatible formats
- Built-in examples including:
  - Dragon
  - Spiritual Tree
  - Mandala Patterns
  - Yin-Yang Symbol
  - Character Figure
  - And more!
- Live preview of generated meshes
- Code editor with syntax highlighting
- Responsive design for various screen sizes

## Technologies Used

- THREE.js for 3D rendering
- Next.js framework for frontend and API
- JavaScript/ES6+
- HTML5/CSS3
- OpenAI integration for AI-assisted code generation

## Getting Started

### Online Demo

The application is available online at:
- [Vercel Deployment](https://ken-ultimate.vercel.app/)
- [Render Deployment](https://ken-ultimate.onrender.com/)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Reflective-Mind/Ken-Ultimate.git
cd Ken-Ultimate
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select an example from the dropdown or create your own mesh
2. Modify the code in the editor to customize the mesh
3. Click "Generate" to create the mesh
4. Use the camera controls to inspect the mesh from different angles
5. Export the mesh for use in Unreal Engine or other 3D environments

## Deployment

This project is set up for automatic deployment using GitHub Actions:

- **Vercel Deployment**: Automatically deploys when changes are pushed to the main branch
- **Render Deployment**: Also automatically deploys with changes to the main branch

### Deployment Workflow

The deployment process follows these steps:
1. Code is pushed to the GitHub repository
2. GitHub Actions workflow builds the project
3. If build is successful, it triggers deployment to both Vercel and Render
4. Changes are live within minutes

## Embedding in Wix

This application can be embedded in Wix websites using an iframe:

```html
<iframe 
    src="https://ken-ultimate.vercel.app/" 
    width="100%" 
    height="800px" 
    frameborder="0" 
    allow="fullscreen">
</iframe>
```

## License

MIT License

## Contact

For questions, suggestions, or support, please open an issue on the GitHub repository. 