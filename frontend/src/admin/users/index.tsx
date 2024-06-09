import { Person } from "@mui/icons-material"
import UserList from "./UserList"
import UserEdit from "./UserEdit"
import UserCreate from "./UserCreate"

const userResourceProps = {
  name: "users",
  icon: Person,
  list: UserList,
  edit: UserEdit,
  create: UserCreate,
}

export default userResourceProps