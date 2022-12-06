import { StyledSwitch } from './switch.style';
import { SwitchProps } from './switch.interface';
import React from 'react';

const Switch = ({ onSwitch, isChecked }: SwitchProps) => {
  return (
    <StyledSwitch>
      <input
        onChange={(e) => onSwitch(e.target.checked)}
        type="checkbox"
        id="switch"
        checked={isChecked}
      />
      <label htmlFor="switch">Toggle</label>
    </StyledSwitch>
  );
};

export default Switch;
