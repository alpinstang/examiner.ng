const Dropdown = (props: any) => {
  const { getSelected, name } = props;
  return <option value={name}>{props.children}</option>;
};

export default Dropdown;
