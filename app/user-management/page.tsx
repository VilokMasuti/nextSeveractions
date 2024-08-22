import { fetchUsersAction } from "../../actions/index";
import AddUser from "@/components/adduser/AddUser";
import UserCard from "@/components/listuser/UserCard";

const UserManagement = async () => {
  const getListOfUsers = await fetchUsersAction();
  console.log(getListOfUsers);

  return (
    <div className="max-w-full min-h-screen p-20 flex-col bg-gradient-to-r from-indigo-200 to-yellow-100">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl animate-pulse uppercase">User Management</h1>
        <AddUser />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem:any) => (
            <UserCard key={userItem.id} user={userItem} />
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
