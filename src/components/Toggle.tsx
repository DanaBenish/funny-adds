import "./Toggle.css";

// Define the types for the props
interface ToggleProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // function that handles checkbox change
  isChecked: boolean; // indicates whether the checkbox is checked
}

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};
