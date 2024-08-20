import AddUser from "@/components/adduser/AddUser";

async function UserManagement() {
return (
  <div className=" max-w-full min-h-screen p-20  flex-col  bg-gradient-to-r from-indigo-200 to-yellow-100">
    <div className="flex justify-between "> 

    <h1 className="    text-2xl animate-pulse  uppercase ">User Management</h1>
    <AddUser/>
    </div>


  </div>
)
}

export default UserManagement;
