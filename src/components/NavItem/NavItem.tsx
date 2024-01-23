const NavItem = (props: { title: string }) => {
  return (
    <div className='text-white text-xl p-[60px]'>
      <p>{props.title}</p>
    </div>
  );
};

export default NavItem;
