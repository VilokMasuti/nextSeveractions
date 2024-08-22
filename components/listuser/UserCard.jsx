"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deletedUserAction, editedUserAction } from "@/actions";
import { useContext } from "react";
import { UserContext } from "../../Context/index";

const UserCard = ({user}) => {
  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } =
    useContext(UserContext);

const handledeleteuser =  async(getCurrentUserID) =>{
    const res = await deletedUserAction (getCurrentUserID,"/user-management")
  console.log(res);
  
  }


  const handleEdituser = async (getCurrentUser) =>{
 setOpenPopup(true),
 setAddNewUserFormData({
  firstName:getCurrentUser?.firstName,
  lastName: getCurrentUser?.lastName,
  email: getCurrentUser?.email,
  address: getCurrentUser?.address,
 })
 setCurrentEditedID(getCurrentUser?._id)
    }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
           <Button onClick={() =>{handleEdituser(user)}} >Edit</Button>
   
        <Button onClick={()=> { handledeleteuser(user?._id)
        }} >Delete</Button>
      </CardFooter>
    </Card>
  )
}

export default UserCard;
