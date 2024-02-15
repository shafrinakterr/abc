/* eslint-disable react/prop-types */
import CategoriesList from "./CategoriesList";
import Tarik from "./Tarik";
import Logo from "./Logo";
import Search from "./Search";

const Header = ({handleChange, onDebouce}) => {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <Tarik />

        <Logo />

        <Search  onDebouce={onDebouce}/>
      </div>
      <CategoriesList handleChange={handleChange} />
    </nav>
  );
};

export default Header;
