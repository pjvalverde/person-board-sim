import React, { useState, useEffect } from 'react';

const PersonBoardSimulator = () => {
  // Estados para los parámetros
  const [length, setLength] = useState(2); // l en metros
  const [personWeight, setPersonWeight] = useState(700); // F en Newtons
  const [boardWeight, setBoardWeight] = useState(100); // P en Newtons
  const [alpha, setAlpha] = useState(0.4); // α coeficiente para centroide
  const [beta, setBeta] = useState(0.6); // β coeficiente para centroide
  
  // Estados para las fuerzas calculadas
  const [forces, setForces] = useState({
    VA: 0,
    VB: 0
  });
  
  // Calcular las fuerzas de reacción
  useEffect(() => {
    // Posición del centroide: xc = αex + βey
    const xc = alpha * length;
    
    // Momento respecto a A para calcular VB
    // VB * l = F * xc + P * (l/2)
    const VB = (personWeight * xc + boardWeight * length/2) / length;
    
    // Equilibrio de fuerzas verticales
    const VA = personWeight + boardWeight - VB;
    
    setForces({
      VA: VA.toFixed(1),
      VB: VB.toFixed(1)
    });
  }, [length, personWeight, boardWeight, alpha, beta]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Simulador de Persona en Tabla</h1>
        
        <div className="relative w-full h-80 bg-slate-100 rounded-lg mb-6">
          <svg viewBox="0 0 600 300" className="w-full h-full">
            {/* Tabla */}
            <line 
              x1={100} 
              y1={150} 
              x2={500} 
              y2={150} 
              stroke="brown" 
              strokeWidth="8"
            />
            
            {/* Soportes */}
            <line x1={100} y1={150} x2={100} y2={200} stroke="black" strokeWidth="2"/>
            <line x1={500} y1={150} x2={500} y2={200} stroke="black" strokeWidth="2"/>
            
            {/* Persona (representación simplificada) */}
            <path
              d={`M ${100 + alpha * 400} 120 
                  C ${100 + alpha * 400 - 50} 130, 
                    ${100 + alpha * 400 + 50} 130, 
                    ${100 + alpha * 400 + 100} 120`}
              fill="none"
              stroke="#666"
              strokeWidth="2"
            />
            
            {/* Centro de masa de la persona */}
            <circle 
              cx={100 + alpha * 400} 
              cy={130} 
              r="5" 
              fill="red"
            />
            <text x={90 + alpha * 400} y={110} className="text-sm">C</text>
            
            {/* Fuerzas */}
            {/* VA */}
            <line 
              x1={100} 
              y1={200} 
              x2={100} 
              y2={200 - forces.VA * 0.1} 
              stroke="blue" 
              strokeWidth="2" 
              markerEnd="url(#arrowhead)"
            />
            <text x={60} y={180} fill="blue">VA = {forces.VA}N</text>
            
            {/* VB */}
            <line 
              x1={500} 
              y1={200} 
              x2={500} 
              y2={200 - forces.VB * 0.1} 
              stroke="blue" 
              strokeWidth="2" 
              markerEnd="url(#arrowhead)"
            />
            <text x={460} y={180} fill="blue">VB = {forces.VB}N</text>
            
            {/* Peso persona */}
            <line 
              x1={100 + alpha * 400} 
              y1={130} 
              x2={100 + alpha * 400} 
              y2={130 + 30} 
              stroke="green" 
              strokeWidth="2" 
              markerEnd="url(#arrowhead)"
            />
            <text x={110 + alpha * 400} y={160} fill="green">F = {personWeight}N</text>
            
            {/* Peso tabla */}
            <line 
              x1={300} 
              y1={150} 
              x2={300} 
              y2={180} 
              stroke="brown" 
              strokeWidth="2" 
              markerEnd="url(#arrowhead)"
            />
            <text x={310} y={175} fill="brown">P = {boardWeight}N</text>
            
            {/* Definición de flecha */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Longitud de la tabla (l): {length}m
            </label>
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
              min={1}
              max={4}
              step={0.1}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Peso de la persona (F): {personWeight}N
            </label>
            <input
              type="range"
              value={personWeight}
              onChange={(e) => setPersonWeight(Number(e.target.value))}
              className="w-full"
              min={400}
              max={1000}
              step={10}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Peso de la tabla (P): {boardWeight}N
            </label>
            <input
              type="range"
              value={boardWeight}
              onChange={(e) => setBoardWeight(Number(e.target.value))}
              className="w-full"
              min={50}
              max={200}
              step={5}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Posición del centroide (α): {alpha}
            </label>
            <input
              type="range"
              value={alpha}
              onChange={(e) => {
                const newAlpha = Number(e.target.value);
                setAlpha(newAlpha);
                setBeta(1 - newAlpha);
              }}
              className="w-full"
              min={0.1}
              max={0.9}
              step={0.1}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-slate-100 rounded-lg">
          <div>
            <h3 className="font-medium">Reacción en A (VA):</h3>
            <p>{forces.VA} N</p>
          </div>
          <div>
            <h3 className="font-medium">Reacción en B (VB):</h3>
            <p>{forces.VB} N</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-medium mb-2">Ecuaciones:</h3>
          <p>1. ΣFy = 0: VA + VB = F + P</p>
          <p>2. ΣMA = 0: VB·l = F·xc + P·l/2</p>
          <p>Donde:</p>
          <p>xc = α·l (posición del centroide)</p>
          <p>VA + VB = F + P (equilibrio vertical)</p>
        </div>
      </div>
    </div>
  );
};

export default PersonBoardSimulator;
