"use server";

import { connectDB } from "../db/connectDB";
import { revalidatePath } from "next/cache";
import User from "../models/userModel";

export const addNewUserAction = async (formData,pathToRevalidate) => {
  try {
    await connectDB(); // This should trigger the logging in the terminal

    const newlyCreatedUser = await User.create(formData);

    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "USER ADDED SUCCESSFULLY",
      };
    } else {
      return {
        success: false,
        message: "Some error occurred! Please try again",
      };
    }
  } catch (error) {
    console.error("Error in addNewUserAction:", error.message);
    return {
      success: false,
      message: `Error occurred: ${error.message}`,
    };
  }
};

// featch user 
export const fetchUsersAction =  async () => {
 
  await connectDB();
  try {
    const listOfUsers = await User.find({});
    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}

// edite user

export const editedUserAction = async (currentUserId,formData,pathToRevalidate) =>{
   await connectDB()
   try {
    const { firstName, lastName, email, address } = formData;
    const updatedUser = await  User.findOneAndUpdate({_id:currentUserId,},{
      firstName, email, lastName, address 
    },{
      new:true
    });
if(updatedUser){
  revalidatePath(pathToRevalidate);
  return{
    success: true,
    message: "User Edited successfully",
  }

}else {
  return{
    success: false,
    message: "Not able perform edit operation! Please try again later",
  }
}
   } catch (error) {
    return{
      success: false,
      message: "Not able perform edit operation! Please try again later",
    }
   }

}
//delete a user action
export const deletedUserAction = async (currentUserID, pathToRevalidate) => {
    await connectDB()
    try {
      const deletedUser = await User.findByIdAndDelete(currentUserID);
      if(deletedUser){
        revalidatePath(pathToRevalidate);
        return{
          success: true,
          message: "User deleted successfully",
        }
      }else{
        return{
          success: false,
        message: "Not able perform delete operation! Please try again later",
        }
      }
      
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Some error occured! Please try again",
      }
      
    }
}
