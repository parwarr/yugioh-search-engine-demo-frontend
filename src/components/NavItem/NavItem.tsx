const NavItem = (props: { title: string }) => {
  return (
    <div className='text-white text-xl'>
      <p>{props.title}</p>
    </div>
  );
};

export default NavItem;
