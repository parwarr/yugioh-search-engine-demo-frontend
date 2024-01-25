const formatName = (name: string) => {
  if (!name) return '';
  return name.replace(/-/g, ' ');
};

export default formatName;
