import React from 'react';
import { toggleAutomaticMode } from '../api/sala';

interface AutomaticModeButtonProps {
    salaId: number;
    currentMode: boolean;
}

const AutomaticModeButton: React.FC<AutomaticModeButtonProps> = ({ salaId, currentMode }) => {
const [automaticMode, setAutomaticMode] = React.useState(currentMode);

const handleAutomaticMode = async () => {
    const newMode = !automaticMode;
    setAutomaticMode(newMode);

    try {
        await toggleAutomaticMode(salaId, newMode);

    } catch (error) {
        console.log('caiu aq');
        setAutomaticMode(!newMode);
    }
};

return (
    <button
    className={`mt-2 px-4 py-2 rounded ${automaticMode ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'} text-white`}
    onClick={handleAutomaticMode}
    >
    {automaticMode ? 'Modo Automático Ligado' : 'Modo Automático Desligado'}
    </button>
);
};

export default AutomaticModeButton;