import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [shouldReset, setShouldReset] = useState(false);

    const handleNumber = (number) => {
        if (display === '0' || shouldReset) {
            setDisplay(number);
            setShouldReset(false);
        } else {
            setDisplay(display + number);
        }
    };

    const handleOperator = (operator) => {
        setEquation(display + ' ' + operator + ' ');
        setShouldReset(true);
    };

    const calculate = () => {
        try {
            // Use Function constructor instead of eval for a bit more safety, 
            // though for a simple calculator it's similar.
            const result = new Function('return ' + equation + display)();
            setDisplay(String(result));
            setEquation('');
            setShouldReset(true);
        } catch (error) {
            setDisplay('Error');
            setEquation('');
            setShouldReset(true);
        }
    };

    const clear = () => {
        setDisplay('0');
        setEquation('');
        setShouldReset(false);
    };

    const buttons = [
        { label: 'AC', action: clear, type: 'control' },
        { label: '/', action: () => handleOperator('/'), type: 'operator' },
        { label: '*', action: () => handleOperator('*'), type: 'operator' },
        { label: '7', action: () => handleNumber('7'), type: 'number' },
        { label: '8', action: () => handleNumber('8'), type: 'number' },
        { label: '9', action: () => handleNumber('9'), type: 'number' },
        { label: '-', action: () => handleOperator('-'), type: 'operator' },
        { label: '4', action: () => handleNumber('4'), type: 'number' },
        { label: '5', action: () => handleNumber('5'), type: 'number' },
        { label: '6', action: () => handleNumber('6'), type: 'number' },
        { label: '+', action: () => handleOperator('+'), type: 'operator' },
        { label: '1', action: () => handleNumber('1'), type: 'number' },
        { label: '2', action: () => handleNumber('2'), type: 'number' },
        { label: '3', action: () => handleNumber('3'), type: 'number' },
        { label: '=', action: calculate, type: 'equals' },
        { label: '0', action: () => handleNumber('0'), type: 'number', className: 'double' },
        { label: '.', action: () => handleNumber('.'), type: 'number' },
    ];

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="display-screen">
                    <div className="equation">{equation}</div>
                    <div className="current-value">{display}</div>
                </div>
                <div className="button-grid">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            onClick={btn.action}
                            className={`calc-btn ${btn.type} ${btn.className || ''}`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
