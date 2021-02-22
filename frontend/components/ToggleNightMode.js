import nightwind from "nightwind/helper";

export default function ToggleNightMode({ children }) {
  return (
    // ...
    <button className="p-2 pl-3 pr-3" onClick={() => nightwind.toggle()}>
      {children}
    </button>
    // ...
  );
}
