import React, { useState } from 'react';
import { MapPin, Leaf, Users, Calculator, Camera } from 'lucide-react';

const CarbonApp = () => {
  const [activeTab, setActiveTab] = useState('measure');
  const [energyConsumption, setEnergyConsumption] = useState<number>(0);
  const [transportation, setTransportation] = useState<number>(0);
  const [waste, setWaste] = useState<number>(0);
  const [totalEmissions, setTotalEmissions] = useState<number>(0);

  const calculateEmissions = () => {
    // Factores de emisión simplificados (kg CO2e por unidad)
    const energyFactor = 0.5;  // por kWh
    const transportFactor = 2.3; // por litro de combustible
    const wasteFactor = 0.3;   // por kg de residuos

    const total = (
      energyConsumption * energyFactor +
      transportation * transportFactor +
      waste * wasteFactor
    ).toFixed(2);

    setTotalEmissions(Number(total));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'measure':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6">Cálculo de Huella de Carbono</h2>
            <div className="space-y-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-4">Ingrese sus datos mensuales</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consumo de energía (kWh)
                    </label>
                    <input
                      type="number"
                      value={energyConsumption}
                      onChange={(e) => setEnergyConsumption(Number(e.target.value))}
                      className="w-full p-2 border rounded-md"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consumo de combustible (litros)
                    </label>
                    <input
                      type="number"
                      value={transportation}
                      onChange={(e) => setTransportation(Number(e.target.value))}
                      className="w-full p-2 border rounded-md"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Residuos generados (kg)
                    </label>
                    <input
                      type="number"
                      value={waste}
                      onChange={(e) => setWaste(Number(e.target.value))}
                      className="w-full p-2 border rounded-md"
                      placeholder="0"
                    />
                  </div>
                  <button
                    onClick={calculateEmissions}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Calcular Emisiones
                  </button>
                </div>
              </div>
              
              {totalEmissions > 0 && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Resultados</h3>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">
                      {totalEmissions}
                    </p>
                    <p className="text-sm text-gray-600">
                      kg CO2e por mes
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 'learn':
        return (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Componente Educativo</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold mb-2">Para Productores</h3>
                <ul className="space-y-2 text-sm">
                  <li>Capacitación en medición</li>
                  <li>Mejores prácticas agrícolas</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-green-700">
          EcoTurismo Carbono-Consciente
        </h1>
        <div className="flex items-center space-x-2 mt-2">
          <Leaf className="w-6 h-6 text-green-500" />
          <span className="text-sm text-gray-600">
            Midiendo y educando sobre el impacto ambiental
          </span>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('measure')}
          className={`flex items-center gap-2 px-4 py-2 rounded ${
            activeTab === 'measure' ? 'bg-green-500 text-white' : 'bg-gray-100'
          }`}
        >
          <Calculator className="w-4 h-4" />
          Medición
        </button>
        <button
          onClick={() => setActiveTab('learn')}
          className={`flex items-center gap-2 px-4 py-2 rounded ${
            activeTab === 'learn' ? 'bg-green-500 text-white' : 'bg-gray-100'
          }`}
        >
          <Users className="w-4 h-4" />
          Educación
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default CarbonApp;