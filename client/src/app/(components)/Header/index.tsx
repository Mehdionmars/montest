
type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
      <div className="flex items-center space-x-4">
      </div>
    </header>
  );
};

export default Header;
