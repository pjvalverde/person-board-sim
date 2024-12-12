
[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,vite)](https://skillicons.dev)
# Person on Board Simulator

A physics simulation demonstrating static equilibrium of a person lying on a supported board. This interactive simulation helps engineering students understand concepts of forces and moments in a static system.

## Description

This simulator visualizes a physics problem where a person is lying on a board supported at both ends. It calculates:
- Vertical reaction forces at both supports
- Effects of weight distribution
- Impact of the person's position on the system

Key features:
- Interactive controls for weight and position adjustment
- Real-time calculation of reaction forces
- Visual representation of forces and moments
- Educational tool for understanding static equilibrium

## Demo

You can access the live simulation at: https://pjvalverde.github.io/person-board-sim/

## Physics Model

The simulation is based on the following equilibrium equations:
1. Sum of Forces: VA + VB = F + P
2. Sum of Moments: VB·l = F·xc + P·l/2

Where:
- VA, VB: Vertical reaction forces at supports
- F: Weight of the person
- P: Weight of the board
- l: Length of the board
- xc: Position of the person's center of mass (xc = αl)

## Usage

Use the sliders to adjust:
- Length of the board (l)
- Weight of the person (F)
- Weight of the board (P)
- Position of the center of mass (α)

The simulation will automatically calculate and display:
- Reaction force at point A (VA)
- Reaction force at point B (VB)

## Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/pjvalverde/person-board-sim.git

# Navigate to project directory
cd person-board-sim

# Install dependencies
npm install

# Start development server
npm run dev
```

## Technologies Used

- React
- Vite
- GitHub Pages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, please open an issue in the repository.

## Acknowledgments

- Based on engineering statics principles
- Inspired by common physics education problems
- Developed for educational purposes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
