import {
  faSearch,
  faShoppingCart,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faSearch, faShoppingCart, faTrash, faCheck);
};

export default Icons;
