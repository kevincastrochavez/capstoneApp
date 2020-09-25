import {
  faShoppingCart,
  faTrash,
  faCheck,
  faAngleLeft,
  faTshirt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faShoppingCart,
    faTrash,
    faCheck,
    faAngleLeft,
    faTshirt,
    faBars
  );
};

export default Icons;
