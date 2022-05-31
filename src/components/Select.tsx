import React from "react";

interface SelectProps<T> {
  data: T[];
  renderOption: (value: T) => string;
  keyExtractor: (value: T) => string;
}

export const Select = <T extends unknown>({
  data,
  renderOption,
  keyExtractor
}: SelectProps<T>) => {
  return (
    <select>
      {data.map((item) => (
        <option key={keyExtractor(item)}>{renderOption(item)}</option>
      ))}
    </select>
  );
};
