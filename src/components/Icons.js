import {
  faShoppingCart,
  faTrash,
  faCheck,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faShoppingCart, faTrash, faCheck, faAngleLeft);
};

export default Icons;
