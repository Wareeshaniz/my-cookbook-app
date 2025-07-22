import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogOut, PlusCircle } from "lucide-react";
import { headerStyles, iconStyles } from "@/constants/styles";
import Logo from "./Logo";

function Header({
  onAddRecipe,
  showForm,
  onSignOut,
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className={headerStyles.container}>
      <Logo />
      <div className={headerStyles.searchWrapper}>
        <Input
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className={headerStyles.actionsWrapper}>
        {!showForm && (
          <Button variant="outline" onClick={onAddRecipe}>
            <PlusCircle className={iconStyles.button} />
            Add Recipe
          </Button>
        )}

        <Button variant="outline" onClick={onSignOut}>
          <LogOut className={iconStyles.button} />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Header;
